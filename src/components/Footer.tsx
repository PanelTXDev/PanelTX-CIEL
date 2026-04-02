export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CIEL</h3>
            <p className="text-gray-400">
              Formation d'excellence en cybersécurité, informatique et électronique
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Formations</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Bac Pro CIEL
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  CS Cyber
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  BTS CIEL
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens Utiles</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">
                  Pourquoi nous choisir
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors">
                  Actualités
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Section CIEL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
