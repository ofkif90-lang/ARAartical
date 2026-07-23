import { useEffect, useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'car-insurance', label: 'Car' },
  { id: 'home-insurance', label: 'Home' },
  { id: 'health-insurance', label: 'Health' },
  { id: 'travel-insurance', label: 'Travel' },
  { id: 'business-insurance', label: 'Business' },
  { id: 'contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.id);
      const current = sections.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo — top left */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 group"
          aria-label="ARA_artical home"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl animated-gradient-bg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <span className="text-xl font-bold font-display tracking-tight">
            <span className="logo-letter logo-letter-a1">A</span>
            <span className="logo-letter logo-letter-r">R</span>
            <span className="logo-letter logo-letter-a2">A</span>
            <span className="text-slate-800">_artical</span>
          </span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-white bg-gradient-to-r from-primary-600 to-primary-500 shadow-md'
                  : scrolled
                    ? 'text-slate-700 hover:text-primary-600 hover:bg-primary-50'
                    : 'text-slate-700 hover:text-primary-600 hover:bg-white/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-slate-800" />
          ) : (
            <Menu className="w-6 h-6 text-slate-800" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden glass mt-3 mx-4 rounded-2xl shadow-xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-white bg-gradient-to-r from-primary-600 to-primary-500'
                  : 'text-slate-700 hover:bg-primary-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
