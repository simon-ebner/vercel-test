const projects = [
  { title: "Neubau Einfamilienhaus", location: "Lüneburg", year: "2025", colorFrom: "#0c8ee7", colorTo: "#064b84" },
  { title: "Denkmalsanierung Altbau", location: "Hamburg", year: "2024", colorFrom: "#36a9f6", colorTo: "#0159a0" },
  { title: "Bürogebäude Glasfront", location: "Bremen", year: "2024", colorFrom: "#7cc6fb", colorTo: "#0070c5" },
  { title: "Wintergarten am Hang", location: "Buchholz", year: "2024", colorFrom: "#bae0fd", colorTo: "#0c8ee7" },
  { title: "Reihenhaus Modernisierung", location: "Winsen", year: "2023", colorFrom: "#0c8ee7", colorTo: "#072849" },
  { title: "Haustür mit Smart-Lock", location: "Buxtehude", year: "2023", colorFrom: "#36a9f6", colorTo: "#0b406d" },
];

export default function Gallery() {
  return (
    <section id="referenzen" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Ausgewählte Referenzen
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Ein kleiner Einblick in unsere Arbeit der letzten Monate.
            </p>
          </div>
          <a href="#kontakt" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            Eigenes Projekt anfragen →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl ring-1 ring-slate-200 hover:ring-brand-300 hover:shadow-xl transition-all"
            >
              <div
                className="aspect-[4/3] w-full"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${p.colorFrom}, ${p.colorTo})`,
                }}
              >
                <svg viewBox="0 0 400 300" className="h-full w-full opacity-80">
                  <rect x="30" y="30" width="340" height="240" fill="none" stroke="white" strokeWidth="4" />
                  <line x1="200" y1="30" x2="200" y2="270" stroke="white" strokeWidth="4" />
                  <line x1="30" y1="150" x2="370" y2="150" stroke="white" strokeWidth="4" />
                  <rect x="40" y="40" width="150" height="100" fill="white" opacity="0.2" />
                  <rect x="210" y="40" width="150" height="100" fill="white" opacity="0.2" />
                  <rect x="40" y="160" width="150" height="100" fill="white" opacity="0.2" />
                  <rect x="210" y="160" width="150" height="100" fill="white" opacity="0.2" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  {p.location} · {p.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
