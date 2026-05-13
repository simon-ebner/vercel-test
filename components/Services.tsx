const services = [
  {
    title: "Kunststofffenster",
    description:
      "Pflegeleicht, wärmedämmend und in vielen Farben. Mehrkammer-Profile mit 3‑fach Verglasung.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z M12 4v16 M4 12h16" />
    ),
  },
  {
    title: "Holzfenster",
    description:
      "Natürliche Optik, hervorragende Dämmwerte. Lärche, Eiche oder Meranti — auf Wunsch lasiert oder lackiert.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c0-4 3-7 9-7s9 3 9 7-3 7-9 7-9-3-9-7zM6 12h12" />
    ),
  },
  {
    title: "Aluminiumfenster",
    description:
      "Schlanke Ansichten, hohe Stabilität — perfekt für große Glasflächen und moderne Architektur.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z M4 8h16 M4 16h16 M9 4v16 M15 4v16" />
    ),
  },
  {
    title: "Haustüren",
    description:
      "Einbruchhemmend (RC2/RC3), wärmedämmend und designstark. Mit moderner Smart-Lock-Technologie.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12v18H6z M14 12h.01 M9 21V9h6v12" />
    ),
  },
  {
    title: "Wintergärten",
    description:
      "Planung, Statik und Montage Ihres Wohlfühl-Wintergartens — von der Verglasung bis zur Beschattung.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V10l9-7 9 7v11 M3 21h18 M10 21v-6h4v6" />
    ),
  },
  {
    title: "Reparatur & Wartung",
    description:
      "Beschläge nachjustieren, Dichtungen erneuern, Glasbruch ersetzen — schnell und zuverlässig.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 4l2.5 2.5L9 11l-2.5-2.5L11 4z M14.5 7.5L20 13l-3 3-5.5-5.5 M4 20l4-4" />
    ),
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Vom ersten Aufmaß bis zur fachgerechten Montage nach RAL — wir liefern Qualität,
            die viele Jahrzehnte hält.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-brand-300 hover:shadow-lg transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-100">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  {s.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
