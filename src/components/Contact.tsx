import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nous Contacter</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pour toute information complémentaire sur nos formations
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Lycée Polyvalent Jean Moulin</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-900 text-white p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                  <p className="text-gray-600 leading-relaxed">
                    19 Avenue des Martyrs de la Résistance<br />
                    34500 Béziers<br />
                    France
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900 text-white p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+33467355935" className="hover:text-blue-900 transition-colors">
                      04 67 35 59 35
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900 text-white p-3 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:contact@jean-moulin-beziers.fr" className="hover:text-blue-900 transition-colors">
                      contact@jean-moulin-beziers.fr
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900 text-white p-3 rounded-lg flex-shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Portail ENT</h4>
                  <p className="text-gray-600">
                    <a href="https://jean-moulin-beziers.mon-ent-occitanie.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900 transition-colors">
                      jean-moulin-beziers.mon-ent-occitanie.fr
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Horaires d'accueil</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-semibold">8h00 - 17h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-semibold">Fermé</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-semibold">Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
