import React from 'react';

const careerChips = [
  "CA (Chartered Accountancy)",
  "CS (Company Secretary)",
  "CMA (Cost & Mgmt)",
  "B.Com & B.Com (Hons)",
  "CUET-UG Strategy",
  "BBA / IPMAT",
  "Corporate Law",
  "Financial Analytics",
  "Stock Markets & Banking",
  "University College Selection"
];

export default function Guidance({ onBookDemo }) {
  return (
    <section className="py-16 md:py-20 bg-brand-cream border-b border-slate-200">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-brand-blue to-blue-900 text-white p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Art */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-sky-300 mb-2">
              BEYOND THE CLASSROOM
            </p>
            
            <h2 className="font-serif text-[34px] sm:text-[46px] md:text-[54px] leading-[1.05] tracking-tight text-white">
              Commerce career & higher-education guidance
            </h2>

            <p className="mt-4 text-sky-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Explore informed pathways across professional qualifications, top Delhi University colleges, B.Com specializations, management, finance and entrepreneurship.
            </p>

            {/* Career Chips */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {careerChips.map((chip, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-xs sm:text-sm font-semibold transition"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20would%20like%20to%20discuss%20my%20academic%20path%20and%20career%20guidance"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 px-7 rounded-xl bg-white hover:bg-slate-100 text-brand-blue text-sm font-bold inline-flex items-center gap-2 transition shadow-lg"
              >
                <span>💬</span> Discuss Your Academic Path →
              </a>
              <button
                onClick={onBookDemo}
                className="h-12 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-bold inline-flex items-center gap-2 transition"
              >
                <span>🎯</span> Request Counselling Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
