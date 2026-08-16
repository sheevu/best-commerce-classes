import React from 'react';

export default function SocialProof() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] uppercase text-brand-blue mb-2">
              STAY CONNECTED
            </p>
            <h2 className="font-serif text-[34px] sm:text-[44px] leading-[1.08] tracking-tight text-ink-dark">
              See more. Ask more.<br />Learn with confidence.
            </h2>
            <p className="text-ink-muted text-sm sm:text-base mt-3 leading-relaxed">
              Explore formula cheat sheets on Pinterest or check authentic feedback from parents and students across Lucknow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Pinterest Card */}
            <a
              href="https://www.pinterest.com/bestcommerceclass/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-slate-200 bg-brand-cream/60 hover:bg-white hover:border-[#E60023]/40 hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="h-10 w-10 rounded-xl bg-[#E60023]/10 text-[#E60023] font-bold text-lg flex items-center justify-center mb-4">
                  📌
                </span>
                <b className="font-serif text-lg sm:text-xl text-ink-dark group-hover:text-[#E60023] transition-colors block">
                  Explore Learning Updates
                </b>
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Formula cheat-sheets, journal entry infographics, curve diagrams & study pins.
                </p>
              </div>
              <div className="mt-6 text-[#E60023] font-bold text-xs sm:text-sm flex items-center gap-1">
                Follow us on Pinterest →
              </div>
            </a>

            {/* Google Reviews Card */}
            <a
              href="https://g.page/r/CS8Npvtv1En-EBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-slate-200 bg-brand-blueSky/40 hover:bg-white hover:border-brand-blue/40 hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="h-10 w-10 rounded-xl bg-brand-blue/10 text-brand-blue font-bold text-lg flex items-center justify-center mb-4">
                  ⭐
                </span>
                <b className="font-serif text-lg sm:text-xl text-ink-dark group-hover:text-brand-blue transition-colors block">
                  Already learning with us?
                </b>
                <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Share your feedback and experience to help new Commerce students in Indira Nagar.
                </p>
              </div>
              <div className="mt-6 text-brand-blue font-bold text-xs sm:text-sm flex items-center gap-1">
                Share your Google review →
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
