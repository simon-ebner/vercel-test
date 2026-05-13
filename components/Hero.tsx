export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-300 blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-96 w-96 rounded-full bg-brand-200 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-inset ring-brand-200">
              Meisterbetrieb seit 1987
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Fenster, die <span className="text-brand-600">Wärme</span> halten und
              <span className="text-brand-600"> Licht</span> hereinlassen.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 max-w-xl">
              Wir fertigen, montieren und warten hochwertige Kunststoff‑, Holz‑ und
              Aluminiumfenster. Energieeffizient, individuell geplant und sauber montiert —
              alles aus einer Hand.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-md bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
              >
                Kostenloses Angebot
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition-colors"
              >
                Leistungen ansehen
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <dt className="text-sm text-slate-600">Jahre Erfahrung</dt>
                <dd className="text-3xl font-bold text-slate-900">37+</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-600">Projekte</dt>
                <dd className="text-3xl font-bold text-slate-900">4.200+</dd>
              </div>
              <div>
                <dt className="text-sm text-slate-600">Garantie</dt>
                <dd className="text-3xl font-bold text-slate-900">10 J.</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200 overflow-hidden">
              <svg viewBox="0 0 400 500" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#bae0fd" />
                    <stop offset="100%" stopColor="#e0eefe" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="url(#sky)" />
                <rect x="40" y="40" width="320" height="420" fill="white" stroke="#0b406d" strokeWidth="6" />
                <line x1="200" y1="40" x2="200" y2="460" stroke="#0b406d" strokeWidth="6" />
                <line x1="40" y1="250" x2="360" y2="250" stroke="#0b406d" strokeWidth="6" />
                <rect x="55" y="55" width="130" height="180" fill="#7cc6fb" opacity="0.6" />
                <rect x="215" y="55" width="130" height="180" fill="#7cc6fb" opacity="0.6" />
                <rect x="55" y="265" width="130" height="180" fill="#7cc6fb" opacity="0.6" />
                <rect x="215" y="265" width="130" height="180" fill="#7cc6fb" opacity="0.6" />
                <circle cx="170" cy="145" r="6" fill="#0b406d" />
                <circle cx="230" cy="145" r="6" fill="#0b406d" />
                <circle cx="170" cy="355" r="6" fill="#0b406d" />
                <circle cx="230" cy="355" r="6" fill="#0b406d" />
              </svg>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl ring-1 ring-slate-200 max-w-[220px]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">U‑Wert 0,7 W/m²K</p>
                  <p className="text-xs text-slate-600">Energieeffizient nach KfW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
