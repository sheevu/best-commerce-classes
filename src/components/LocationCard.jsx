import React from 'react';

export default function LocationCard() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          
          {/* Left Column: Address Details */}
          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] uppercase text-brand-blue mb-2">
              YOUR NEIGHBOURHOOD COMMERCE CENTRE
            </p>
            <h2 className="font-serif text-[36px] sm:text-[48px] leading-[1.05] tracking-tight text-ink-dark">
              Offline classes in the heart of Indira Nagar.
            </h2>
            <p className="text-ink-muted text-sm sm:text-base mt-4 leading-relaxed max-w-xl">
              Convenient for students from Indira Nagar, Munshipulia, Gomti Nagar, Faizabad Road, Mahanagar and nearby Lucknow localities.
            </p>

            {/* Address Box */}
            <div className="mt-6 p-6 rounded-2xl bg-brand-cream border-l-4 border-brand-orange border-y border-r border-amber-200/60">
              <strong className="text-ink-dark font-serif text-lg sm:text-xl block mb-1">
                Commerce Tutorials By Anjali Srivastava
              </strong>
              <address className="not-italic text-sm sm:text-base text-ink-muted leading-relaxed">
                C-717, Near Church Road, Behind Arawali Marg,<br />
                Indira Nagar, Lucknow – 226016
              </address>
              <div className="mt-3 text-xs font-bold text-slate-500">
                ⏰ Timings: Monday – Saturday (4:00 PM – 8:00 PM)
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-bold">
              <a
                href="https://share.google/Kqt2nXAXtfpPjTb58"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-brand-blueDark inline-flex items-center gap-1"
              >
                <span>⭐</span> View Google Business Profile ↗
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="tel:+919838827833"
                className="text-brand-blue hover:text-brand-blueDark inline-flex items-center gap-1"
              >
                <span>📞</span> Call 98388 27833
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map Card */}
          <div>
            <a
              href="https://maps.app.goo.gl/bbXyRwKK7zrQQtcz8"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl bg-brand-blueSky/60 hover:bg-brand-blueSky border border-brand-blue/20 p-8 sm:p-12 text-center transition-all duration-300 hover:shadow-cardHover relative overflow-hidden"
            >
              <div className="text-5xl sm:text-6xl mb-3 transform group-hover:scale-110 transition-transform">
                📍
              </div>
              <b className="font-serif text-2xl sm:text-3xl text-ink-dark block">
                Indira Nagar Center
              </b>
              <small className="text-slate-600 text-sm block mt-1">
                Lucknow · 226016 (Near Church Road)
              </small>
              <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-xs sm:text-sm font-bold shadow-glowBlue group-hover:bg-brand-blueDark transition">
                Open in Google Maps ↗
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
