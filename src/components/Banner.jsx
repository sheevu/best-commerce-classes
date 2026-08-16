import React from 'react';

export default function Banner({ onBookDemo }) {
  return (
    <div className="bg-brand-dark text-white text-[12.5px] py-2.5 px-4 text-center font-semibold flex flex-wrap items-center justify-center gap-2 border-b border-black/20 z-50 relative">
      <span className="inline-block h-2 w-2 rounded-full bg-[#10B981] animate-pulse"></span>
      <span className="tracking-wide">
        📢 Admissions Open 2026-27 — CBSE, ICSE, ISC, UP Board & B.Com • Small Batches (12-15) in Indira Nagar, Lucknow
      </span>
      <div className="inline-flex items-center gap-2 ml-2">
        <a 
          href="tel:+919838827833" 
          className="underline text-brand-lightGreen hover:text-white font-bold transition"
        >
          📞 +91 98388 27833
        </a>
        <span className="text-white/40">•</span>
        <button 
          onClick={onBookDemo}
          className="bg-brand-primary text-white px-2.5 py-0.5 rounded-full font-bold hover:bg-white hover:text-brand-dark transition text-[11px]"
        >
          Book Free Demo →
        </button>
      </div>
    </div>
  );
}
