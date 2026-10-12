import React from 'react';
import { Sparkles, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { InstagramIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Agency', href: '#about' },
    { name: 'Signature Services', href: '#services' },
    { name: 'Featured Events', href: '#events' },
    { name: 'Why EVENTORA', href: '#why-us' },
    { name: 'Our 4-Step Process', href: '#process' },
    { name: 'Client Reviews', href: '#testimonials' },
    { name: 'Consultation', href: '#contact' },
  ];

  const serviceLinks = [
    'Luxury Wedding Planning',
    'Executive Corporate Summits',
    'Concerts & Arena Spectacles',
    'Milestone Birthday Celebrations',
    'Private Estate Soirées',
    'Exhibition & Expo Management',
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-white relative border-t border-charcoal-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-zinc-800">
          
          {/* Brand Info (5 columns) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-purple-900/50">
                <Sparkles className="w-5 h-5 text-purple-200" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                EVENTORA<span className="text-purple-400">.</span>
              </span>
            </div>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Bespoke event planning, spatial scenography, and full-scale technical production agency. Turning exceptional visions into lifelong memories worldwide.
            </p>

            <div className="pt-2 text-xs text-zinc-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>450 Lexington Ave, Suite 2400, New York, NY (Sample)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>+1 (800) 555-0199 / +1 (212) 555-8321</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>inquiries@eventora-sample.com</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-purple-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links (4 columns) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-4">
              Signature Disciplines
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((srv, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    onClick={(e) => handleLinkClick(e, '#services')}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-purple-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/70" />
                    <span>{srv}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Sample Card */}
            <div className="mt-6 p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
              <span className="text-xs font-bold text-white block">Annual Event Trends Report</span>
              <span className="text-[11px] text-zinc-400 block mt-0.5">Subscribe to our editorial lookbook</span>
              <form onSubmit={(e) => { e.preventDefault(); alert('Demo: Thank you for your interest in our lookbook!'); }} className="mt-2.5 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-xs font-bold text-white transition-colors flex-shrink-0"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Socials & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} EVENTORA Event Management Ltd. All rights reserved. Created for demonstration purposes.
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-purple-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="EVENTORA on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-purple-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="EVENTORA on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-purple-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="EVENTORA on Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-purple-700 text-zinc-300 hover:text-white transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
