import React from 'react';
import { 
  Activity, 
  ArrowUp, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  Heart
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Intersection Prototype', href: '#prototype-demo' },
    { name: 'Benefits & Pilot', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-navy-900">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-navy-850 border border-brand-cyan/40">
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                  <span className="w-1.5 h-0.5 rounded bg-brand-teal"></span>
                </div>
              </div>
              <span className="font-extrabold tracking-wider text-lg text-white font-sans">
                URBAN<span className="text-brand-cyan ml-1">FLOW</span>
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Smarter Signals. Smoother Cities. AI-powered adaptive traffic management designed to optimize signal timings, prioritize emergency vehicles, and support sustainable urban mobility.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brand-cyan/20 text-[11px] font-mono text-brand-cyan">
              <Sparkles className="w-3 h-3" />
              <span>Wadhwani Student Venture Initiative</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Venture Sections
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-slate-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-brand-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Venture Governance & Compliance Notice */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Venture Status
            </h4>
            <div className="p-3 rounded-xl bg-navy-900/60 border border-navy-850 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-[11px] font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>Prototype Venture Stage</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                This project is developed as an academic startup venture submission. Demonstrations utilize simulated sample data and do not control live civic signals.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Urban Flow Student Venture. Built for Wadhwani Student Venture Submission.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-300 hover:text-white hover:border-brand-cyan transition-all text-xs font-mono"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
