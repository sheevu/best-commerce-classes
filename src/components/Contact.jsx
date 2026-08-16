import React from 'react';

export default function Contact({ onBookDemo }) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-navy text-white text-center relative overflow-hidden">
      {/* Background glow auras */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-blue/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-brand-orange/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-3xl px-4 md:px-8 relative z-10">
        <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-sky-300 mb-3">
          ADMISSIONS & BATCH ENQUIRY
        </p>

        <h2 className="font-serif text-[38px] sm:text-[52px] md:text-[60px] leading-[1.02] tracking-tight text-white">
          Ready to learn Commerce<br />with greater confidence?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg mt-5 max-w-xl mx-auto leading-relaxed">
          Enquire about current batches, evening timings (4:00 PM – 8:00 PM) and admission availability at our Indira Nagar centre.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20admissions%20for%20Commerce%20Batches"
            target="_blank"
            rel="noopener noreferrer"
            className="h-13 px-8 rounded-xl bg-white hover:bg-slate-100 text-brand-blue text-sm sm:text-base font-bold inline-flex items-center gap-2.5 transition shadow-2xl"
          >
            <span>💬</span> Chat on WhatsApp →
          </a>

          <a
            href="tel:+919838827833"
            className="h-13 px-6 rounded-xl border border-white/30 hover:border-white text-white text-sm sm:text-base font-bold inline-flex items-center gap-2 transition"
          >
            <span>📞</span> Call Now: 98388 27833
          </a>

          <button
            onClick={onBookDemo}
            className="h-13 px-7 rounded-xl bg-brand-orange hover:bg-amber-600 text-white text-sm sm:text-base font-bold inline-flex items-center gap-2 transition shadow-glowAmber"
          >
            <span>🎯</span> Book Free Demo
          </button>
        </div>

        <div className="mt-8 text-xs text-slate-400 font-medium">
          Offline Classroom: C-717, Near Church Road, Behind Arawali Marg, Indira Nagar, Lucknow
        </div>
      </div>
    </section>
  );
}
