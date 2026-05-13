export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">
                FB
              </span>
              <span className="font-semibold text-white">Fensterbau Meisterbetrieb</span>
            </div>
            <p className="mt-4 text-sm max-w-md">
              Ihr regionaler Spezialist für Fenster, Türen und Wintergärten — seit 1987.
              Eingetragener Meisterbetrieb der Tischler-Innung.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Kontakt</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Musterstraße 12</li>
              <li>21423 Winsen (Luhe)</li>
              <li>
                <a href="tel:+4941719876543" className="hover:text-white">
                  +49 15755000089
                </a>
              </li>
              <li>
                <a href="mailto:info@fensterbau-meister.de" className="hover:text-white">
                  info@fensterbau-meister.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Rechtliches</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Impressum</a></li>
              <li><a href="#" className="hover:text-white">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white">AGB</a></li>
              <li><a href="#" className="hover:text-white">Widerruf</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between text-xs text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Fensterbau Meisterbetrieb. Alle Rechte vorbehalten.</p>
          <p>Gefertigt in Deutschland.</p>
        </div>
      </div>
    </footer>
  );
}
