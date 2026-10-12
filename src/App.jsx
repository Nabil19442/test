import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeaturedEvents from './components/FeaturedEvents';
import WhyChooseUs from './components/WhyChooseUs';
import OurProcess from './components/OurProcess';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedServicePrefill, setSelectedServicePrefill] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedServicePrefill(serviceTitle);
  };

  const handlePlanEvent = (customNote = '') => {
    if (customNote) {
      setSelectedServicePrefill(customNote);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-charcoal-900 font-sans flex flex-col selection:bg-purple-100 selection:text-purple-900">
      {/* Top Navigation */}
      <Navbar onOpenContact={() => handlePlanEvent()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreServices={() => {}}
          onPlanEvent={() => handlePlanEvent()}
        />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* Featured Events & Portfolio Section */}
        <FeaturedEvents onPlanEvent={handlePlanEvent} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* 4-Step Process */}
        <OurProcess />

        {/* Testimonials */}
        <Testimonials />

        {/* Call to Action Banner */}
        <CallToAction onStartPlanning={() => handlePlanEvent()} />

        {/* Contact Section */}
        <Contact selectedServicePrefill={selectedServicePrefill} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
