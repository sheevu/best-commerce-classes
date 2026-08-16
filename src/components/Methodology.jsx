import React from 'react';

const methodologySteps = [
  { n: "01", t: "Concept Building", d: "We teach the WHY behind every journal entry, balance sheet item and economic curve, not just rote memorization." },
  { n: "02", t: "Practical Examples", d: "Real business invoices, GST bills, corporate case studies and stock market examples to make learning engaging." },
  { n: "03", t: "Daily Revision Drills", d: "10-minute active recall session at the start of every class to lock in prior concepts." },
  { n: "04", t: "Exam-Oriented Notes", d: "Handwritten, concise, keyword-rich notes formatted strictly for high board scoring." },
  { n: "05", t: "Weekly Chapter Tests", d: "Same-week testing ensures concepts are tested immediately and retained long-term." },
  { n: "06", t: "PYQ & Board Pattern Practice", d: "Last 10 years of solved board paper questions decoded for step-marking and presentation." },
  { n: "07", t: "One-to-One Resolution", d: "We don't move to the next chapter until every single student says 'samajh aa gaya'." }
];

export default function Methodology() {
  return (
    <section id="method" className="mx-auto max-w-[1280px] px-6 md:px-8 py-12 md:py-16">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        {/* Left Side Static Info */}
        <div className="sticky top-[90px]">
          <h2 className="font-serif-display text-[42px] md:text-[56px] leading-[0.9] tracking-[-0.02em] text-brand-dark">
            Our teaching says <span className="text-brand-primary italic font-normal">WHY not just WHAT</span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-lightGreen border-2 border-brand-dark px-4 py-2 text-[12.5px] font-extrabold text-green-900 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-brand-dark animate-pulse"></span> 
            7-Step Board Topper Loop • Refined Since 2018
          </div>
          <p className="mt-5 text-[15px] leading-[1.75] text-slate-700 font-medium max-w-[420px]">
            Every note, test and doubt session is designed for presentation, keywords and speed that board examiners award top marks for.
          </p>
          
          {/* Key Stats Cards */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-[16px] border-2 border-brand-dark bg-white p-3 text-center shadow-neo">
              <div className="text-[24px] font-extrabold text-brand-primary">95%</div>
              <div className="text-[10px] uppercase tracking-widest font-extrabold text-slate-500">85%+ Scorers</div>
            </div>
            <div className="rounded-[16px] border-2 border-brand-dark bg-white p-3 text-center shadow-neo">
              <div className="text-[24px] font-extrabold text-brand-dark">3x</div>
              <div className="text-[10px] uppercase tracking-widest font-extrabold text-slate-500">Full Revisions</div>
            </div>
            <div className="rounded-[16px] border-2 border-brand-dark bg-white p-3 text-center shadow-neo">
              <div className="text-[24px] font-extrabold text-brand-primary">500+</div>
              <div className="text-[10px] uppercase tracking-widest font-extrabold text-slate-500">Toppers Guided</div>
            </div>
          </div>
        </div>

        {/* Right Side: Timeline Steps */}
        <div className="relative pl-8 border-l-2 border-brand-dark border-dashed">
          {methodologySteps.map((step) => (
            <div key={step.n} className="relative pb-8 last:pb-0">
              {/* Stepper Bullet */}
              <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-brand-dark text-white grid place-items-center text-[11px] font-extrabold border-2 border-brand-cream">
                {step.n}
              </div>
              
              {/* Step Card */}
              <div className="bg-white border-2 border-brand-dark rounded-[18px] p-5 shadow-neo transition-all duration-200 hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <div className="text-[16.5px] font-extrabold text-brand-dark">{step.t}</div>
                  <div className="text-[11.5px] font-extrabold tracking-widest uppercase text-brand-primary">
                    Step {step.n}
                  </div>
                </div>
                <div className="mt-2 text-[13.5px] leading-[1.65] text-slate-600 font-medium">
                  {step.d}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
