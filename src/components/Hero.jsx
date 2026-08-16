import React, { useState } from 'react';

export default function Hero({ onBookDemo }) {
  const [activeInteractiveTab, setActiveInteractiveTab] = useState('formula');
  const [demandShift, setDemandShift] = useState(65); // Slider for economics curve
  const [ledgerCash, setLedgerCash] = useState(150000); // Slider for double entry

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f4faff] via-[#eef8ff] to-[#fff5df] pt-10 pb-16 lg:py-20 border-b border-slate-200" id="top">
      {/* Background Soft Glow Aura */}
      <div className="absolute -top-32 -right-32 w-96 h-96 sm:w-[520px] sm:h-[520px] rounded-full bg-amber-300/30 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-200/40 blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="max-w-2xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[0.16em] uppercase text-brand-blue mb-4">
              <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
              OFFLINE COMMERCE COACHING · INDIRA NAGAR
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[46px] sm:text-[62px] lg:text-[76px] leading-[0.95] tracking-tight text-ink-dark">
              Where concepts become{' '}
              <em className="confidence-italic not-italic font-normal">
                confidence.
              </em>
            </h1>

            {/* Lead Description */}
            <p className="mt-5 text-[17px] sm:text-[20px] leading-[1.6] text-ink-muted font-normal max-w-xl">
              Personalised Commerce coaching in Lucknow for students who want to understand, practise and apply concepts with clarity.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[52px] px-8 rounded-xl bg-brand-blue hover:bg-brand-blueDark text-white text-[15px] font-bold inline-flex items-center gap-2.5 transition shadow-glowBlue"
              >
                <span>Enquire on WhatsApp</span>
                <span className="text-lg">→</span>
              </a>

              <a
                href="https://maps.app.goo.gl/bbXyRwKK7zrQQtcz8"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[52px] px-5 text-[15px] font-bold text-ink-dark hover:text-brand-blue inline-flex items-center gap-1.5 transition underline underline-offset-8 decoration-slate-300 hover:decoration-brand-blue"
              >
                <span>📍</span> Get directions ↗
              </a>

              <button
                onClick={onBookDemo}
                className="h-[52px] px-6 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-ink text-[14.5px] font-bold inline-flex items-center gap-2 transition shadow-card"
              >
                <span>🎯</span> Book Free Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-2.5">
              {['CBSE', 'ICSE', 'ISC', 'UP Board', 'Class XI - XII', 'Since 2018', '500+ Toppers'].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200 text-xs font-bold text-slate-700 shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Animated Motion Graphics Visual */}
          <div className="relative flex items-center justify-center min-h-[480px] lg:min-h-[560px]">
            
            {/* Floating Orb 1 (A+ Top Right) */}
            <div className="animate-orb1 absolute -top-4 right-2 sm:right-6 z-20 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-brand-orange to-amber-500 text-white font-serif font-bold text-2xl sm:text-3xl flex items-center justify-center shadow-glowAmber">
              A+
            </div>

            {/* Floating Orb 2 (₹ Mint Green Bottom Left) */}
            <div className="animate-orb2 absolute -bottom-3 left-0 sm:left-4 z-20 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-brand-mintLight to-emerald-100 border-2 border-emerald-300 text-brand-mint font-serif font-bold text-2xl sm:text-3xl flex items-center justify-center shadow-md">
              ₹
            </div>

            {/* Floating Orb 3 (% White/Blue Top Left) */}
            <div className="animate-orb3 absolute top-12 -left-2 sm:left-2 z-20 h-14 w-14 rounded-full bg-white border border-brand-blueLight text-brand-blue font-serif font-bold text-xl flex items-center justify-center shadow-soft">
              %
            </div>

            {/* Floating Badge (97.6% Topper) */}
            <div className="absolute -bottom-2 right-4 z-20 px-3.5 py-1.5 rounded-full bg-white border border-amber-200 text-[11.5px] font-bold text-amber-900 shadow-md flex items-center gap-1.5 animate-pulseSubtle">
              <span>🏆</span> 97.6% Board Highest
            </div>

            {/* The 3D Notebook Visual Container */}
            <div className="notebook-sheet w-full max-w-[420px] p-6 sm:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Tape Strip */}
              <span className="tape-strip"></span>

              {/* Notebook Header */}
              <div className="mt-2 text-center">
                <p className="font-serif text-[22px] sm:text-[26px] leading-tight text-ink-dark">
                  THE COMMERCE<br />CONFIDENCE<br />
                  <strong className="text-brand-blue text-[28px] sm:text-[34px] font-serif">FORMULA</strong>
                </p>
              </div>

              {/* Interactive Notebook Switcher Tabs */}
              <div className="mt-4 flex gap-1 p-1 bg-slate-100/90 rounded-xl border border-slate-200 text-xs font-bold">
                {[
                  { id: 'formula', label: 'Equation' },
                  { id: 'ledger', label: 'Live T-Account' },
                  { id: 'curves', label: 'Eco Curves' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveInteractiveTab(tab.id)}
                    className={`flex-1 py-1.5 px-2 rounded-lg transition-all text-center ${
                      activeInteractiveTab === tab.id
                        ? 'bg-brand-blue text-white shadow-xs'
                        : 'text-slate-600 hover:text-ink'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab 1: Core Formula Equation */}
              {activeInteractiveTab === 'formula' && (
                <div className="my-5 animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-center gap-2 py-3 bg-white/80 rounded-xl border border-slate-200/80 shadow-xs">
                    <b className="px-3 py-1.5 bg-brand-blueSky text-brand-blue rounded-lg text-xs sm:text-sm font-bold">
                      Understand
                    </b>
                    <i className="text-brand-orange font-bold text-lg not-italic">+</i>
                    <b className="px-3 py-1.5 bg-brand-blueSky text-brand-blue rounded-lg text-xs sm:text-sm font-bold">
                      Practise
                    </b>
                    <i className="text-brand-orange font-bold text-lg not-italic">+</i>
                    <b className="px-3 py-1.5 bg-brand-blueSky text-brand-blue rounded-lg text-xs sm:text-sm font-bold">
                      Apply
                    </b>
                  </div>

                  <div className="mt-4 space-y-2 text-[12px] text-ink-muted">
                    <div className="flex items-center gap-2">
                      <span className="text-brand-mint font-bold">✓</span>
                      <span>Concept clarity before numerical execution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-mint font-bold">✓</span>
                      <span>10-year previous board question decoders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-brand-mint font-bold">✓</span>
                      <span>Individual error tracking on every copy</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Live Double Entry Ledger Balancer */}
              {activeInteractiveTab === 'ledger' && (
                <div className="my-4 p-3.5 bg-white/95 rounded-xl border border-slate-200 shadow-xs animate-in fade-in duration-200">
                  <div className="flex justify-between items-center text-[11px] font-bold text-brand-blue border-b border-slate-100 pb-1.5 mb-2">
                    <span>Double-Entry Balance Balancer</span>
                    <span className="text-brand-mint">● Dr. = Cr. Matched</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-brand-blue font-bold block mb-1">Debit (Dr.)</span>
                      <div className="flex justify-between text-slate-700">
                        <span>Cash A/c:</span>
                        <span className="font-bold">₹{ledgerCash.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-slate-700 mt-0.5">
                        <span>Stock A/c:</span>
                        <span className="font-bold">₹50,000</span>
                      </div>
                    </div>

                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-brand-orange font-bold block mb-1">Credit (Cr.)</span>
                      <div className="flex justify-between text-slate-700">
                        <span>Capital:</span>
                        <span className="font-bold">₹{(ledgerCash + 50000).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-slate-500 text-[9px] mt-0.5">
                        <span>Status:</span>
                        <span className="text-brand-mint font-bold">Balanced ✓</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Slider */}
                  <div className="mt-3">
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold mb-1">
                      <span>Adjust Transaction Volume:</span>
                      <span>₹{ledgerCash.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="50000"
                      max="300000"
                      step="10000"
                      value={ledgerCash}
                      onChange={(e) => setLedgerCash(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                    />
                  </div>
                </div>
              )}

              {/* Tab 3: Interactive Microeconomics Curve */}
              {activeInteractiveTab === 'curves' && (
                <div className="my-4 p-3 bg-white/95 rounded-xl border border-slate-200 shadow-xs animate-in fade-in duration-200">
                  <div className="flex justify-between items-center text-[11px] font-bold text-ink-dark mb-1">
                    <span>Demand Shift & Equilibrium (Pe, Qe)</span>
                    <span className="text-[10px] text-brand-blue font-mono">D1 ➔ D2 ↗</span>
                  </div>

                  <div className="h-28 w-full bg-slate-50 rounded-lg border border-slate-100 p-1 relative">
                    <svg className="w-full h-full" viewBox="0 0 100 80">
                      <line x1="10" y1="5" x2="10" y2="70" stroke="#94a3b8" strokeWidth="0.8" />
                      <line x1="10" y1="70" x2="95" y2="70" stroke="#94a3b8" strokeWidth="0.8" />
                      {/* Supply Curve S */}
                      <path d="M 15 65 Q 50 40 85 15" fill="none" stroke="#ff8a1f" strokeWidth="1.2" />
                      {/* Base Demand D1 */}
                      <path d="M 15 15 Q 50 40 85 65" fill="none" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2" />
                      {/* Dynamic Demand D2 */}
                      <path d={`M ${15 + (demandShift - 50) * 0.4} 15 Q ${50 + (demandShift - 50) * 0.4} 40 ${85 + (demandShift - 50) * 0.4} 65`} fill="none" stroke="#0756d8" strokeWidth="1.5" />
                    </svg>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                    <span>Shift Demand Curve:</span>
                    <input
                      type="range"
                      min="30"
                      max="90"
                      value={demandShift}
                      onChange={(e) => setDemandShift(Number(e.target.value))}
                      className="w-32 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                    />
                  </div>
                </div>
              )}

              {/* Notebook Footer Note */}
              <div className="mt-4 pt-3 border-t border-slate-200 text-center">
                <small className="text-[9.5px] font-extrabold uppercase tracking-widest text-slate-400">
                  PERSONAL ATTENTION · REGULAR TESTS · DOUBT SUPPORT
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
