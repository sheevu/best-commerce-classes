import React from 'react';

export default function Banner({ onBookDemo }) {
  return (
    <div className="bg-brand-navy text-white text-[12px] sm:text-[13px] py-2.5 px-4 text-center font-medium flex flex-wrap items-center justify-center gap-2 border-b border-white/10 z-50 relative">
      <span className="inline-flex items-center gap-1.5 font-semibold text-brand-orange">
        <span className="inline-block h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
        Admissions Open 2026-27
      </span>
      <span className="text-slate-300 hidden sm:inline">•</span>
      <span className="text-slate-200">
        Class IX, X, XI, XII (CBSE, ICSE, ISC, UP Board) & B.Com in Indira Nagar, Lucknow
      </span>
      <div className="inline-flex items-center gap-2 ml-1">
        <a 
          href="tel:+919838827833" 
          className="text-brand-blueLight hover:text-white font-bold transition flex items-center gap-1 ml-1"
        >
          <span>📞</span> +91 98388 27833
        </a>
        <span className="text-white/30 hidden md:inline">•</span>
        <button 
          onClick={onBookDemo}
          className="bg-brand-blue hover:bg-brand-blueDark text-white px-3 py-1 rounded-full font-bold transition text-[11px] sm:text-[12px] shadow-sm ml-1"
        >
          Book Free Demo →
        </button>
      </div>
    </div>
  );
}
