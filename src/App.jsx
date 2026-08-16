import React, { useState } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickFacts from './components/QuickFacts';
import Batches from './components/Batches';
import Subjects from './components/Subjects';
import Methodology from './components/Methodology';
import Toppers from './components/Toppers';
import Guidance from './components/Guidance';
import LocationCard from './components/LocationCard';
import GoogleFormEmbed from './components/GoogleFormEmbed';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import SubPageModal from './components/SubPageModal';

export default function App() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [activeSubPage, setActiveSubPage] = useState(null);

  return (
    <div className="min-h-screen bg-white text-ink antialiased relative selection:bg-brand-blue/10 selection:text-brand-blue">
      {/* 1. Announcement Banner */}
      <Banner onBookDemo={() => setShowDemoModal(true)} />

      {/* 2. Responsive Sticky Header with Sub-pages */}
      <Navbar 
        onBookDemo={() => setShowDemoModal(true)} 
        onSelectSubPage={(sub) => setActiveSubPage(sub)}
      />

      {/* 3. Hero Section with Animated Motion Graphics Notebook */}
      <Hero onBookDemo={() => setShowDemoModal(true)} />

      {/* 4. Quick Facts 4-Column Bar */}
      <QuickFacts />

      {/* 5. Learning Pathways / Classes */}
      <Batches onBookDemo={() => setShowDemoModal(true)} />

      {/* 6. Subject Expertise Cards */}
      <Subjects />

      {/* 7. The 7-Step Learning Method */}
      <Methodology />

      {/* 8. Board Toppers & Results Hall of Fame */}
      <Toppers onBookDemo={() => setShowDemoModal(true)} />

      {/* 9. Beyond the Classroom: Career & College Guidance */}
      <Guidance onBookDemo={() => setShowDemoModal(true)} />

      {/* 10. Neighbourhood Commerce Centre (Indira Nagar) */}
      <LocationCard />

      {/* 11. Official Google Drive Form Embed + Instant Booking */}
      <GoogleFormEmbed />

      {/* 12. Social Proof (Pinterest Notes & Google Reviews) */}
      <SocialProof />

      {/* 13. Frequently Asked Questions */}
      <FAQ />

      {/* 14. Admissions CTA Banner */}
      <Contact onBookDemo={() => setShowDemoModal(true)} />

      {/* 15. Footer */}
      <Footer />

      {/* 16. Floating Bottom Action Strip */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
        <a 
          href="tel:+919838827833" 
          className="h-12 w-12 rounded-full bg-brand-navy text-white shadow-xl flex items-center justify-center text-lg hover:scale-105 active:scale-95 transition border border-white/20" 
          title="Direct Call: +91 98388 27833"
        >
          📞
        </a>
        <a 
          href="https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="h-12 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition border border-white/20" 
          title="Chat on WhatsApp"
        >
          <span>💬</span> <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>

      {/* 17. Free Demo Booking Modal */}
      <EnquiryModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />

      {/* 18. Sub-Page Detail Modal */}
      <SubPageModal
        subPageData={activeSubPage}
        isOpen={Boolean(activeSubPage)}
        onClose={() => setActiveSubPage(null)}
        onBookDemo={() => setShowDemoModal(true)}
      />
    </div>
  );
}
