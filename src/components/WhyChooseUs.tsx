import { Award, Wrench, UserCheck, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Un enseignement de qualité',
      description: 'Dispensé par des professionnels et des enseignants expérimentés, notre programme garantit une formation d\'excellence reconnue par les entreprises.'
    },
    {
      icon: Wrench,
      title: 'Des équipements modernes',
      description: 'Formation pratique avec du matériel de pointe conforme aux standards industriels actuels pour une immersion professionnelle optimale.'
    },
    {
      icon: UserCheck,
      title: 'Un accompagnement personnalisé',
      description: 'Chaque étudiant bénéficie d\'un suivi individualisé tout au long de son parcours pour maximiser ses chances de réussite.'
    },
    {
      icon: TrendingUp,
      title: 'Une forte ouverture vers l\'alternance',
      description: 'Stages et contrats d\'alternance facilités grâce à notre réseau d\'entreprises partenaires, favorisant une insertion rapide dans le monde du travail.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir Notre Section ?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une formation complète et professionnalisante qui vous prépare aux défis du monde industriel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-900 text-white p-4 rounded-lg group-hover:bg-blue-800 transition-colors">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Prêt à rejoindre notre section ?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Découvrez comment intégrer l'une de nos formations et lancez votre carrière dans les technologies de demain
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Candidater maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
