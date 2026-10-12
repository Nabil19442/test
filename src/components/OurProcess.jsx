import React from 'react';
import { processStepsData } from '../data/eventData';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OurProcess() {
  return (
    <section id="process" className="py-24 bg-white relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Our 4-Step Path to Perfection
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            A transparent, stress-free architectural journey that takes your initial dream to flawless live execution.
          </p>
        </div>

        {/* Process Steps Connected Grid / Timeline */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-100 via-purple-300 to-purple-100 -translate-y-8 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processStepsData.map((stepItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-zinc-200/80 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black tracking-tight text-purple-700/80 group-hover:text-purple-600 transition-colors">
                      {stepItem.step}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-purple-50 group-hover:bg-purple-700 text-purple-700 group-hover:text-white transition-colors flex items-center justify-center font-bold text-xs">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-charcoal-900 group-hover:text-purple-700 transition-colors">
                    {stepItem.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-purple-600/90 uppercase tracking-wider mt-1 mb-3">
                    {stepItem.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-1.5 text-xs font-semibold text-charcoal-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                  <span className="truncate">{stepItem.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Bottom CTA reassurance */}
        <div className="mt-16 text-center">
          <p className="text-sm text-charcoal-600">
            Every step is managed with clear milestones, digital sign-offs, and complete budget transparency.
          </p>
        </div>

      </div>
    </section>
  );
}
