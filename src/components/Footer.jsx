import React from 'react';

const footerLinks = [
  { label: 'Class IX–X Foundation', href: '#classes' },
  { label: 'Class XI Commerce', href: '#classes' },
  { label: 'Class XII Boards', href: '#classes' },
  { label: 'B.Com Higher Ed', href: '#classes' },
  { label: 'CUET UG Prep', href: '#classes' },
  { label: 'Accountancy Mastery', href: '#subjects' },
  { label: 'Economics Curves', href: '#subjects' },
  { label: 'Business Studies', href: '#subjects' },
  { label: '7-Step Method', href: '#method' },
  { label: 'Board Toppers', href: '#toppers' },
  { label: 'Google Form Admission', href: '#admission-form' },
  { label: 'Interactive Analytics (New)', href: '/Infographics/commerce_tutorials_infographic_spa.html', isExternal: true },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 px-4 md:px-8">
      <div className="mx-auto max-w-[1280px]">
        
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between pb-10 border-b border-slate-200">
          {/* Brand Column */}
          <div className="max-w-md">
            <a href="#top" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-blue to-cyan-500 text-white font-serif font-bold text-lg flex items-center justify-center shadow-sm">
                CT
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-ink-dark">
                  Commerce Tutorials
                </div>
                <div className="text-[10.5px] uppercase tracking-[0.14em] text-brand-blue font-bold">
                  By Anjali Srivastava
                </div>
              </div>
            </a>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Where Concepts Become Confidence. Lucknow's trusted coaching institute for senior secondary commerce boards (CBSE, ISC, ICSE, UP Board) and college-level support (B.Com & CUET).
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-600">
              <a href="tel:+919838827833" className="text-brand-blue hover:underline">
                📞 +91 98388 27833
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href="https://maps.app.goo.gl/bbXyRwKK7zrQQtcz8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-blue hover:underline"
              >
                📍 Google Maps Directions
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href="https://share.google/Kqt2nXAXtfpPjTb58" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-blue hover:underline"
              >
                ⭐ Google Profile
              </a>
            </div>
          </div>

          {/* Quick Subpages Links */}
          <div className="flex-1 lg:max-w-xl">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3">
              Explore Academic Programs & Resources
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-slate-600">
              {footerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  className="hover:text-brand-blue py-1 transition-colors"
                >
                  • {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © 2025–2026 Commerce Tutorials By Anjali Srivastava • C-717, Indira Nagar, Lucknow – 226016
          </div>
          <div className="font-serif italic text-slate-400">
            Concepts · Practice · Confidence
          </div>
        </div>

      </div>
    </footer>
  );
}
