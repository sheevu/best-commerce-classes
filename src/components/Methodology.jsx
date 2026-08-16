import React from 'react';

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "Simple, real-life business examples establish the 'why' behind every journal entry, economic curve and management principle."
  },
  {
    num: "02",
    title: "Practise",
    desc: "Guided step-by-step questions and error-analysis drills turn raw understanding into an instinctive exam skill."
  },
  {
    num: "03",
    title: "Revise",
    desc: "10-minute active recall sessions at the start of every class lock in prior concepts and connect inter-chapter links."
  },
  {
    num: "04",
    title: "Test & Improve",
    desc: "Weekly chapter tests and 10-year PYQ mock papers reveal knowledge gaps early and guide targeted 1-on-1 improvement."
  }
];

export default function Methodology() {
  return (
    <section id="method" className="py-16 md:py-24 bg-brand-cream border-b border-slate-200">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Intro & Badges */}
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] uppercase text-brand-blue mb-2">
              THE LEARNING METHOD
            </p>
            <h2 className="font-serif text-[38px] sm:text-[50px] leading-[1.05] tracking-tight text-ink-dark">
              We teach the “why”<br />before the “how”.
            </h2>
            <p className="text-ink-muted text-sm sm:text-base mt-4 leading-relaxed max-w-lg">
              A proven, repeatable cycle developed by Anjali Srivastava over 8+ years helps students move from confusion to confident application.
            </p>

            {/* Method Badges */}
            <div className="mt-8 grid grid-cols-2 gap-3.5 max-w-md">
              {[
                "Practical examples",
                "1-on-1 doubt solving",
                "Previous-year questions",
                "Performance feedback",
                "Board step-marking",
                "Small 12-15 batches"
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-ink">
                  <span className="h-5 w-5 rounded-full bg-brand-mintLight text-brand-mint flex items-center justify-center text-xs shrink-0 font-bold">
                    ✓
                  </span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Center Callout */}
            <div className="mt-8 p-4 rounded-xl bg-white border border-amber-200/80 shadow-card flex items-center gap-3">
              <div className="text-2xl">💡</div>
              <p className="text-xs sm:text-[13px] text-ink-muted font-medium">
                <strong className="text-ink-dark block font-bold">Concept Guarantee:</strong> We never move to the next chapter until every student in the batch says <em>'samajh aa gaya'</em>.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Interactive Step Cards */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex items-start gap-5 hover:border-brand-blue hover:shadow-card transition-all duration-200 group"
              >
                <div className="font-serif font-bold text-3xl sm:text-4xl text-brand-orange shrink-0 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-ink-dark group-hover:text-brand-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
