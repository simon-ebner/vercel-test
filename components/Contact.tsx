"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "Kunststofffenster",
  message: "",
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string>("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedback(data.error ?? "Senden fehlgeschlagen. Bitte erneut versuchen.");
        return;
      }

      setStatus("success");
      setFeedback(
        data.message ??
          "Vielen Dank — Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden."
      );
      setForm(initialState);
    } catch {
      setStatus("error");
      setFeedback("Netzwerkfehler. Bitte versuchen Sie es später erneut.");
    }
  }

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Lassen Sie uns über Ihr Projekt sprechen.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Schreiben Sie uns über das Formular oder rufen Sie direkt an —
              wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Termin.
            </p>

            <dl className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.81a2 2 0 01-.45 1.86l-1.27 1.52a16 16 0 006.59 6.59l1.52-1.27a2 2 0 011.86-.45l2.81.7A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.716 23 1 14.284 1 4V3a2 2 0 012-2z" />
                  </svg>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Telefon</dt>
                  <dd className="text-slate-600">
                    <a href="tel:+4941719876543" className="hover:text-brand-600">
                      +49 15755000089
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6 M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">E‑Mail</dt>
                  <dd className="text-slate-600">
                    <a href="mailto:info@fensterbau-meister.de" className="hover:text-brand-600">
                      info@fensterbau-meister.de
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a8 8 0 00-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 00-8-8z M12 11a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Werkstatt & Ausstellung</dt>
                  <dd className="text-slate-600">
                    Musterstraße 12<br />21423 Winsen (Luhe)
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2 M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Öffnungszeiten</dt>
                  <dd className="text-slate-600">
                    Mo–Fr 8:00–17:00<br />Sa 9:00–13:00 (Ausstellung)
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-slate-200"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="mt-1 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600"
                    placeholder="Max Mustermann"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    E‑Mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="mt-1 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600"
                    placeholder="max@beispiel.de"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="mt-1 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600"
                    placeholder="+49 …"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700">
                    Gewünschte Leistung
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="mt-1 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-brand-600"
                  >
                    <option>Kunststofffenster</option>
                    <option>Holzfenster</option>
                    <option>Aluminiumfenster</option>
                    <option>Haustüren</option>
                    <option>Wintergarten</option>
                    <option>Reparatur & Wartung</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="mt-1 block w-full rounded-md border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-brand-600"
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben (Anzahl Fenster, Maße, Zeitrahmen)…"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      checked={form.consent}
                      onChange={(e) => update("consent", e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-600"
                    />
                    <span className="text-sm text-slate-600">
                      Ich willige in die Verarbeitung meiner Daten zur Bearbeitung der Anfrage
                      gemäß <a href="#" className="text-brand-600 hover:underline">Datenschutzerklärung</a> ein. *
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center rounded-md bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="mr-2 h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
                      </svg>
                      Wird gesendet…
                    </>
                  ) : (
                    "Anfrage absenden"
                  )}
                </button>
                <p className="text-xs text-slate-500">* Pflichtfeld. Wir antworten in der Regel innerhalb eines Werktags.</p>
              </div>

              {status === "success" && (
                <div
                  role="status"
                  className="mt-6 rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-800"
                >
                  {feedback}
                </div>
              )}
              {status === "error" && (
                <div
                  role="alert"
                  className="mt-6 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800"
                >
                  {feedback}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
