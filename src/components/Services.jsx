import React from 'react';
import { servicesData } from '../data/eventData';
import {
  HeartHandshake,
  Building2,
  Music2,
  Sparkles,
  GlassWater,
  Presentation,
  ArrowRight,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  HeartHandshake: HeartHandshake,
  Building2: Building2,
  Music2: Music2,
  Sparkles: Sparkles,
  GlassWater: GlassWater,
  Presentation: Presentation,
};

export default function Services({ onSelectService }) {
  const handleInquire = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#FAFAFC] relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 text-purple-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Signature Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Comprehensive Services Tailored To Your Vision
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to arena-level productions, our team brings seasoned artistry and surgical precision to every discipline.
          </p>
        </div>

        {/* Services Grid (6 Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-zinc-200/70 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-52 w-full overflow-hidden bg-charcoal-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-black/10" />
                    
                    {/* Floating Icon Pill */}
                    <div className="absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md text-purple-700 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-wider text-purple-200 bg-purple-950/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      {service.tagline}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-charcoal-900 group-hover:text-purple-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-charcoal-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mt-5 pt-4 border-t border-zinc-100 space-y-2">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-charcoal-600 font-medium">
                          <span className="w-4 h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => handleInquire(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-purple-700 bg-purple-50 hover:bg-purple-700 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-sm"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
