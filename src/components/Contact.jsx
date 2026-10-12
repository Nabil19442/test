import React, { useState, useEffect } from 'react';
import { eventTypesList } from '../data/eventData';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Calendar,
  X
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function Contact({ selectedServicePrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    preferredDate: '',
    guestCount: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Update eventType if prefilled from Services or Featured Events
  useEffect(() => {
    if (selectedServicePrefill) {
      // Find matching or set directly
      const match = eventTypesList.find((type) =>
        type.toLowerCase().includes(selectedServicePrefill.toLowerCase())
      );
      setFormData((prev) => ({
        ...prev,
        eventType: match || selectedServicePrefill,
      }));
    }
  }, [selectedServicePrefill]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event category';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your event vision';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a bit more detail (minimum 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate brief client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setShowDemoModal(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        eventType: '',
        preferredDate: '',
        guestCount: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFC] relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 text-purple-800 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Consultation & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal-900 tracking-tight">
            Let’s Discuss Your Next Signature Gathering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 max-w-2xl mx-auto leading-relaxed">
            Fill out the consultation form below, or reach out directly to our production studio. We typically respond within 24 business hours.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Sample Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-xs space-y-6">
              <div>
                <h3 className="text-xl font-bold text-charcoal-900">
                  EVENTORA Creative Studio
                </h3>
                <p className="text-sm text-charcoal-600 mt-1 leading-relaxed">
                  Our private client salon and executive offices welcome appointments for bespoke event consultations.
                </p>
              </div>

              {/* Sample Contact Info list */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Headquarters (Sample)</h4>
                    <p className="text-sm font-medium text-charcoal-800 mt-0.5">
                      450 Lexington Avenue, Suite 2400<br />New York, NY 10017, United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Direct Inquiries (Sample)</h4>
                    <a
                      href="tel:+18005550199"
                      className="text-sm font-semibold text-charcoal-800 hover:text-purple-700 transition-colors block mt-0.5"
                    >
                      +1 (800) 555-0199 / +1 (212) 555-8321
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Email Concierge (Sample)</h4>
                    <a
                      href="mailto:inquiries@eventora-sample.com"
                      className="text-sm font-semibold text-charcoal-800 hover:text-purple-700 transition-colors block mt-0.5"
                    >
                      inquiries@eventora-sample.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">Studio Hours</h4>
                    <p className="text-sm font-medium text-charcoal-800 mt-0.5">
                      Monday – Friday: 9:00 AM – 7:00 PM EST<br />Saturday: By VIP Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Replaceable info reminder badge */}
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-charcoal-500">
                <span className="font-semibold text-charcoal-700">Notice:</span> Company contact details above are sample placeholders intended for illustrative frontend presentation.
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-zinc-100">
                <span className="text-xs font-bold text-charcoal-600 block mb-3 uppercase tracking-wider">
                  Follow Our Productions
                </span>
                <div className="flex items-center gap-3">
                  {[
                    { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
                    { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
                    { icon: TwitterIcon, label: 'Twitter', href: 'https://twitter.com' },
                  ].map((s, idx) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={idx}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-zinc-100 text-charcoal-700 hover:bg-purple-700 hover:text-white transition-all duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500"
                        aria-label={`Visit EVENTORA on ${s.label}`}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Frontend Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200/80 shadow-xs relative">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                      Your Full Name <span className="text-purple-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Lady Vivienne Montgomery"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-900 bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-zinc-200 focus:border-purple-600 focus:ring-purple-500/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                      Email Address <span className="text-purple-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. vivienne@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-900 bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-zinc-200 focus:border-purple-600 focus:ring-purple-500/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Event Type Dropdown */}
                  <div>
                    <label htmlFor="contact-event-type" className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                      Event Type <span className="text-purple-600">*</span>
                    </label>
                    <select
                      id="contact-event-type"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.eventType
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-zinc-200 focus:border-purple-600 focus:ring-purple-500/20'
                      }`}
                    >
                      <option value="">Select Event Category...</option>
                      {eventTypesList.map((type, idx) => (
                        <option key={idx} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.eventType}
                      </p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="contact-date" className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                      Preferred Date (Target)
                    </label>
                    <input
                      type="date"
                      id="contact-date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-charcoal-900 bg-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Estimated Guests */}
                <div>
                  <label htmlFor="contact-guests" className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                    Estimated Guest Attendance (Optional)
                  </label>
                  <input
                    type="text"
                    id="contact-guests"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="e.g. 150 - 250 Guests"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm text-charcoal-900 bg-white placeholder:text-zinc-400 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-2">
                    Event Vision & Requirements <span className="text-purple-600">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your desired atmosphere, venue ideas, production needs, or specific design preferences..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-charcoal-900 bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-400'
                        : 'border-zinc-200 focus:border-purple-600 focus:ring-purple-500/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-white font-bold text-sm shadow-lg shadow-purple-700/25 hover:shadow-xl hover:shadow-purple-700/35 transition-all duration-200 flex items-center justify-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Validating Consultation Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Consultation Request</span>
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-xs text-charcoal-400">
                    * This is a frontend demo form. No backend API or network call is made.
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Demo Success Modal */}
      {showDemoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-zinc-100 shadow-2xl relative text-center">
            <button
              type="button"
              onClick={() => setShowDemoModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-charcoal-400 hover:text-charcoal-800 hover:bg-zinc-100 transition-colors"
              aria-label="Close confirmation"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 mx-auto flex items-center justify-center mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-charcoal-900">
              Inquiry Validated Successfully!
            </h3>

            <div className="my-4 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 text-left text-xs space-y-1.5 text-charcoal-700">
              <p><strong className="text-charcoal-900">Name:</strong> {submittedData?.name}</p>
              <p><strong className="text-charcoal-900">Email:</strong> {submittedData?.email}</p>
              <p><strong className="text-charcoal-900">Event Type:</strong> {submittedData?.eventType}</p>
              {submittedData?.preferredDate && (
                <p><strong className="text-charcoal-900">Date:</strong> {submittedData.preferredDate}</p>
              )}
            </div>

            <div className="p-3.5 bg-amber-50 border border-amber-200/70 rounded-xl text-left text-xs text-amber-900 leading-relaxed mb-6">
              <p className="font-semibold mb-1">Frontend Demo Notice:</p>
              <p>
                As specified by the project requirements, this application runs entirely on the client side with <strong>no backend server or API</strong>. No external request has been sent. Your form validation and interaction are functioning as expected!
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowDemoModal(false)}
              className="w-full py-3 px-6 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm shadow-md transition-colors"
            >
              Close Confirmation
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
