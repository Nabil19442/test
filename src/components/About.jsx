import React from 'react';
import { statsData } from '../data/eventData';
import { CheckCircle2, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    { title: 'Architectural Set & Spatial Design', desc: 'Crafting visually arresting environments tailored to the space and venue acoustics.' },
    { title: 'Full-Spectrum Production Logistics', desc: 'Managing contracts, vendor curation, tech staging, permits, and timeline minute-by-minute.' },
    { title: 'Dedicated On-Site Producer Team', desc: 'A seasoned team of directors on hand to resolve every nuance with effortless composure.' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>About EVENTORA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-tight">
            Crafting Unforgettable Atmospheres Where Artistry Meets Flawless Execution.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Supporting Photograph & Floating Accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto">
              
              {/* Main Photo */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-100 bg-charcoal-50">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                  alt="EVENTORA executive producers coordinating an event venue"
                  className="w-full h-[460px] sm:h-[500px] object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Inset Secondary Image Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80"
                  alt="Floral styling by EVENTORA"
                  className="w-full h-36 object-cover"
                />
                <div className="p-3 text-center bg-white">
                  <p className="text-xs font-bold text-charcoal-900">Obsession with Detail</p>
                  <p className="text-[11px] text-purple-700 font-medium">Bespoke Aesthetics</p>
                </div>
              </div>

              {/* Decorative background aura */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Right Column: Company Story & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-charcoal-900">
              Transforming your milestones into lasting legacies.
            </h3>
            
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
              Founded on the belief that every celebration should feel like a masterpiece, <span className="font-semibold text-charcoal-900">EVENTORA</span> is an elite creative event agency. We fuse imaginative storytelling, bespoke scenography, and meticulous technical production into single-source harmony.
            </p>

            <p className="text-base text-charcoal-600 leading-relaxed">
              Whether curating an intimate lakeside vow exchange, orchestrating a high-stakes corporate summit for thousands of delegates, or producing a festival mainstage, our clients trust us to manage every heartbeat of their event without compromise.
            </p>

            {/* Feature Checkpoints */}
            <div className="pt-2 space-y-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-charcoal-900">{item.title}</h4>
                    <p className="text-xs text-charcoal-500 mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Badge */}
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center flex-shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <p className="text-xs font-medium text-purple-950 italic">
                “Our mission is simple: to relieve you of every planning stress so you can truly live the magic of your day.”
              </p>
            </div>

          </div>

        </div>

        {/* Statistics Bar */}
        <div className="mt-20 pt-12 border-t border-zinc-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-zinc-50/80 hover:bg-purple-50/50 p-6 rounded-2xl border border-zinc-200/60 hover:border-purple-200 transition-colors text-left group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-charcoal-900 group-hover:text-purple-700 transition-colors tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-charcoal-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-charcoal-500 mt-1.5 leading-snug">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Illustrative Notice Disclaimer */}
          <div className="mt-6 text-center">
            <span className="text-[11px] text-charcoal-400 font-medium">
              * Note: The statistics above represent illustrative sample content reflecting our demonstrated event capabilities.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
