import { useLocation } from 'wouter';
import { Briefcase, ArrowLeft, Clock, GraduationCap, Euro, Network, ServerCog, ShieldCheck, ChevronRight, CheckCircle2, Building2, Home } from 'lucide-react';
import heroBTS from '../assets/images/bts-alternance.png';

export default function BTSCIELAlternance() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <button
            data-testid="button-back-home"
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 group"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 group-hover:bg-sky-100 transition-colors">
              <ArrowLeft className="h-4 w-4 text-sky-700" />
            </span>
            <span className="text-sm font-medium text-gray-600 group-hover:text-sky-700 transition-colors hidden sm:block">
              Retour à l'accueil
            </span>
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Home className="h-3.5 w-3.5" />
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-sky-700 font-medium">BTS CIEL Alternance</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-900">CIEL</span>
            <span className="hidden sm:block text-xs text-gray-400 font-medium">Jean Moulin · Béziers</span>
          </div>
        </div>
      </header>

      <div className="relative min-h-[480px] flex items-end overflow-hidden">
        <img
          src={heroBTS}
          alt="BTS CIEL en alternance"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-900/80 to-sky-700/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-20">
          <p className="text-sky-300 text-xs font-semibold uppercase tracking-widest mb-3">Formation · 2 ans</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-3 flex-shrink-0">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 data-testid="title-bts-ciel" className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">BTS CIEL</h1>
              <p className="text-sky-200 text-sm mt-1 font-medium">Cybersécurité · Informatique · Réseaux · Électronique · <span className="font-bold text-white">En Alternance</span></p>
            </div>
          </div>
          <p className="text-sky-100/90 text-base max-w-2xl mb-8 leading-relaxed">
            2 ans en alternance pour combiner formation technique avancée et expérience professionnelle rémunérée en entreprise.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Clock, text: '2 ans' },
              { icon: Building2, text: 'École & Entreprise' },
              { icon: Euro, text: 'Rémunéré' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-sm font-medium text-white">
                <Icon className="h-3.5 w-3.5" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Présentation de la formation</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le BTS CIEL en alternance est un diplôme de niveau 5 (BAC+2) qui combine enseignement théorique au lycée et expérience professionnelle en entreprise. En <strong>2 ans</strong>, vous développez des compétences techniques avancées tout en acquérant une vraie expérience du monde du travail.
          </p>
          <p className="text-gray-600 leading-relaxed">
            L'alternance vous permet d'être <strong>rémunéré</strong> pendant toute votre formation, de construire un réseau professionnel dès le départ et d'être souvent embauché à l'issue du diplôme par votre entreprise d'accueil.
          </p>
        </section>

        <section className="bg-sky-50 border border-sky-100 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Comment fonctionne l'alternance ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-sky-800">
            <div>
              <p className="font-semibold mb-2">Rythme de l'alternance</p>
              <p className="leading-relaxed">Vous partagez votre temps entre le lycée pour les cours et l'entreprise pour la mise en pratique. Le rythme est généralement de 2 jours à l'école et 3 jours en entreprise par semaine.</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Rémunération</p>
              <p className="leading-relaxed">En tant qu'apprenti, vous percevez un salaire calculé en pourcentage du SMIC selon votre âge et votre niveau d'études. C'est un vrai avantage par rapport à une formation initiale classique.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compétences acquises</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Network,
                color: 'text-sky-600',
                bg: 'bg-sky-50',
                title: 'Réseaux avancés',
                items: ['Architecture réseau complexe', 'VPN et tunnels sécurisés', 'QoS et gestion du trafic', 'Virtualisation réseau (SDN)'],
              },
              {
                icon: ServerCog,
                color: 'text-blue-600',
                bg: 'bg-blue-50',
                title: 'Systèmes & Cloud',
                items: ['Administration avancée Linux/Windows', 'Virtualisation (VMware, Hyper-V)', 'Services Cloud (AWS, Azure)', 'Automatisation et scripting'],
              },
              {
                icon: ShieldCheck,
                color: 'text-violet-600',
                bg: 'bg-violet-50',
                title: 'Sécurité & Projets',
                items: ['Audits de sécurité', 'Gestion de projets IT', 'Documentation technique', 'Relation client et support'],
              },
            ].map(({ icon: Icon, color, bg, title, items }) => (
              <div key={title}>
                <div className={`inline-flex items-center gap-2 ${bg} rounded-lg px-3 py-2 mb-3`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                  <span className={`text-sm font-semibold ${color}`}>{title}</span>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conditions d'accès</h2>
          <ul className="space-y-3 text-gray-600 text-sm">
            {[
              "Être titulaire d'un Bac Pro CIEL, d'un Bac général ou d'un diplôme équivalent de niveau 4",
              "Trouver une entreprise partenaire pour votre contrat d'alternance",
              "Déposer un dossier de candidature auprès de l'établissement",
              'Entretien de motivation et évaluation du niveau technique',
            ].map((cond) => (
              <li key={cond} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" />
                {cond}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Débouchés & Poursuite d'études</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-sky-500" />
                Métiers accessibles
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Administrateur systèmes et réseaux', 'Technicien cybersécurité', 'Technicien support N2/N3', 'Responsable infrastructure IT'].map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-sky-500 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-violet-500" />
                Poursuite d'études possible
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Licence Pro Réseaux & Sécurité", 'Bachelor Informatique', "École d'ingénieurs (admis-titre)"].map((e) => (
                  <li key={e} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-violet-500 flex-shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center pb-4">
          <button
            data-testid="button-contact-bts"
            onClick={() => { setLocation('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="bg-sky-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-sky-600 transition-colors"
          >
            Nous contacter pour en savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}
