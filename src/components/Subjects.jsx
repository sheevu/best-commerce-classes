import React from 'react';

const subjectsList = [
  {
    symbol: "∑",
    name: "Accountancy",
    desc: "Build rock-solid fundamentals through step-by-step logic, guided numerical practice, double-entry mastery and neat ledger presentation.",
    topics: ["Journal & Ledger Rules", "Partnership & Company Accounts", "Cash Flow Statements", "Step-Wise Step Marking"]
  },
  {
    symbol: "↗",
    name: "Economics",
    desc: "Simplify microeconomics, macroeconomics, statistics and graphical curves through intuitive, concept-led learning.",
    topics: ["Demand & Supply Elasticity", "National Income Accounting", "Government Budget & Forex", "Curve-Drawing Shortcuts"]
  },
  {
    symbol: "◎",
    name: "Business Studies",
    desc: "Connect management principles to real business case studies, corporate scenarios, keyword mastery and structured answers.",
    topics: ["Principles of Management", "Marketing & Financial Markets", "Case Study Decoders", "Examiner Keyword Strategy"]
  },
  {
    symbol: "◇",
    name: "B.Com & Higher Ed",
    desc: "Personalised assistance for commerce-related university exams, corporate law, income taxation, auditing and advanced accounting.",
    topics: ["Financial & Cost Accounting", "Corporate Law & Regulations", "Direct & Indirect Taxation", "Auditing & Statistics"]
  }
];

export default function Subjects() {
  return (
    <section id="subjects" className="py-16 md:py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-sky-300 mb-2">
            SUBJECT EXPERTISE
          </p>
          <h2 className="font-serif text-[36px] sm:text-[48px] leading-tight text-white">
            Strong foundations. Smarter preparation.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            We teach the logic behind every concept, not just the answer.
          </p>
        </div>

        {/* 4 Subject Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjectsList.map((sub, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 md:p-7 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Symbol Avatar */}
                <div className="h-12 w-12 rounded-xl bg-brand-blue text-white font-serif font-bold text-2xl flex items-center justify-center shadow-glowBlue group-hover:scale-105 transition-transform">
                  {sub.symbol}
                </div>

                <h3 className="font-serif font-bold text-2xl text-white mt-5">
                  {sub.name}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                  {sub.desc}
                </p>

                {/* Subtopic tags */}
                <div className="mt-5 space-y-1.5 pt-4 border-t border-white/10">
                  {sub.topics.map((t, i) => (
                    <div key={i} className="text-[11.5px] text-slate-300 flex items-center gap-1.5">
                      <span className="text-brand-orange text-xs">●</span>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3">
                <a
                  href={`https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(sub.name)}%20classes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 hover:text-white font-bold text-xs inline-flex items-center gap-1 transition"
                >
                  Enquire for {sub.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
