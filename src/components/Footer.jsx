import React from 'react';

const seoTags = [
  "Best Commerce Coaching Institute in Indira Nagar, Lucknow",
  "Commerce Coaching in Indira Nagar",
  "Class 11 Commerce Coaching Lucknow",
  "Class 12 Commerce Coaching Indira Nagar",
  "Accounts Coaching Lucknow",
  "Business Studies Coaching",
  "Economics Coaching Indira Nagar",
  "CBSE Commerce Coaching Lucknow",
  "ISC Commerce Coaching",
  "B.Com Coaching Indira Nagar",
  "CUET Commerce Coaching Lucknow",
  "Top Commerce Teacher in Lucknow"
];

export default function Footer() {
  return (
    <footer className="bg-brand-cream border-t-2 border-brand-dark/10 py-12 px-6 md:px-8 mt-12">
      <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row gap-10 items-start justify-between">
        
        {/* Brand details */}
        <div className="max-w-[380px] space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logo1.2.png" 
              className="h-10 w-10 rounded-full border-2 border-brand-dark object-cover" 
              alt="logo" 
            />
            <div className="leading-[1.1]">
              <div className="font-display font-extrabold text-[15px] text-brand-dark">
                Commerce Tutorials
              </div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-brand-primary font-bold">
                By Anjali Srivastava
              </div>
            </div>
          </div>
          <p className="text-[12.5px] leading-[1.6] text-slate-600 font-semibold">
            Lucknow's trusted coaching institute for senior secondary commerce boards (CBSE, ISC, ICSE, UP Board) and college-level support (B.Com & CUET). Concept-first learning with personal mentorship since 2018.
          </p>
          
          <div className="flex flex-wrap items-center gap-2 text-[12px] font-bold text-slate-700">
            <a href="tel:+917022419327" className="text-brand-primary hover:underline">
              📞 +91 70224 19327
            </a>
            <span className="text-slate-300">•</span>
            <a 
              href="https://maps.app.goo.gl/bbXyRwKK7zrQQtcz8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-primary hover:underline"
            >
              📍 Google Maps
            </a>
            <span className="text-slate-300">•</span>
            <a 
              href="https://pin.it/56c56anvX" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E60023] hover:underline"
            >
              📌 Pinterest
            </a>
          </div>
        </div>

        {/* SEO Tag Cloud */}
        <div className="flex-1 lg:max-w-[640px]">
          <div className="text-[11.5px] font-extrabold tracking-widest uppercase text-slate-400">
            SEO • Popular Lucknow Searches
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {seoTags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 rounded-full border border-brand-dark/15 bg-white text-[11px] font-bold text-slate-700 shadow-2xs hover:border-brand-dark transition-colors duration-150 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copy block */}
      <div className="mx-auto max-w-[1280px] mt-8 pt-6 border-t-2 border-brand-dark/10 flex flex-col md:flex-row justify-between gap-2 text-[12px] text-slate-500 font-semibold">
        <span>
          © 2025-2026 Commerce Tutorials By Anjali Srivastava • Indira Nagar, Lucknow • hellocommerceclass@gmail.com • +91 70224 19327
        </span>
        <span>
          Where Concepts Become Confidence • All rights reserved.
        </span>
      </div>
    </footer>
  );
}
