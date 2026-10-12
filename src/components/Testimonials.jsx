import React from 'react';
import { testimonialsData } from '../data/eventData';
import { Star, Quote, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#FAF9FC] relative border-t border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 text-purple-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Words From Those Who Experienced The Extraordinary
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Read sample impressions from corporate leaders, newlyweds, and festival directors who partnered with EVENTORA.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-zinc-200/80 shadow-xs hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-purple-200" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-charcoal-700 leading-relaxed italic">
                  “{item.content}”
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-purple-100 flex-shrink-0"
                />
                <div className="overflow-hidden">
                  <h4 className="text-sm font-bold text-charcoal-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-charcoal-500 truncate">
                    {item.role}
                  </p>
                  <p className="text-[11px] font-medium text-purple-700 truncate">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note indicating illustrative demo content */}
        <div className="mt-12 text-center">
          <p className="text-xs text-charcoal-400">
            * Sample client testimonials presented for illustrative demonstration purposes.
          </p>
        </div>

      </div>
    </section>
  );
}
