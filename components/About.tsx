const features = [
  { title: "Meisterqualität", text: "Geprüfter Meisterbetrieb der Tischler-Innung mit eigener Werkstatt." },
  { title: "Energieeffizient", text: "3‑fach Verglasung serienmäßig, Förderfähigkeit durch KfW & BAFA." },
  { title: "Saubere Montage", text: "RAL‑Montage mit Folien‑Abdichtung — pünktlich und besenrein." },
  { title: "Festpreisgarantie", text: "Transparente Angebote ohne versteckte Kosten — schriftlich fixiert." },
];

export default function About() {
  return (
    <section id="ueber-uns" className="py-20 sm:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-200">
              Über uns
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Drei Generationen Handwerk — moderne Technik, alte Tugenden.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Seit 1987 fertigen wir Fenster und Türen für Privatkunden, Bauträger und
              Architekten in der Region. Unsere Stärke: ehrliche Beratung, präzises
              Aufmaß und ein eingespieltes Montage-Team aus festen Mitarbeitern.
            </p>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-600 text-white">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">{f.title}</dt>
                    <dd className="mt-1 text-sm text-slate-600">{f.text}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-xl">
              <blockquote className="text-lg leading-8">
                „Vom Beratungstermin bis zur Montage in zwei Tagen — alles auf den Punkt.
                Unser Haus ist hörbar leiser geworden und die Heizkosten sind spürbar gesunken."
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center font-bold">
                  MK
                </div>
                <div>
                  <p className="font-semibold">Familie Krüger</p>
                  <p className="text-sm text-brand-100">Sanierung Einfamilienhaus, 2024</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 rounded-xl bg-white p-4 shadow-xl ring-1 ring-slate-200">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.54 1.118L10 14.347l-3.36 2.451c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.654 8.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <p className="mt-1 text-sm font-semibold text-slate-900">4,9 / 5,0</p>
              <p className="text-xs text-slate-600">312 Bewertungen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
