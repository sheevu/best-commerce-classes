import React from 'react';

const quickFactsList = [
  { title: "Small Batches", desc: "12–15 students max for focused learning", icon: "👥" },
  { title: "Personal Attention", desc: "1-on-1 support at every learning pace", icon: "🎯" },
  { title: "Regular Tests", desc: "Weekly board-pattern mock assessments", icon: "📝" },
  { title: "Career Guidance", desc: "CA, CS, CMA, CUET & College planning", icon: "🚀" },
];

export default function QuickFacts() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {quickFactsList.map((fact, idx) => (
            <div key={idx} className="p-6 md:p-7 flex items-start gap-3.5 hover:bg-slate-50/80 transition duration-150">
              <div className="h-10 w-10 rounded-xl bg-brand-blueSky text-brand-blue flex items-center justify-center text-lg shrink-0">
                {fact.icon}
              </div>
              <div>
                <b className="text-[15px] font-bold text-ink-dark block">
                  {fact.title}
                </b>
                <span className="text-[12.5px] text-slate-500 font-medium block mt-1 leading-snug">
                  {fact.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
