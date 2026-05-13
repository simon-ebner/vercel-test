# Fensterbau Landing Page

Next.js 14 (App Router) + Tailwind CSS Landingpage für einen Fensterbau-Meisterbetrieb,
inklusive Kontaktformular mit serverseitigem Backend (API-Route, Validierung,
Rate-Limit, Persistenz als JSONL, optionaler E-Mail-Versand via Resend).

## Schnellstart

```bash
npm install
npm run dev
```

Dann <http://localhost:3000> öffnen.

## Build

```bash
npm run build
npm run start
```

## Projekt-Struktur

```
app/
  layout.tsx          Root-Layout + Google Font (Inter) + globale Styles
  page.tsx            Composiert alle Sektionen
  globals.css         Tailwind-Direktiven
  api/contact/route.ts  POST-Handler für das Kontaktformular
components/
  Navbar.tsx          Sticky-Navigation mit Mobile-Menü
  Hero.tsx            Hero-Sektion mit SVG-Fenstergrafik
  Services.tsx        Sechs Leistungs-Karten
  About.tsx           Über-uns + Kundenstimme
  Gallery.tsx         Referenz-Grid (Platzhalter-SVGs)
  Contact.tsx         Formular mit Client-Validierung + Fetch zur API
  Footer.tsx          Kontakt + Rechtliches
```

## Kontaktformular — Backend

`POST /api/contact` erwartet JSON:

```json
{
  "name": "Max Mustermann",
  "email": "max@example.com",
  "phone": "+49 …",
  "service": "Kunststofffenster",
  "message": "Anfrage Text",
  "consent": true
}
```

Validiert: Name, E-Mail, Nachricht (Mindestlänge), Einwilligung.
Rate-Limit: 5 Anfragen / Minute pro IP (in-memory).
Persistenz: `data/contact-submissions.jsonl` (eine Anfrage pro Zeile).

### Optionaler E-Mail-Versand

Variablen aus `.env.example` nach `.env.local` kopieren und ausfüllen:

- `CONTACT_NOTIFY_EMAIL` — Empfänger
- `CONTACT_FROM_EMAIL` — Absender (bei Resend verifiziert)
- `RESEND_API_KEY` — API-Key von <https://resend.com>

Ohne `RESEND_API_KEY` werden Anfragen nur in der JSONL-Datei gespeichert.
