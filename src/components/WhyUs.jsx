import React from 'react';

const pillarsData = [
  {k:"Experienced Faculty",d:"8+ years of dedicated commerce teaching by Anjali Srivastava with proven board toppers."},
  {k:"Individual Attention",d:"We track every student's individual graph and clear concepts until complete confidence."},
  {k:"Small Batch Learning",d:"Strictly 12-15 students per batch. Every doubt heard, every answer copy personally checked."},
  {k:"Regular Practice Tests",d:"Weekly chapter-wise tests & monthly cumulative tests structured on exact board patterns."},
  {k:"Weekly Performance Analysis",d:"Detailed marks, error analysis, and micro-improvement reports shared with parents."},
  {k:"One-to-One Doubt Solving",d:"Daily 30-min doubt window plus dedicated 1-on-1 sessions before exams."},
  {k:"Parent Progress Updates",d:"Regular updates & PTMs to ensure complete transparency in student progress."},
  {k:"Career & College Guidance",d:"Guidance for CA, CS, CMA, BBA, B.Com & CUET college selection after boards."},
  {k:"AC Classrooms",d:"Comfortable, air-conditioned, focused offline classrooms in Indira Nagar, Lucknow."}
];

export default function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-[1280px] px-6 md:px-8 py-12 md:py-16">
      <div className="bg-white border-2 border-brand-dark rounded-[28px] p-6 md:p-10 shadow-neoLarge">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Column: Title & Faculty Profile */}
          <div className="md:w-[340px] shrink-0">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-brand-dark px-3.5 py-1 text-[11.5px] font-extrabold tracking-widest uppercase bg-brand-gold/10 text-amber-900">
              Why Students Choose Us
            </div>
            <h2 className="mt-4 font-serif-display text-[36px] md:text-[44px] leading-[0.95] text-brand-dark">
              We don't just teach, we build toppers.
            </h2>
            <p className="mt-3 text-[14px] leading-[1.65] text-slate-600 font-medium">
              Built on 3 core pillars: small batches, 1-on-1 doubt solving, and board-level answer writing.
            </p>
            
            {/* Faculty profile box */}
            <div className="mt-6 rounded-[18px] border-2 border-brand-dark bg-brand-cream p-4 flex gap-3.5 items-center shadow-xs">
              <img 
                src="/logo1.2.png" 
                className="h-12 w-12 rounded-full border-2 border-brand-dark object-cover" 
                alt="Anjali Srivastava" 
              />
              <div className="leading-[1.1]">
                <div className="text-[14px] font-extrabold text-brand-dark">Anjali Srivastava</div>
                <div className="text-[11.5px] text-slate-500 font-medium leading-[1.35] mt-0.5 italic">
                  "Every student has potential. We make understanding simple and enjoyable."
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 9 Pillars Grid */}
          <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {pillarsData.map((pillar, idx) => (
              <div 
                key={pillar.k} 
                className="rounded-[18px] border-2 border-brand-dark bg-brand-cream p-4 hover:bg-white transition-all duration-150 hover:shadow-neo hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between">
                  <div className="h-7 w-7 rounded-full bg-brand-dark text-white grid place-items-center text-[11px] font-extrabold">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="h-5 w-5 rounded-full border-2 border-brand-dark grid place-items-center text-[10px] text-brand-primary font-extrabold">
                    ✓
                  </div>
                </div>
                <div className="mt-3 text-[14px] font-bold text-brand-dark leading-[1.25]">
                  {pillar.k}
                </div>
                <div className="mt-1.5 text-[12px] leading-[1.55] text-slate-600 font-medium">
                  {pillar.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
