import React, { useState } from 'react';

const toppersList = [
  { name: "Tuhina Prasad", score: "97.6%", college: "Lady Shri Ram College (LSR), DU", year: "2023-24", badge: "Board Highest" },
  { name: "Srishti Singh", score: "96.5%", college: "Kirori Mal College (KMC), DU", year: "2023-24", badge: "DU Top Cutoff" },
  { name: "Manya Kapoor", score: "92.0%", college: "Lucknow University", year: "2023-24", badge: "LU Commerce" },
  { name: "Shashwat Srivastav", score: "91.5%", college: "Dyal Singh College, DU", year: "2023-24", badge: "DU Commerce" },
  { name: "Shree Gupta", score: "87.9%", college: "Rajiv Gandhi National Univ of Law", year: "2023-24", badge: "RGNUL Law" },
  { name: "Akshat Srivastava", score: "87.0%", college: "Manipal University", year: "2024-25", badge: "Manipal BBA" },
  { name: "Paras Bhardwaj", score: "86.0%", college: "National PG College (NPGC)", year: "2024-25", badge: "NPGC B.Com" },
  { name: "Rasha Chaudhary", score: "84.0%", college: "IMRT Lucknow", year: "2024-25", badge: "IMRT Commerce" },
];

export default function Toppers({ onBookDemo }) {
  const [selectedYear, setSelectedYear] = useState('ALL');

  const filtered = selectedYear === 'ALL'
    ? toppersList
    : toppersList.filter(t => t.year === selectedYear);

  return (
    <section id="toppers" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] uppercase text-brand-blue mb-2">
              PROVEN BOARD RESULTS
            </p>
            <h2 className="font-serif text-[36px] sm:text-[48px] leading-[1.05] tracking-tight text-ink-dark">
              Our results speak.<br />Meet our board toppers.
            </h2>
          </div>
          
          {/* Year Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {['ALL', '2023-24', '2024-25'].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`h-9 px-4 rounded-xl text-xs font-bold transition-all ${
                  selectedYear === yr
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {yr === 'ALL' ? 'All Recent Batches' : `Batch ${yr}`}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Topper Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((student, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-cardHover hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10.5px] font-bold">
                    {student.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {student.year}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3.5">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-blue to-indigo-600 text-white font-serif font-bold text-base flex items-center justify-center shadow-sm shrink-0">
                    {student.score}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-ink-dark">
                      {student.name}
                    </h3>
                    <span className="text-xs font-bold text-brand-blue block mt-0.5">
                      Score: {student.score}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
                  <span className="font-bold text-ink-dark block">Currently at:</span>
                  {student.college}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-brand-mint font-bold flex items-center gap-1">
                  <span>✓</span> Board Verified
                </span>
                <button
                  onClick={onBookDemo}
                  className="text-brand-blue hover:underline font-bold"
                >
                  Join Like Them →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
