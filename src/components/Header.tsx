import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isExternal) {
      const ctfPath = process.env.NODE_ENV === 'production' ? '/PanelTX-CIEL/ctf.html' : '/public/ctf.html';
      window.open(ctfPath, '_blank');
    } else {
      scrollToSection(item.id);
    }
  };

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'programs', label: 'Formations' },
    { id: 'why-choose-us', label: 'Pourquoi Nous' },
    { id: 'news', label: 'Actualités' },
    { id: 'ctf', label: '🛡️ CTF', isExternal: true },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">CIEL</span>
            <span className="ml-2 text-sm text-gray-600 hidden sm:block">Formation d'Excellence</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id && !item.isExternal
                    ? 'text-blue-900 border-b-2 border-blue-900'
                    : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNavClick(item);
                  if (!item.isExternal) {
                    setMobileMenuOpen(false);
                  }
                }}
                className={`block w-full text-left py-2 px-4 text-sm font-medium ${
                  activeSection === item.id && !item.isExternal
                    ? 'text-blue-900 bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
