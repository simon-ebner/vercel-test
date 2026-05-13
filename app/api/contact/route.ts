import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  consent?: boolean;
}

interface ValidationResult {
  ok: boolean;
  errors: string[];
  data?: Required<Pick<ContactPayload, "name" | "email" | "message">> &
    Omit<ContactPayload, "name" | "email" | "message">;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = {
  name: 120,
  email: 180,
  phone: 40,
  service: 80,
  message: 4000,
};

function sanitize(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  // Strip Unicode control chars; trim handles surrounding whitespace.
  return value.replace(/\p{Cc}/gu, "").trim().slice(0, max);
}

function validate(body: ContactPayload): ValidationResult {
  const errors: string[] = [];

  const name = sanitize(body.name, MAX_LEN.name);
  const email = sanitize(body.email, MAX_LEN.email).toLowerCase();
  const phone = sanitize(body.phone, MAX_LEN.phone);
  const service = sanitize(body.service, MAX_LEN.service);
  const message = sanitize(body.message, MAX_LEN.message);
  const consent = body.consent === true;

  if (name.length < 2) errors.push("Bitte geben Sie Ihren Namen an.");
  if (!EMAIL_RE.test(email)) errors.push("Bitte geben Sie eine gültige E-Mail-Adresse an.");
  if (message.length < 10) errors.push("Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).");
  if (!consent) errors.push("Bitte stimmen Sie der Datenverarbeitung zu.");

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    errors: [],
    data: { name, email, phone, service, message, consent },
  };
}

const submissions: { ip: string; at: number }[] = [];
const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  for (let i = submissions.length - 1; i >= 0; i--) {
    if (now - submissions[i].at > RATE_WINDOW_MS) submissions.splice(i, 1);
  }
  const count = submissions.filter((s) => s.ip === ip).length;
  if (count >= RATE_LIMIT) return true;
  submissions.push({ ip, at: now });
  return false;
}

async function persist(entry: Record<string, unknown>) {
  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "contact-submissions.jsonl");
  await fs.mkdir(dir, { recursive: true });
  await fs.appendFile(file, JSON.stringify(entry) + "\n", "utf8");
}

async function sendNotificationEmail(entry: Record<string, unknown>) {
  const to = process.env.CONTACT_NOTIFY_EMAIL;
  if (!to) return;

  if (process.env.RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? "no-reply@fensterbau-meister.de",
          to,
          subject: `Neue Anfrage von ${entry.name}`,
          text: [
            `Name: ${entry.name}`,
            `E-Mail: ${entry.email}`,
            `Telefon: ${entry.phone || "-"}`,
            `Leistung: ${entry.service || "-"}`,
            "",
            "Nachricht:",
            entry.message,
            "",
            `Eingegangen: ${entry.receivedAt}`,
          ].join("\n"),
        }),
      });
    } catch (err) {
      console.error("[contact] Resend send failed", err);
    }
  } else {
    console.info("[contact] CONTACT_NOTIFY_EMAIL set but no provider configured; entry stored only");
  }
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Ungueltiger Request-Body." },
      { status: 400 }
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut." },
      { status: 429 }
    );
  }

  const result = validate(body);
  if (!result.ok || !result.data) {
    return NextResponse.json(
      { error: result.errors.join(" ") },
      { status: 400 }
    );
  }

  const entry = {
    ...result.data,
    receivedAt: new Date().toISOString(),
    ip,
    userAgent: request.headers.get("user-agent") ?? null,
  };

  try {
    await persist(entry);
  } catch (err) {
    console.error("[contact] persist failed", err);
    return NextResponse.json(
      { error: "Interner Fehler beim Speichern. Bitte spaeter erneut versuchen." },
      { status: 500 }
    );
  }

  await sendNotificationEmail(entry);

  return NextResponse.json(
    {
      ok: true,
      message:
        "Vielen Dank - Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden.",
    },
    { status: 201 }
  );
}

export function GET() {
  return NextResponse.json(
    { error: "Methode nicht erlaubt." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
