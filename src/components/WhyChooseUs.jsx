import React from 'react';
import { whyChooseUsData } from '../data/eventData';
import {
  Palette,
  ClipboardCheck,
  SearchCheck,
  ShieldCheck,
  Sparkle,
  MessageSquareText,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Palette: Palette,
  ClipboardCheck: ClipboardCheck,
  SearchCheck: SearchCheck,
  ShieldCheck: ShieldCheck,
  Sparkle: Sparkle,
  MessageSquareText: MessageSquareText,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#FAF9FC] relative border-t border-zinc-100 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 text-purple-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>The EVENTORA Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Why Discerning Clients Entrust Us With Their Most Important Moments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            We don’t just organize logistics—we sculpt cohesive emotional journeys where nothing is left to chance.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsData.map((item, index) => {
            const IconComp = iconMap[item.icon] || Sparkles;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="group p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs hover:shadow-xl hover:border-purple-200 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 group-hover:bg-purple-700 text-purple-700 group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-zinc-100 group-hover:bg-purple-100 group-hover:text-purple-800 text-charcoal-500 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-charcoal-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-medium text-purple-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Guaranteed Excellence</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Pill */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-sm font-medium text-charcoal-700">
            Have a specialized requirement or private venue request?
          </span>
          <a
            href="#contact"
            className="text-sm font-bold text-purple-700 hover:text-purple-900 underline underline-offset-4"
          >
            Speak directly with our leadership team &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
