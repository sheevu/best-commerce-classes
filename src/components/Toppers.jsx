import React, { useState } from 'react';

const toppersData = [
  { name: "Tuhina Prasad", score: "97.6%", college: "Lady Shri Ram College (LSR), DU", year: "2023-24", badge: "Board Topper" },
  { name: "Srishti Singh", score: "96.5%", college: "Kirori Mal College (KMC), DU", year: "2023-24", badge: "DU Commerce" },
  { name: "Manya Kapoor", score: "92.0%", college: "Lucknow University", year: "2023-24", badge: "LU Commerce" },
  { name: "Shashwat Srivastav", score: "91.5%", college: "Dyal Singh College, DU", year: "2023-24", badge: "DU Commerce" },
  { name: "Shree Gupta", score: "87.9%", college: "Rajiv Gandhi National Univ of Law", year: "2023-24", badge: "RGNUL Law" },
  { name: "Akshat Srivastava", score: "87.0%", college: "Manipal University", year: "2024-25", badge: "Manipal BBA" },
  { name: "Paras Bhardwaj", score: "86.0%", college: "National PG College (NPGC)", year: "2024-25", badge: "NPGC B.Com" },
  { name: "Rasha Chaudhary", score: "84.0%", college: "IMRT Lucknow", year: "2024-25", badge: "IMRT Commerce" },
  { name: "Vansh Saxena", score: "84.0%", college: "Indus University", year: "2024-25", badge: "Indus Univ" },
  { name: "Anvi Rai", score: "82.0%", college: "IT Degree College Lucknow", year: "2023-24", badge: "IT College" },
  { name: "Aditi Singh", score: "81.0%", college: "National PG College (NPGC)", year: "2023-24", badge: "NPGC Lucknow" },
  { name: "Sajal Srivastava", score: "81.0%", college: "KKC PG College Lucknow", year: "2023-24", badge: "KKC Lucknow" }
];

export default function Toppers({ onBookDemo }) {
  const [topperYear, setTopperYear] = useState("ALL");

  const filteredToppers = topperYear === "ALL" 
    ? toppersData 
    : toppersData.filter(t => t.year === topperYear);

  return (
    <section id="toppers" className="mx-auto max-w-[1280px] px-6 md:px-8 py-12 md:py-16">
      {/* Title & Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-brand-dark px-3.5 py-1 text-[11.5px] font-extrabold tracking-widest uppercase bg-brand-lightGreen text-green-950">
            🏆 Hall of Fame • Board Toppers
          </div>
          <h2 className="mt-3 font-serif-display text-[38px] md:text-[54px] leading-[0.95] tracking-[-0.02em] text-brand-dark">
            Our Results Speak. <span className="text-brand-primary">Meet Our Toppers.</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {["ALL", "2023-24", "2024-25"].map(yr => (
            <button 
              key={yr} 
              onClick={() => setTopperYear(yr)} 
              className={`h-9 px-4 rounded-full border-2 text-[12.5px] font-extrabold transition-all duration-150 ${
                topperYear === yr 
                  ? "bg-brand-dark text-white border-brand-dark" 
                  : "bg-white text-slate-700 border-black/20 hover:border-black"
              }`}
            >
              {yr === "ALL" ? "All Recent Toppers" : "Batch " + yr}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredToppers.map((t, idx) => (
          <div 
            key={t.name + idx} 
            className="bg-white border-2 border-brand-dark rounded-[20px] p-4 shadow-neo transition hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10.5px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FEF3C7] border border-black/25 text-[#78350F]">
                  {t.badge}
                </span>
                <span className="text-[11.5px] font-bold text-slate-500">{t.year}</span>
              </div>
              
              <div className="mt-3 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-dark text-white font-extrabold grid place-items-center text-[14px] shrink-0 border border-brand-dark shadow-xs">
                  {t.score}
                </div>
                <div className="leading-[1.2]">
                  <h3 className="font-bold text-[15px] text-brand-dark">{t.name}</h3>
                  <div className="text-[12.5px] font-extrabold text-brand-primary mt-0.5">
                    Score: {t.score}
                  </div>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-brand-dark/10 text-[12px] text-slate-600 font-semibold leading-[1.35]">
                <span className="font-bold text-brand-dark">Currently at: </span>
                {t.college}
              </div>
            </div>
            
            <div className="mt-4 pt-2 flex items-center justify-between text-[11.5px] font-bold text-brand-primary border-t border-brand-dark/5">
              <span>✓ Board Verified</span>
              <button 
                onClick={onBookDemo} 
                className="underline text-brand-dark hover:text-brand-primary"
              >
                Join Like Them →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
