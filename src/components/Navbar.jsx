import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Menu, 
  X, 
  Sliders, 
  Send, 
  ShieldCheck, 
  Cpu, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Live Prototype', href: '#prototype-demo' },
    { name: 'Benefits & Pilot', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-brand-cyan/15 shadow-lg shadow-navy-950/50 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Startup Identity */}
          <a 
            href="#home" 
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-navy-850 to-navy-900 border border-brand-cyan/40 group-hover:border-brand-cyan group-hover:shadow-glow-cyan transition-all">
              <div className="absolute inset-0 rounded-xl bg-brand-cyan/10 animate-pulse"></div>
              {/* Traffic Flow Icon */}
              <div className="relative flex flex-col items-center justify-center gap-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse"></span>
                <span className="w-2 h-0.5 rounded bg-brand-teal/70"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wider text-xl text-white font-sans flex items-center">
                  URBAN<span className="text-brand-cyan ml-1">FLOW</span>
                </span>
                <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                  Prototype
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-tight">
                AI Traffic Management
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                  link.name === 'Live Prototype'
                    ? 'text-brand-cyan hover:bg-brand-cyan/10 font-semibold flex items-center gap-1.5'
                    : 'text-slate-300 hover:text-white hover:bg-navy-850/60'
                }`}
              >
                {link.name === 'Live Prototype' && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                  </span>
                )}
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Venture Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#prototype-demo"
              onClick={(e) => handleScrollTo(e, '#prototype-demo')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-brand-cyan border border-brand-cyan/40 hover:border-brand-cyan rounded-lg bg-brand-cyan/5 hover:bg-brand-cyan/15 transition-all shadow-sm"
            >
              <Sliders className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Interactive Demo</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-cyan to-brand-teal hover:from-white hover:to-brand-cyan rounded-lg transition-all shadow-md hover:shadow-glow-cyan"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Pilot Inquiry</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-850 border border-slate-700/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-navy-900/95 border border-brand-cyan/20 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-navy-800">
              <span className="text-xs font-mono text-brand-cyan flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Wadhwani Student Venture
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-navy-800 text-slate-300 border border-slate-700">
                Phase: Prototype
              </span>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="flex items-center justify-between text-sm py-2 px-3 rounded-lg text-slate-200 hover:text-white hover:bg-navy-800/80 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {link.name === 'Live Prototype' && (
                      <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                    )}
                    {link.name}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-navy-800 flex flex-col gap-2">
              <a
                href="#prototype-demo"
                onClick={(e) => handleScrollTo(e, '#prototype-demo')}
                className="w-full text-center py-2.5 text-xs font-semibold text-brand-cyan border border-brand-cyan/40 rounded-xl bg-brand-cyan/10"
              >
                Launch Prototype Simulator
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full text-center py-2.5 text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-cyan to-brand-teal rounded-xl"
              >
                Request Pilot Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
