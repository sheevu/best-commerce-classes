import React, { useState } from 'react';

export default function Navbar({ onBookDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Toppers', href: '#toppers' },
    { label: 'Batches', href: '#batches' },
    { label: 'Methodology', href: '#method' },
    { label: 'Why Us', href: '#why' },
    { label: 'Analytics (New)', href: '/Infographics/commerce_tutorials_infographic_spa.html', isExternal: true, highlight: true },
    { label: 'Pinterest Notes', href: 'https://www.pinterest.com/bestcommerceclass/', isExternal: true },
    { label: 'Course Portal', href: 'https://commerce-coaching-lucknow.netlify.app/', isExternal: true },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-brand-cream/95 backdrop-blur-xl border-b border-brand-dark/10 shadow-xs">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 h-[74px] flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <img 
            src="/logo1.2.png" 
            className="h-11 w-11 rounded-full border-2 border-brand-dark object-cover group-hover:scale-105 transition" 
            alt="logo" 
          />
          <div className="leading-[1.1]">
            <div className="font-display font-extrabold text-[15.5px] md:text-[16.5px] tracking-tight text-brand-dark whitespace-nowrap">
              Commerce Tutorials
            </div>
            <div className="text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-brand-primary font-bold whitespace-nowrap">
              By Anjali Srivastava
            </div>
          </div>
        </a>

        {/* Desktop Links (Collapsed to Hamburger under xl breakpoint) */}
        <div className="hidden xl:flex items-center gap-5 text-[13px] font-bold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className={`transition-colors hover:text-brand-primary whitespace-nowrap ${
                link.highlight 
                  ? 'text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/30 hover:bg-brand-primary hover:text-white' 
                  : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <a 
            href="tel:+919838827833" 
            className="h-[38px] px-3.5 rounded-full border-2 border-brand-dark bg-white text-[12.5px] font-bold text-brand-dark inline-flex items-center hover:bg-brand-dark hover:text-white transition shadow-neo whitespace-nowrap"
          >
            📞 +91 98388 27833
          </a>
          <a 
            href="https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="h-[38px] px-3.5 rounded-full bg-[#25D366] text-white text-[12.5px] font-bold inline-flex items-center gap-1.5 hover:opacity-90 transition border border-black/20 shadow-xs whitespace-nowrap"
          >
            💬 WhatsApp
          </a>
          <button 
            onClick={onBookDemo}
            className="h-[38px] px-4 rounded-full bg-brand-dark text-white text-[12.5px] font-bold grid place-items-center hover:bg-brand-primary transition shadow-xs whitespace-nowrap"
          >
            Book Free Demo
          </button>
        </div>

        {/* Mobile Hamburger Button (Shows up under xl breakpoint) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full border-2 border-brand-dark bg-white shadow-xs focus:outline-none hover:bg-brand-cream transition shrink-0"
          aria-label="Toggle menu"
        >
          <span className={`block w-4.5 h-0.5 bg-brand-dark transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
          <span className={`block w-4.5 h-0.5 bg-brand-dark my-0.5 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-4.5 h-0.5 bg-brand-dark transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[74px] bg-brand-dark/20 backdrop-blur-sm z-30 transition-all duration-300" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="bg-brand-cream w-[280px] max-w-full h-full shadow-2xl border-r-2 border-brand-dark flex flex-col justify-between p-6 transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-280px)]">
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">
                Navigation
              </div>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className={`font-bold text-[15px] text-brand-dark hover:text-brand-primary transition-colors py-1 ${
                      link.highlight ? 'text-brand-primary underline' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-brand-dark/10 bg-brand-cream">
              <a 
                href="tel:+919838827833"
                className="w-full h-11 justify-center rounded-full border-2 border-brand-dark bg-white text-[13px] font-bold text-brand-dark flex items-center gap-2 shadow-neo whitespace-nowrap"
              >
                📞 Call +91 98388 27833
              </a>
              <a 
                href="https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 justify-center rounded-full bg-[#25D366] text-white text-[13px] font-extrabold flex items-center gap-2 border border-black/20 whitespace-nowrap"
              >
                💬 Chat on WhatsApp
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookDemo();
                }}
                className="w-full h-11 rounded-full bg-brand-dark text-white text-[13px] font-extrabold hover:bg-brand-primary transition shadow-md whitespace-nowrap"
              >
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
