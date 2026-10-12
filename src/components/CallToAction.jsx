import React from 'react';
import { ArrowRight, Sparkles, Calendar, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallToAction({ onStartPlanning }) {
  const handleScrollToContact = () => {
    if (onStartPlanning) onStartPlanning();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative rounded-4xl bg-gradient-to-br from-charcoal-900 via-charcoal-950 to-purple-950 p-8 sm:p-14 lg:p-20 text-white shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Backing Rings */}
          <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[450px] h-[450px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>Begin Your Journey Today</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Let's Create Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-indigo-200">
                Unforgettable.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed"
            >
              From custom floral installations and grand ballrooms to multi-day corporate conferences, our producers are prepared to turn your vision into reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                type="button"
                onClick={handleScrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-charcoal-950 bg-white hover:bg-zinc-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-charcoal-900"
              >
                <Calendar className="w-4 h-4 text-purple-700" />
                <span>Start Planning</span>
                <ArrowRight className="w-4 h-4 text-purple-700" />
              </button>

              <a
                href="tel:+18005550199"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <PhoneCall className="w-4 h-4 text-purple-300" />
                <span>+1 (800) 555-0199</span>
              </a>
            </motion.div>

            <p className="text-xs text-zinc-400 pt-2">
              Complimentary initial discovery consultation • Direct access to senior executive producers
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
