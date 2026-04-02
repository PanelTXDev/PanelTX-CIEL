import { BookOpen, Shield, Briefcase, Network, ServerCog, ShieldCheck, ChevronRight } from 'lucide-react';
import { useLocation } from 'wouter';

const topics = [
  {
    icon: Network,
    title: 'Réseaux',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    dot: 'bg-blue-400',
    skills: [
      'Routage et commutation',
      'NAT/PAT',
      'ARP, ACL',
      'Câblage réseau',
      'Packet Tracer (simulation réseau)',
    ],
  },
  {
    icon: ServerCog,
    title: 'Systèmes & Services',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    dot: 'bg-violet-400',
    skills: [
      'Mini serveur web (installation, config)',
      'Serveur Windows 2012 (rôles, services)',
      'Linux (commandes, administration)',
      'Pfsense (firewall, routage, filtrage)',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersécurité',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    dot: 'bg-sky-400',
    skills: [
      'Outils Cyber (analyse, tests)',
      'Sécurisation des systèmes',
      'Détection et réponse aux menaces',
    ],
  },
];

const programs = [
  {
    icon: BookOpen,
    title: 'Bac Pro CIEL',
    subtitle: 'Cybersécurité, Informatique et Réseaux, Électronique',
    description: 'Ce diplôme prépare aux métiers de l\'électronique et de l\'informatique industrielle avec des compétences techniques solides pour concevoir et déployer des solutions innovantes.',
    highlights: ['Durée : 3 ans', 'Formation initiale', 'Stage en entreprise', 'Débouchés variés'],
    gradient: 'from-blue-700 to-blue-900',
    route: '/formations/bac-pro-ciel',
    testId: 'button-learn-more-bac-pro',
  },
  {
    icon: Shield,
    title: 'CS Cyber',
    subtitle: 'Certificat de Spécialisation en Cybersécurité',
    description: 'Cette formation vise à former des spécialistes capables de protéger les systèmes d\'information contre les menaces numériques, domaine en forte croissance.',
    highlights: ['Durée : 1 an', 'Spécialisation poussée', 'Après un Bac Pro', 'Forte demande sur le marché'],
    gradient: 'from-violet-600 to-purple-800',
    route: '/formations/cs-cyber',
    testId: 'button-learn-more-cs-cyber',
  },
  {
    icon: Briefcase,
    title: 'BTS CIEL en Alternance',
    subtitle: 'Cybersécurité, Informatique et Réseaux, Électronique',
    description: 'Ce BTS en alternance combine enseignement théorique et expérience professionnelle en entreprise, pour une insertion rapide dans le monde du travail.',
    highlights: ['Durée : 2 ans', 'Alternance école/entreprise', 'Rémunération', 'Expérience professionnelle'],
    gradient: 'from-sky-600 to-sky-900',
    route: '/formations/bts-ciel-alternance',
    testId: 'button-learn-more-bts',
  },
];

export default function Programs() {
  const [, setLocation] = useLocation();

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Nos Formations</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Des parcours adaptés à vos ambitions en cybersécurité, informatique et électronique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {programs.map(({ icon: Icon, title, subtitle, description, highlights, gradient, route, testId }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className={`bg-gradient-to-br ${gradient} p-6 text-white`}>
                <Icon className="h-8 w-8 mb-3 opacity-90" />
                <h3 className="text-xl font-bold mb-1">{title}</h3>
                <p className="text-xs opacity-75 leading-relaxed">{subtitle}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2 mb-6">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center text-sm text-gray-700">
                      <ChevronRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <button
                  data-testid={testId}
                  onClick={() => setLocation(route)}
                  className="w-full bg-blue-900 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors"
                >
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">Thématiques abordées</h3>
          <p className="text-sm text-gray-400 text-center mb-8">Ce que vous apprendrez en cours et en TP</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topics.map(({ icon: Icon, title, color, bg, dot, skills }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className={`inline-flex items-center gap-2 ${bg} rounded-lg px-3 py-2 w-fit`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                  <span className={`text-sm font-semibold ${color}`}>{title}</span>
                </div>
                <ul className="space-y-2">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${dot}`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
