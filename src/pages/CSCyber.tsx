import { useLocation } from 'wouter';
import { Shield, ArrowLeft, Clock, GraduationCap, Briefcase, ShieldCheck, Eye, Lock, ChevronRight, CheckCircle2, AlertTriangle, Home } from 'lucide-react';
import heroCyber from '../assets/images/cs-cyber.png';

export default function CSCyber() {
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
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-50 group-hover:bg-violet-100 transition-colors">
              <ArrowLeft className="h-4 w-4 text-violet-700" />
            </span>
            <span className="text-sm font-medium text-gray-600 group-hover:text-violet-700 transition-colors hidden sm:block">
              Retour à l'accueil
            </span>
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Home className="h-3.5 w-3.5" />
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-violet-700 font-medium">CS Cyber</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-900">CIEL</span>
            <span className="hidden sm:block text-xs text-gray-400 font-medium">Jean Moulin · Béziers</span>
          </div>
        </div>
      </header>

      <div className="relative min-h-[480px] flex items-end overflow-hidden">
        <img
          src={heroCyber}
          alt="Cybersécurité CS Cyber"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-900/80 to-violet-800/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-20">
          <p className="text-violet-300 text-xs font-semibold uppercase tracking-widest mb-3">Formation · 1 an</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-3 flex-shrink-0">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 data-testid="title-cs-cyber" className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">CS Cyber</h1>
              <p className="text-violet-200 text-sm mt-1 font-medium">Certificat de Spécialisation en Cybersécurité</p>
            </div>
          </div>
          <p className="text-violet-100/90 text-base max-w-2xl mb-8 leading-relaxed">
            Une formation intensive d'1 an pour devenir expert en protection des systèmes d'information, l'un des secteurs les plus porteurs du numérique.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Clock, text: '1 an' },
              { icon: GraduationCap, text: 'Après un Bac Pro' },
              { icon: ShieldCheck, text: 'Spécialisation poussée' },
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
            Le Certificat de Spécialisation (CS) en Cybersécurité est une formation de niveau 4 d'une durée d'<strong>1 an</strong>, accessible après un Bac Pro CIEL ou équivalent. Elle forme des spécialistes capables de protéger les systèmes d'information contre les cybermenaces.
          </p>
          <p className="text-gray-600 leading-relaxed">
            La cybersécurité est l'un des secteurs en plus forte croissance en France et dans le monde. Cette spécialisation répond directement aux besoins des entreprises qui recherchent des profils qualifiés pour sécuriser leurs infrastructures numériques.
          </p>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Compétences acquises</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                color: 'text-violet-600',
                bg: 'bg-violet-50',
                title: 'Protection des systèmes',
                items: ['Hardening des serveurs', 'Gestion des accès et identités', 'Sécurisation des réseaux', 'Configuration pare-feu avancée'],
              },
              {
                icon: Eye,
                color: 'text-sky-600',
                bg: 'bg-sky-50',
                title: 'Analyse & Détection',
                items: ["Analyse de logs et audits", "Détection d'intrusions (IDS/IPS)", 'Tests de pénétration (pentest)', 'Forensique numérique'],
              },
              {
                icon: Lock,
                color: 'text-purple-600',
                bg: 'bg-purple-50',
                title: 'Réponse aux incidents',
                items: ['Gestion de crise cyber', 'Plan de continuité (PCA/PRA)', 'Veille sur les menaces', 'Conformité RGPD / ISO 27001'],
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

        <section className="bg-violet-50 border border-violet-100 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-violet-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-xl font-bold text-violet-900 mb-2">Un secteur en forte demande</h2>
              <p className="text-violet-800 leading-relaxed text-sm">
                La France manque de <strong>plusieurs milliers d'experts en cybersécurité</strong> chaque année. Les entreprises, administrations publiques et hôpitaux recherchent activement des profils spécialisés pour protéger leurs données et systèmes. Cette formation vous positionne directement sur ce marché porteur.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Conditions d'accès</h2>
          <ul className="space-y-3 text-gray-600 text-sm">
            {[
              "Être titulaire d'un Bac Pro CIEL ou d'un diplôme équivalent",
              'Motivation pour les métiers de la cybersécurité',
              "Dossier de candidature à déposer auprès de l'établissement",
              'Entretien de motivation possible selon les établissements',
            ].map((cond) => (
              <li key={cond} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 text-violet-500 mt-0.5 flex-shrink-0" />
                {cond}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Débouchés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-violet-500" />
                Métiers accessibles
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Analyste en cybersécurité', 'Technicien SOC (Security Operations Center)', 'Administrateur sécurité', 'Opérateur en réponse aux incidents'].map((m) => (
                  <li key={m} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-violet-500 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-sky-500" />
                Poursuite d'études possible
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {['BTS CIEL en Alternance (BAC+2)', 'Licence Pro Cybersécurité', 'Bachelor Sécurité informatique'].map((e) => (
                  <li key={e} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-sky-500 flex-shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center pb-4">
          <button
            data-testid="button-contact-cs-cyber"
            onClick={() => { setLocation('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="bg-violet-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-violet-600 transition-colors"
          >
            Nous contacter pour en savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}
