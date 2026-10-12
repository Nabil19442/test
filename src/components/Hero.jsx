import React from 'react';
import { ArrowRight, Star, Shield, Award, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onExploreServices, onPlanEvent }) {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8FC] via-white to-white">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
            
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-purple-800 text-xs sm:text-sm font-semibold tracking-wide shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              <span>Premier Event Curation & Full-Scale Production</span>
              <ChevronRight className="w-3.5 h-3.5 text-purple-500" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-charcoal-900 tracking-tight leading-[1.12]"
            >
              We Turn Your Special Moments Into{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700">
                Extraordinary
              </span>{' '}
              Experiences.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-charcoal-600 font-normal leading-relaxed max-w-2xl"
            >
              From fairytale weddings and high-profile corporate summits to electrifying concerts and intimate celebrations, EVENTORA delivers architectural design, flawless coordination, and unforgettable atmospheres.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => {
                  scrollTo('#contact');
                  if (onPlanEvent) onPlanEvent();
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-semibold text-white bg-purple-700 hover:bg-purple-800 active:bg-purple-900 rounded-full shadow-lg shadow-purple-700/25 hover:shadow-xl hover:shadow-purple-700/35 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  scrollTo('#services');
                  if (onExploreServices) onExploreServices();
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-charcoal-800 bg-white hover:bg-purple-50/50 border border-zinc-200 hover:border-purple-300 rounded-full shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <span>Explore Our Services</span>
              </button>
            </motion.div>

            {/* Trust Indicator & Quick Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-zinc-200/80 flex flex-wrap items-center gap-y-4 gap-x-8 text-sm text-charcoal-600"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Satisfied client"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Satisfied client"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Satisfied client"
                  />
                </div>
                <div>
                  <div className="flex items-center text-amber-500 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
                    ))}
                    <span className="ml-1 font-bold text-charcoal-900 text-xs">4.9 / 5</span>
                  </div>
                  <span className="text-xs text-charcoal-500">Over 1,200+ clients worldwide</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-medium text-charcoal-700">100% Turnkey Production</span>
              </div>

              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-medium text-charcoal-700">Multi-Award Winning Team</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Display */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Main Luxury Event Photo Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-charcoal-900 group">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
                  alt="Luxury Event Staging & Floral Dining by EVENTORA"
                  className="w-full h-[480px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Soft Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-black/10 pointer-events-none" />

                {/* Bottom Card Caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-purple-200">Featured Showcase</p>
                      <h2 className="text-base font-bold text-white mt-0.5">The Lake Como Royal Pavilion</h2>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-purple-500/80 text-white">
                      Weddings
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Left Stat */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-zinc-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">Industry Leader</div>
                  <div className="text-sm font-bold text-charcoal-900">Best Event Agency 2025</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Right Stat */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="hidden sm:flex absolute -bottom-5 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 items-center gap-3.5"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-700 to-indigo-600 flex items-center justify-center text-white">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-charcoal-900 leading-none">1,200+</div>
                  <div className="text-xs font-medium text-charcoal-500 mt-1">Impeccable Events Produced</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
