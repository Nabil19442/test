import React, { useState } from 'react';
import { featuredEventsData, categoriesList } from '../data/eventData';
import { MapPin, Users, Calendar, ArrowUpRight, Sparkles, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturedEvents({ onPlanEvent }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = activeCategory === 'All'
    ? featuredEventsData
    : featuredEventsData.filter((evt) => evt.category.toLowerCase() === activeCategory.toLowerCase());

  const handlePlanSimilar = (eventTitle) => {
    setSelectedEvent(null);
    if (onPlanEvent) {
      onPlanEvent(`Interested in planning an event similar to "${eventTitle}"`);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-24 bg-white relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Portfolio & Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight">
              Featured Events & Productions
            </h2>
            <p className="mt-3 text-base text-charcoal-600">
              Explore our recent galas, weddings, tech summits, and live arena concerts delivered with bespoke precision.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categoriesList.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    isActive
                      ? 'bg-purple-700 text-white shadow-md shadow-purple-700/20'
                      : 'bg-zinc-100/90 text-charcoal-700 hover:bg-zinc-200/80'
                  }`}
                  aria-pressed={isActive}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((evt) => (
              <motion.article
                layout
                key={evt.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-zinc-200/80 shadow-xs hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Event Thumbnail with Zoom Effect */}
                  <div className="relative h-56 w-full overflow-hidden bg-charcoal-900">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-black/10 to-transparent" />
                    
                    {/* Category & Tag badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-white/95 text-charcoal-900 shadow-sm backdrop-blur-xs">
                        {evt.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 text-[10px] font-bold tracking-wide rounded-md bg-purple-700/90 text-white backdrop-blur-xs">
                        {evt.tag}
                      </span>
                    </div>

                    {/* Quick location overlay on image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="flex items-center gap-1 font-medium truncate max-w-[180px]">
                        <MapPin className="w-3.5 h-3.5 text-purple-300 flex-shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </span>
                      <span className="flex items-center gap-1 text-purple-200 text-[11px]">
                        <Users className="w-3.5 h-3.5" />
                        {evt.attendees}
                      </span>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-charcoal-900 group-hover:text-purple-700 transition-colors line-clamp-1">
                      {evt.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-5 pb-5 pt-1 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-charcoal-400">
                    {evt.date}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(evt)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    <span>View Showcase</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Event Showcase Quick View */}
        {selectedEvent && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-zinc-100 relative max-h-[90vh] flex flex-col">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-72 w-full bg-charcoal-900 flex-shrink-0">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-purple-700 text-white">
                    {selectedEvent.category} • {selectedEvent.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                    {selectedEvent.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-purple-50/60 border border-purple-100 text-center">
                  <div>
                    <span className="text-[11px] text-charcoal-500 font-medium block">Venue Location</span>
                    <span className="text-xs font-bold text-charcoal-900 mt-0.5 block truncate">{selectedEvent.location}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-charcoal-500 font-medium block">Guest Attendance</span>
                    <span className="text-xs font-bold text-charcoal-900 mt-0.5 block">{selectedEvent.attendees}</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-charcoal-500 font-medium block">Production Timeline</span>
                    <span className="text-xs font-bold text-charcoal-900 mt-0.5 block">{selectedEvent.date}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-charcoal-900 uppercase tracking-wider">Executive Overview</h4>
                  <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">
                    {selectedEvent.description}
                  </p>
                  <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">
                    Every element of this production—from guest acoustics and floral staging to VIP hospitality and lighting architecture—was managed under EVENTORA’s turnkey event production standards.
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedEvent(null)}
                    className="px-5 py-2.5 rounded-xl border border-zinc-200 text-sm font-semibold text-charcoal-700 hover:bg-zinc-50"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePlanSimilar(selectedEvent.title)}
                    className="px-6 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold shadow-md transition-colors"
                  >
                    Plan An Event Like This
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
