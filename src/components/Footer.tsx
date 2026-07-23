import { Shield, Mail, TrendingUp, Award } from 'lucide-react';
import { allCategories } from '../data/insuranceData';
import { Reveal } from './Reveal';

export function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Animated gradient top border */}
      <div className="gradient-divider" />

      {/* Glow accents */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <Reveal animation="reveal-left" className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl animated-gradient-bg flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold font-display">
                <span className="animated-gradient-text">ARA</span>
                <span className="text-white">_artical</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Your trusted source for comprehensive insurance guides in the USA. We compare the best
              insurance companies to help you make informed decisions.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Award className="w-4 h-4 text-accent-400" />
                <span>2026 Verified Data</span>
              </div>
            </div>
          </Reveal>

          {/* Quick links */}
          <Reveal animation="reveal" delay="delay-100">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Insurance Categories
            </h4>
            <ul className="space-y-2">
              {allCategories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => scrollToSection(cat.id)}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors"
                  >
                    {cat.title}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* SEO keywords */}
          <Reveal animation="reveal" delay="delay-200">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Popular Keywords
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>best insurance USA</li>
              <li>cheap insurance USA</li>
              <li>insurance companies USA</li>
              <li>auto insurance quotes USA</li>
              <li>home insurance quotes USA</li>
              <li>health insurance quotes USA</li>
            </ul>
          </Reveal>

          {/* Stats */}
          <Reveal animation="reveal-right" delay="delay-200">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              By the Numbers
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="text-2xl font-bold animated-gradient-text">26+</div>
                  <div className="text-xs text-slate-500">Companies Analyzed</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-accent-400" />
                <div>
                  <div className="text-2xl font-bold animated-gradient-text">5</div>
                  <div className="text-xs text-slate-500">Insurance Types</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <div>
                  <a href="mailto:ofkif50@gmail.com" className="text-sm text-slate-400 hover:text-primary-400 transition-colors">
                    ofkif50@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p className="text-sm text-slate-500">
              © 2026 ARA_artical. Best Insurance Companies in USA 2026. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a href="mailto:ofkif50@gmail.com" className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
              ofkif50@gmail.com
            </a>
          </div>
          <p className="text-xs text-slate-600">
            Data sourced from NerdWallet, Bankrate, U.S. News, J.D. Power, KFF, and company websites.
          </p>
        </div>
      </div>
    </footer>
  );
}
