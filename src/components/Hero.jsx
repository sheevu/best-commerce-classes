import React from 'react';

export default function Hero({ onBookDemo }) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 md:px-8 pt-8 md:pt-12 pb-12">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
        {/* Left Column: Heading and Description */}
        <div className="pt-2">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-brand-dark bg-white px-4 py-1.5 text-[12px] font-bold tracking-wide shadow-neo text-brand-dark">
            <span className="text-brand-primary font-extrabold text-[14px]">✦</span>
            Since 2018 • Indira Nagar, Lucknow • 500+ Board Toppers
          </div>
          
          {/* Main Title */}
          <h1 className="mt-6 font-serif-display leading-[0.95] tracking-[-0.03em] text-[46px] md:text-[66px] text-brand-dark font-normal">
            <span className="block">Top commerce results,</span>
            <span className="block text-brand-primary hand-underline font-normal">on demand.</span>
          </h1>

          {/* Subtitle */}
          <h2 className="mt-6 font-display font-bold text-[16px] md:text-[18px] leading-[1.4] max-w-[540px] text-brand-dark">
            Best Commerce Coaching Institute in Indira Nagar, Lucknow — Where Concepts Become Confidence.
          </h2>

          {/* Main Paragraph */}
          <p className="mt-4 text-[15px] leading-[1.75] text-slate-700 max-w-[540px] font-display font-medium">
            Welcome to <strong>Commerce Tutorials By Anjali Srivastava</strong>. We specialize in Accountancy, Business Studies, Economics & Commerce for CBSE, ICSE, ISC, UP Board, B.Com & CUET with personalized 1-on-1 doubt resolution.
          </p>
          
          {/* Ratings Summary */}
          <div className="mt-5 flex items-center gap-3.5">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div key={s} className="h-8 w-8 rounded-full border-2 border-brand-dark bg-brand-gold grid place-items-center font-bold text-[12px]">
                  ⭐
                </div>
              ))}
            </div>
            <div>
              <div className="font-extrabold text-[13.5px] text-brand-dark">
                ⭐ 4.9/5 Rating from 140+ Parents & Students
              </div>
              <div className="text-slate-500 text-[12px] font-semibold">
                Toppers placed in LSR, Kirori Mal (KMC), Lucknow University & RGNUL
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button 
              onClick={onBookDemo}
              className="h-[50px] px-7 rounded-full bg-brand-dark text-white text-[14px] font-extrabold grid place-items-center hover:bg-brand-primary transition shadow-neoBrand"
            >
              🎯 Book Free Demo Class
            </button>
            <a 
              href="https://wa.me/917022419327?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-[50px] px-7 rounded-full bg-[#25D366] text-white text-[14px] font-extrabold inline-flex items-center gap-2 hover:opacity-90 transition border border-black/20 shadow-neo"
            >
              💬 Enquire on WhatsApp
            </a>
            <a 
              href="tel:+917022419327" 
              className="h-[50px] px-6 rounded-full bg-white border-2 border-brand-dark text-brand-dark text-[14px] font-bold inline-flex items-center gap-2 hover:bg-brand-dark hover:text-white transition shadow-neo"
            >
              📞 Call: +91 70224 19327
            </a>
          </div>

          {/* Brand Links Strip */}
          <div className="mt-5 flex flex-wrap gap-2 text-[12px] font-bold">
            <a 
              href="https://maps.app.goo.gl/bbXyRwKK7zrQQtcz8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 rounded-full bg-white border border-brand-dark/20 text-slate-700 hover:bg-brand-primary hover:text-white hover:border-brand-dark transition inline-flex items-center gap-1.5 shadow-xs"
            >
              📍 Google Maps Location
            </a>
            <a 
              href="mailto:hellocommerceclass@gmail.com" 
              className="px-3.5 py-1.5 rounded-full bg-white border border-brand-dark/20 text-slate-700 hover:bg-brand-primary hover:text-white hover:border-brand-dark transition inline-flex items-center gap-1.5 shadow-xs"
            >
              ✉️ hellocommerceclass@gmail.com
            </a>
            <a 
              href="https://pin.it/56c56anvX" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-1.5 rounded-full bg-[#E60023]/10 border border-[#E60023]/30 text-[#E60023] hover:bg-[#E60023] hover:text-white transition inline-flex items-center gap-1.5 shadow-xs"
            >
              📌 Study Notes on Pinterest
            </a>
            <a 
              href="/Infographics/commerce_tutorials_infographic_spa.html" 
              target="_blank" 
              className="px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-primary hover:bg-brand-primary hover:text-white transition inline-flex items-center gap-1.5 shadow-xs"
            >
              📈 Interactive Performance Infographics (New)
            </a>
          </div>
        </div>

        {/* Right Column: Outdoor Batch Image with Overlay Details */}
        <div className="relative lg:h-[620px] h-[500px] rounded-[32px] overflow-hidden border-2 border-brand-dark bg-brand-dark shadow-neoLarge">
          <img 
            src="/outdoor.png" 
            alt="Anjali Srivastava with Students outside Indira Nagar Coaching" 
            className="w-full h-full object-cover opacity-90" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/55 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
            <div className="inline-flex items-center gap-2 bg-brand-primary text-white px-3.5 py-1.5 rounded-full text-[11.5px] font-extrabold w-max uppercase tracking-wider shadow-sm mb-3">
              Indira Nagar Coaching Center
            </div>
            <h3 className="text-[24px] md:text-[28px] font-bold font-serif-display leading-[1.1] text-white drop-shadow-md">
              Commerce Tutorials By Anjali Srivastava
            </h3>
            <p className="text-[13.5px] text-gray-200 font-medium mt-1.5 max-w-[460px] leading-[1.5]">
              C-717, Near Church Road, Behind Arawali Marg, Indira Nagar, Lucknow — Direct faculty mentoring with AC classrooms and small batch sizes.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[11.5px] font-bold">
              <a 
                href="tel:+917022419327" 
                className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-brand-dark transition"
              >
                📞 +91 70224 19327
              </a>
              <a 
                href="https://maps.app.goo.gl/bbXyRwKK7zrQQtcz8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/40 text-brand-lightGreen hover:bg-brand-lightGreen hover:text-black transition"
              >
                📍 Indira Nagar (Maps)
              </a>
              <a 
                href="mailto:hellocommerceclass@gmail.com" 
                className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/40 text-white hover:bg-white hover:text-brand-dark transition"
              >
                ✉️ Email Us
              </a>
              <span className="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/40 text-brand-gold">
                ⏰ Mon-Sat 4PM - 8PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
