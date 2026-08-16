import React, { useState } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Toppers from './components/Toppers';
import Batches from './components/Batches';
import WhyUs from './components/WhyUs';
import Methodology from './components/Methodology';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

const marqueeTags = [
  "CBSE", "ICSE", "ISC", "UP BOARD", "CLASS 9-10", 
  "CLASS 11-12", "B.COM", "CUET PREP", "AC CLASSROOMS", "INDIRA NAGAR"
];

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark selection:bg-brand-secondary/20 pb-20 relative font-display">
      {/* 1. Top Alert Announcement Banner */}
      <Banner onBookDemo={() => setShowModal(true)} />

      {/* 2. Responsive Navigation Header */}
      <Navbar onBookDemo={() => setShowModal(true)} />

      {/* 3. Hero Section (Heading & Split details) */}
      <Hero onBookDemo={() => setShowModal(true)} />

      {/* 4. Marquee Chips/Tag strip */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">
        <div className="border-y-2 border-brand-dark/10 py-4 flex flex-wrap gap-2.5 items-center justify-center md:justify-between bg-white/40 px-4 rounded-xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {marqueeTags.map((tag) => (
              <span 
                key={tag} 
                className="text-[11.5px] md:text-[12.5px] tracking-[0.14em] font-extrabold text-slate-700 border-2 border-brand-dark/15 rounded-full px-3.5 py-1.5 bg-white shadow-2xs hover:border-brand-dark cursor-default transition-colors duration-150"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[12.5px] font-extrabold text-brand-primary hidden md:inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
            ✓ Admissions Open 2026-27
          </span>
        </div>
      </div>

      {/* 5. Toppers Hall of Fame Grid */}
      <Toppers onBookDemo={() => setShowModal(true)} />

      {/* 6. Batches & Courses Options */}
      <Batches onBookDemo={() => setShowModal(true)} />

      {/* 7. Why Choose Us (Selling pillars) */}
      <WhyUs />

      {/* 8. Stepper Methodology Loop */}
      <Methodology />

      {/* 9. Accordion FAQs */}
      <FAQ />

      {/* 10. Maps Directions & Contact details */}
      <Contact />

      {/* 11. Custom SEO and Links Footer */}
      <Footer />

      {/* 12. Floating Quick Contact Widgets (WhatsApp & Call) */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
        <a 
          href="tel:+917022419327" 
          className="h-12 w-12 rounded-full bg-brand-dark text-white border-2 border-brand-dark shadow-neoBrand grid place-items-center text-[18px] hover:scale-110 active:scale-100 transition" 
          title="Call +91 70224 19327"
        >
          📞
        </a>
        <a 
          href="https://wa.me/917022419327?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="h-12 px-5 rounded-full bg-[#25D366] text-white font-extrabold border-2 border-brand-dark shadow-neo inline-flex items-center gap-2 text-[14px] hover:scale-105 active:scale-100 transition" 
          title="WhatsApp Us"
        >
          💬 <span className="hidden sm:inline">Chat on WhatsApp</span>
        </a>
      </div>

      {/* 13. Dynamic Enquiry booking Modal Overlay */}
      <EnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
