import React from 'react';

const pathways = [
  {
    tag: "IX–X",
    title: "Commerce Foundation",
    desc: "Develop early financial awareness, disciplined study habits and a confident base in Commercial Studies and Economics before senior secondary.",
    batchInfo: "Small Batch (12 Max) • Mon–Fri",
    badge: "Foundation"
  },
  {
    tag: "XI",
    title: "Class 11 Commerce",
    desc: "Structured support in Accountancy (Double-Entry logic), Business Studies and Economics with active revision, practice and daily doubt solving.",
    batchInfo: "AC Classrooms • 4:00 PM – 6:00 PM",
    badge: "Core Mastery"
  },
  {
    tag: "XII",
    title: "Class 12 Boards",
    desc: "Board-focused preparation with 10-year PYQs, answer writing drills, step-wise numerical marking, mock series and direct exam strategy.",
    batchInfo: "PYQ Marathon • 6:00 PM – 8:00 PM",
    badge: "Board Toppers"
  },
  {
    tag: "UG",
    title: "B.Com & CUET Prep",
    desc: "Concept clarification, university study planning and systematic support for Financial Accounting, Corporate Law, and CUET-UG Commerce domain.",
    batchInfo: "University Depth • Flexible Timing",
    badge: "Higher Ed"
  }
];

export default function Batches({ onBookDemo }) {
  return (
    <section id="classes" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] uppercase text-brand-blue mb-2">
              LEARNING PATHWAYS
            </p>
            <h2 className="font-serif text-[36px] sm:text-[48px] leading-[1.05] tracking-tight text-ink-dark">
              Support for every stage<br />of your Commerce journey.
            </h2>
          </div>
          <p className="text-ink-muted text-sm sm:text-base max-w-md leading-relaxed">
            From foundational learning to board preparation and B.Com assistance, every programme is built around clarity, consistency and confidence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((card) => (
            <article 
              key={card.tag}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardHover group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div>
                <div className="flex items-center justify-between">
                  <span className="h-10 px-3.5 rounded-xl bg-brand-blueSky text-brand-blue font-bold text-sm flex items-center justify-center">
                    {card.tag}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-ink-dark mt-5 group-hover:text-brand-blue transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-[11.5px] font-bold text-slate-500 mb-3 flex items-center gap-1.5">
                  <span className="text-brand-orange">●</span> {card.batchInfo}
                </div>
                
                <div className="flex items-center justify-between">
                  <a
                    href={`https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20check%20batch%20availability%20for%20${encodeURIComponent(card.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue font-bold text-xs sm:text-[13px] hover:text-brand-blueDark inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    Check batch availability →
                  </a>
                  <button
                    onClick={onBookDemo}
                    className="text-xs font-bold text-slate-500 hover:text-ink underline"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
