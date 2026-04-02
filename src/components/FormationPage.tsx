import { useLocation } from 'wouter';
import { ArrowLeft, Clock, GraduationCap, Briefcase, ChevronRight, CheckCircle2, Home } from 'lucide-react';

interface FormationPageProps {
  title: string;
  subtitle: string;
  duration: string;
  heroImage: string;
  heroAlt: string;
  colorScheme: 'blue' | 'violet' | 'green';
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  objectives: string[];
  program: Array<{
    title: string;
    items: string[];
  }>;
  careers: string[];
  admission: string;
  contact: string;
  testId: string;
}

export default function FormationPage({
  title,
  subtitle,
  duration,
  heroImage,
  heroAlt,
  colorScheme,
  icon: Icon,
  description,
  objectives,
  program,
  careers,
  admission,
  contact,
  testId
}: FormationPageProps) {
  const [, setLocation] = useLocation();

  const getColorClasses = (scheme: typeof colorScheme) => {
    switch (scheme) {
      case 'blue':
        return {
          buttonBg: 'bg-blue-50 group-hover:bg-blue-100',
          buttonText: 'text-blue-700',
          breadcrumb: 'text-blue-900',
          duration: 'text-blue-300',
          gradient: 'bg-gradient-to-t from-blue-950 via-blue-900/80 to-blue-800/50',
          gradientOverlay: 'bg-gradient-to-r from-blue-950/60 via-transparent to-transparent',
          sectionBg: 'bg-blue-50 border-blue-100',
          sectionTitle: 'text-blue-900',
          bullet: 'bg-blue-600',
          cardBorder: 'border-blue-100 hover:border-blue-300',
          icon: 'text-blue-600',
          contactBg: 'bg-blue-600'
        };
      case 'violet':
        return {
          buttonBg: 'bg-violet-50 group-hover:bg-violet-100',
          buttonText: 'text-violet-700',
          breadcrumb: 'text-violet-700',
          duration: 'text-violet-300',
          gradient: 'bg-gradient-to-t from-purple-950 via-purple-900/80 to-violet-800/50',
          gradientOverlay: 'bg-gradient-to-r from-purple-950/60 via-transparent to-transparent',
          sectionBg: 'bg-violet-50 border-violet-100',
          sectionTitle: 'text-violet-900',
          bullet: 'bg-violet-600',
          cardBorder: 'border-violet-100 hover:border-violet-300',
          icon: 'text-violet-600',
          contactBg: 'bg-violet-600'
        };
      case 'green':
        return {
          buttonBg: 'bg-green-50 group-hover:bg-green-100',
          buttonText: 'text-green-700',
          breadcrumb: 'text-green-900',
          duration: 'text-green-300',
          gradient: 'bg-gradient-to-t from-green-950 via-green-900/80 to-green-800/50',
          gradientOverlay: 'bg-gradient-to-r from-green-950/60 via-transparent to-transparent',
          sectionBg: 'bg-green-50 border-green-100',
          sectionTitle: 'text-green-900',
          bullet: 'bg-green-600',
          cardBorder: 'border-green-100 hover:border-green-300',
          icon: 'text-green-600',
          contactBg: 'bg-green-600'
        };
      default:
        return getColorClasses('blue');
    }
  };

  const colors = getColorClasses(colorScheme);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <button
            data-testid="button-back-home"
            onClick={() => setLocation('/')}
            className={`flex items-center gap-2 group`}
          >
            <span className={`flex items-center justify-center w-8 h-8 rounded-full ${colors.buttonBg} transition-colors`}>
              <ArrowLeft className={`h-4 w-4 ${colors.buttonText}`} />
            </span>
            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors hidden sm:block">
              Retour à l'accueil
            </span>
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Home className="h-3.5 w-3.5" />
            <ChevronRight className="h-3.5 w-3.5" />
            <span className={`font-medium ${colors.breadcrumb}`}>{title}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-900">CIEL</span>
            <span className="hidden sm:block text-xs text-gray-400 font-medium">Jean Moulin · Béziers</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative min-h-[480px] flex items-end overflow-hidden">
        <img
          src={heroImage}
          alt={heroAlt}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className={`absolute inset-0 ${colors.gradient}`} />
        <div className={`absolute inset-0 ${colors.gradientOverlay}`} />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-20">
          <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${colors.duration}`}>{duration}</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-3 flex-shrink-0">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 data-testid={testId} className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h1>
              <p className="text-white/90 text-lg">{subtitle}</p>
            </div>
          </div>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">{description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Objectives */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Objectifs de la formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className={`h-6 w-6 mt-0.5 flex-shrink-0 ${colors.icon}`} />
                <p className="text-gray-700 leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Program */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Programme de formation</h2>
          <div className="space-y-8">
            {program.map((section, index) => (
              <div key={index} className={`rounded-xl p-8 border ${colors.sectionBg}`}>
                <h3 className={`text-xl font-bold mb-4 ${colors.sectionTitle}`}>{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${colors.bullet}`} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Careers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Débouchés professionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => (
              <div key={index} className={`bg-white rounded-lg p-6 border hover:border-gray-300 transition-colors ${colors.cardBorder}`}>
                <Briefcase className={`h-8 w-8 mb-3 ${colors.icon}`} />
                <h3 className="font-semibold text-gray-900 mb-2">{career}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Admission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Admission</h2>
          <div className={`rounded-xl p-8 border ${colors.sectionBg}`}>
            <div className="flex items-start gap-4">
              <GraduationCap className={`h-8 w-8 flex-shrink-0 ${colors.icon}`} />
              <div>
                <p className="text-gray-700 leading-relaxed">{admission}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className={`rounded-xl p-8 text-white ${colors.contactBg}`}>
            <h2 className="text-2xl font-bold mb-4">Intéressé par cette formation ?</h2>
            <p className="text-white/90 mb-6">{contact}</p>
            <button
              onClick={() => setLocation('/#contact')}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Nous contacter
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}