import { ArrowDown, Shield, Car, Home, Heart, Plane, Building2 } from 'lucide-react';
import { Reveal } from './Reveal';

const categoryCards = [
  {
    id: 'car-insurance',
    title: 'Car Insurance',
    description: 'Protect your vehicle with the best auto coverage',
    icon: Car,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'home-insurance',
    title: 'Home Insurance',
    description: 'Safeguard your most valuable asset',
    icon: Home,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for your family',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
  },
  {
    id: 'travel-insurance',
    title: 'Travel Insurance',
    description: 'Travel with confidence and peace of mind',
    icon: Plane,
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'business-insurance',
    title: 'Business Insurance',
    description: 'Protect your business from financial risks',
    icon: Building2,
    color: 'from-indigo-500 to-blue-600',
  },
];

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50" />

      {/* Floating decorative shapes */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl float-animation" />
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary-300/15 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text content */}
          <div className="text-white">
            <Reveal animation="reveal-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
                <Shield className="w-4 h-4 text-accent-300" />
                <span className="text-sm font-medium text-white/90">2026 Comprehensive Guide</span>
              </div>
            </Reveal>

            <Reveal animation="reveal-left" delay="delay-100">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight">
                Best Insurance
                <br />
                Companies in
                <br />
                <span className="animated-gradient-text font-extrabold">USA 2026</span>
              </h1>
            </Reveal>

            <Reveal animation="reveal-left" delay="delay-200">
              <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                Your complete guide to finding the <strong className="text-white">best insurance USA</strong> has to offer.
                Compare <strong className="text-white">cheap insurance USA</strong> options across car, home, health,
                travel, and business coverage from top-rated <strong className="text-white">insurance companies USA</strong>.
              </p>
            </Reveal>

            <Reveal animation="reveal-left" delay="delay-300">
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('car-insurance')}
                  className="px-6 py-3 bg-white text-primary-700 rounded-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  Explore Categories
                </button>
                <button
                  onClick={() => scrollToSection('car-insurance')}
                  className="px-6 py-3 glass-dark text-white rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  Compare Now
                </button>
              </div>
            </Reveal>

            <Reveal animation="reveal-left" delay="delay-400">
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold animated-gradient-text">26+</div>
                  <div className="text-sm text-white/70">Companies Compared</div>
                </div>
                <div>
                  <div className="text-3xl font-bold animated-gradient-text">5</div>
                  <div className="text-sm text-white/70">Insurance Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold animated-gradient-text">2026</div>
                  <div className="text-sm text-white/70">Latest Data</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — hero banner image */}
          <Reveal animation="reveal-right" delay="delay-200">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-500/30 to-accent-400/30 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src="https://images.pexels.com/photos/4488647/pexels-photo-4488647.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Family with car and home — insurance protection in USA"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium">
                    Protecting what matters most — your family, home, and future
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-16">
          {categoryCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.id} animation="reveal-scale" delay={`delay-${(index + 1) * 100}`}>
                <button
                  onClick={() => scrollToSection(card.id)}
                  className="group w-full glass rounded-2xl p-5 text-left hover-lift transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-1 text-sm">{card.title}</h3>
                  <p className="text-xs text-slate-600 leading-snug">{card.description}</p>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollToSection('car-insurance')}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
            aria-label="Scroll to content"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
