import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-100 py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-zinc-100/50 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-lg p-1"
            aria-label="EVENTORA Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-purple-600/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5 h-5 text-purple-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-charcoal-900 group-hover:text-purple-700 transition-colors">
                EVENTORA<span className="text-purple-600">.</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-charcoal-400 -mt-1">
                Bespoke Experiences
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-2 text-sm font-medium text-charcoal-600 hover:text-purple-700 hover:bg-purple-50/60 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector('#contact');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
                if (onOpenContact) onOpenContact();
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-purple-700 hover:bg-purple-800 active:bg-purple-900 rounded-full shadow-md shadow-purple-700/20 hover:shadow-lg hover:shadow-purple-700/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              <Calendar className="w-4 h-4 text-purple-200" />
              <span>Plan Your Event</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-charcoal-700 hover:text-purple-700 hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-zinc-200 bg-white shadow-xl animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-2.5 text-base font-medium text-charcoal-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-zinc-100">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-3 text-center text-sm font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-xl shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4 text-purple-200" />
                <span>Plan Your Event</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
