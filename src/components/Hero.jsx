import React, { useState, useEffect } from 'react';

// Interactive Dashboard Subcomponent for Hero Section
function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState('ledger');

  // Auto loop through tabs every 5 seconds
  useEffect(() => {
    const tabs = ['ledger', 'economics', 'results'];
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const nextIdx = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIdx];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-dark rounded-[32px] border-2 border-brand-dark p-6 text-white shadow-neoLarge relative overflow-hidden flex flex-col justify-between h-[560px] lg:h-[620px]">
      {/* Visual background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-[12px] font-bold tracking-widest uppercase text-brand-primary">
              Interactive Learning Lab
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">Classroom: C-717, Indira Nagar</span>
        </div>

        {/* Dynamic Concept Selector */}
        <div className="mt-4 flex gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
          {[
            { id: 'ledger', label: '📊 Ledger Balances', desc: 'Accounting Double Entry' },
            { id: 'economics', label: '📈 Eco Curves', desc: 'Demand/Supply Equilibrium' },
            { id: 'results', label: '🏆 Result Elevators', desc: 'Concept Score Gains' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-1 text-center rounded-lg transition-all duration-200 focus:outline-none ${
                activeTab === tab.id
                  ? 'bg-brand-primary text-white shadow-md font-bold'
                  : 'text-slate-400 hover:text-white text-[12px]'
              }`}
            >
              <div className="text-[11.5px] md:text-[12.5px]">{tab.label}</div>
              <div className="text-[8.5px] opacity-60 hidden md:block mt-0.5">{tab.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content Panel */}
      <div className="flex-1 mt-6 flex items-center justify-center relative z-10">
        {activeTab === 'ledger' && (
          <div className="w-full max-w-[460px] bg-slate-900/60 border border-white/10 rounded-2xl p-4 shadow-inner animate-fadeIn">
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
              <span className="text-[13px] font-bold text-brand-primary">T-Account Ledger (Double Entry)</span>
              <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 font-mono rounded">Active</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 border-2 border-white/20 rounded-xl overflow-hidden text-center bg-black/40">
              <div className="p-3 border-r border-white/20">
                <div className="font-extrabold text-[12px] uppercase text-brand-lightGreen border-b border-white/10 pb-1 mb-2">Debit (Dr.)</div>
                <div className="space-y-1.5 text-[11px] font-mono">
                  <div className="flex justify-between text-green-300">
                    <span>Cash A/c</span>
                    <span>₹1,50,000</span>
                  </div>
                  <div className="flex justify-between text-green-300">
                    <span>Bank A/c</span>
                    <span>₹50,000</span>
                  </div>
                  <div className="flex justify-between text-green-300">
                    <span>Machinery A/c</span>
                    <span>₹80,000</span>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="font-extrabold text-[12px] uppercase text-red-300 border-b border-white/10 pb-1 mb-2">Credit (Cr.)</div>
                <div className="space-y-1.5 text-[11px] font-mono">
                  <div className="flex justify-between text-slate-300">
                    <span>Capital A/c</span>
                    <span>₹2,00,000</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Loan A/c</span>
                    <span>₹80,000</span>
                  </div>
                  <div className="text-slate-500 italic text-[9px] pt-1">No mismatched entries</div>
                </div>
              </div>
            </div>

            {/* Balancing Verification Banner */}
            <div className="mt-4 p-3 bg-brand-primary/10 border-2 border-brand-primary rounded-xl flex items-center justify-between animate-pulse">
              <div className="flex items-center gap-2">
                <span className="text-brand-primary text-[16px]">✓</span>
                <span className="text-[11.5px] font-bold text-white">Trial Balance Matches:</span>
              </div>
              <span className="font-mono font-bold text-brand-primary text-[12px]">Dr. = Cr. = ₹2,80,000</span>
            </div>
          </div>
        )}

        {activeTab === 'economics' && (
          <div className="w-full max-w-[460px] bg-slate-900/60 border border-white/10 rounded-2xl p-4 shadow-inner animate-fadeIn">
            <div className="flex items-center justify-between mb-2 border-b border-white/10 pb-2">
              <span className="text-[13px] font-bold text-brand-gold">Microeconomics: Demand-Supply Shift</span>
              <span className="text-[10px] px-2 py-0.5 bg-yellow-500/20 text-brand-gold font-mono rounded">Interactive</span>
            </div>

            {/* SVG Interactive Chart Curve */}
            <div className="relative h-[220px] w-full bg-black/40 border border-white/10 rounded-xl p-2">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Axes */}
                <line x1="10" y1="10" x2="10" y2="90" stroke="white" strokeWidth="0.8" />
                <line x1="10" y1="90" x2="95" y2="90" stroke="white" strokeWidth="0.8" />
                <text x="5" y="15" fill="#94a3b8" fontSize="4.5" textAnchor="middle">P</text>
                <text x="92" y="96" fill="#94a3b8" fontSize="4.5" textAnchor="middle">Q</text>

                {/* Supply Curve (S) */}
                <path d="M 15 80 Q 50 50 85 20" fill="none" stroke="#f59e0b" strokeWidth="1" />
                <text x="88" y="22" fill="#f59e0b" fontSize="4">S</text>

                {/* Demand Curve 1 (D1) */}
                <path d="M 15 20 Q 50 50 85 80" fill="none" stroke="#64748b" strokeWidth="0.8" strokeDasharray="1" />
                <text x="88" y="78" fill="#64748b" fontSize="3.5">D1</text>

                {/* Demand Curve 2 (D2) Shifting Right */}
                <path className="animate-pulse" d="M 30 20 Q 65 50 90 70" fill="none" stroke="#0e9a8b" strokeWidth="1.2" />
                <text x="93" y="68" fill="#0e9a8b" fontSize="4" fontWeight="bold">D2 ↗</text>

                {/* Equilibrium point dots & lines */}
                {/* D2 & S Intersection ~ (55, 41) */}
                <circle cx="55" cy="41" r="1.5" fill="#10b981" />
                <line x1="10" y1="41" x2="55" y2="41" stroke="#10b981" strokeWidth="0.5" strokeDasharray="1" />
                <line x1="55" y1="41" x2="55" y2="90" stroke="#10b981" strokeWidth="0.5" strokeDasharray="1" />
                <text x="6" y="42.5" fill="#10b981" fontSize="3.5">Pe'</text>
                <text x="55" y="95" fill="#10b981" fontSize="3.5" textAnchor="middle">Qe'</text>
              </svg>
            </div>
            
            <p className="mt-2 text-center text-[10.5px] text-slate-300 font-medium">
              Concept: When Demand rises (D1 ➔ D2), Equilibrium Price and Quantity shift upwards.
            </p>
          </div>
        )}

        {activeTab === 'results' && (
          <div className="w-full max-w-[460px] bg-slate-900/60 border border-white/10 rounded-2xl p-4 shadow-inner animate-fadeIn">
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
              <span className="text-[13px] font-bold text-brand-primary">Student Board Mark Gains</span>
              <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 font-mono rounded">Annual</span>
            </div>

            <div className="space-y-3">
              {/* Topper 1 */}
              <div>
                <div className="flex justify-between text-[11px] font-bold text-slate-300 mb-1">
                  <span>Tuhina Prasad (CBSE Boards)</span>
                  <span className="text-brand-primary font-bold">97.6% (LSR DU Cutoff)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-primary h-full rounded-full transition-all duration-1000" style={{ width: '97.6%' }} />
                </div>
              </div>

              {/* Topper 2 */}
              <div>
                <div className="flex justify-between text-[11px] font-bold text-slate-300 mb-1">
                  <span>Srishti Singh (ISC Boards)</span>
                  <span className="text-brand-primary font-bold">96.5% (Kirori Mal DU)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-primary h-full rounded-full transition-all duration-1000" style={{ width: '96.5%' }} />
                </div>
              </div>

              {/* Average improvement */}
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl mt-3 flex items-center justify-between text-[11.5px] font-bold">
                <span className="text-slate-300">Average Student Marks Boost:</span>
                <span className="text-brand-gold font-extrabold text-[12.5px]">+32% Average Increase</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer / Call to Action */}
      <div className="relative z-10 border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-300">
        <div className="text-center md:text-left">
          <div className="text-[12.5px] font-bold text-white">Admissions Open 2026-27</div>
          <p className="text-[10px] text-slate-400 mt-0.5">Where concepts become board topper confidence.</p>
        </div>
        <a
          href="https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-brand-primary hover:bg-brand-primary/95 text-white font-extrabold rounded-full border-2 border-brand-dark shadow-neo text-[12px] whitespace-nowrap"
        >
          💬 Chat Live for Details
        </a>
      </div>
    </div>
  );
}

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
              href="https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="h-[50px] px-7 rounded-full bg-[#25D366] text-white text-[14px] font-extrabold inline-flex items-center gap-2 hover:opacity-90 transition border border-black/20 shadow-neo"
            >
              💬 Enquire on WhatsApp
            </a>
            <a 
              href="tel:+919838827833" 
              className="h-[50px] px-6 rounded-full bg-white border-2 border-brand-dark text-brand-dark text-[14px] font-bold inline-flex items-center gap-2 hover:bg-brand-dark hover:text-white transition shadow-neo"
            >
              📞 Call: +91 98388 27833
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
              href="https://www.pinterest.com/bestcommerceclass/" 
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

        {/* Right Column: Interactive Dashboard visual replacing static building photo */}
        <InteractiveDashboard />
      </div>
    </section>
  );
}
