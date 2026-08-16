import React, { useState } from 'react';

export default function GoogleFormEmbed() {
  const [formMode, setFormMode] = useState('google'); // 'google' | 'whatsapp'
  const [waData, setWaData] = useState({
    name: '',
    phone: '',
    targetClass: 'Class XII Commerce',
    board: 'CBSE Board'
  });

  const handleWaSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Anjali Ma'am, I would like to book a free demo slot for Commerce Classes in Indira Nagar.\n\n*Student Name:* ${waData.name}\n*Phone:* ${waData.phone}\n*Class:* ${waData.targetClass}\n*Board:* ${waData.board}`;
    window.open(`https://wa.me/919838827833?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="admission-form" className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-blueSky/40 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blueSky border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-2">
            <span>📝</span> Student Registration & Free Demo Booking
          </div>
          <h2 className="font-serif text-[34px] sm:text-[44px] leading-tight text-ink-dark">
            Reserve Your Free Demo Seat
          </h2>
          <p className="text-ink-muted text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Fill the official registration form below to reserve your trial class slot or connect directly with Anjali Srivastava.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-6 inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs sm:text-sm font-bold shadow-xs">
            <button
              onClick={() => setFormMode('google')}
              className={`px-5 py-2 rounded-xl transition-all ${
                formMode === 'google'
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'text-slate-600 hover:text-ink'
              }`}
            >
              📝 Google Drive Form (Official)
            </button>
            <button
              onClick={() => setFormMode('whatsapp')}
              className={`px-5 py-2 rounded-xl transition-all ${
                formMode === 'whatsapp'
                  ? 'bg-[#25D366] text-white shadow-sm'
                  : 'text-slate-600 hover:text-ink'
              }`}
            >
              ⚡ Fast WhatsApp Enquiry
            </button>
          </div>
        </div>

        {/* Mode 1: Embedded Google Form */}
        {formMode === 'google' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-3 sm:p-6 overflow-hidden">
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-4 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1.5 text-brand-blue">
                <span>🔒</span> Responses directly recorded in Center Admissions Drive
              </span>
              <a
                href="https://forms.gle/FLt8wns4PLriwqu39"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline flex items-center gap-1"
              >
                Open in Full Tab ↗
              </a>
            </div>

            {/* Responsive Container for Google Form Iframe */}
            <div className="w-full flex justify-center bg-slate-50 rounded-2xl overflow-hidden min-h-[600px] sm:min-h-[750px]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfPIQmjh1F3Dt6GD3TEz9EAwlaIPiVJKaKcBi46IK_c4CHCXA/viewform?embedded=true"
                width="100%"
                height="821"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                className="max-w-2xl w-full border-0"
                title="Commerce Tutorials Student Registration Form"
              >
                Loading Google Form…
              </iframe>
            </div>

            <div className="mt-4 text-center text-xs text-slate-400">
              Need immediate assistance? Call admissions desk at <a href="tel:+919838827833" className="text-brand-blue font-bold">+91 98388 27833</a>
            </div>
          </div>
        )}

        {/* Mode 2: WhatsApp Quick Form */}
        {formMode === 'whatsapp' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 max-w-lg mx-auto">
            <h3 className="font-serif font-bold text-2xl text-ink-dark">
              Instant WhatsApp Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Direct connection with Anjali Ma'am for instant fee and schedule confirmation.
            </p>

            <form onSubmit={handleWaSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Student Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Verma"
                  value={waData.name}
                  onChange={(e) => setWaData({ ...waData, name: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                  Mobile / WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9838827833"
                  value={waData.phone}
                  onChange={(e) => setWaData({ ...waData, phone: e.target.value })}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none text-sm font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Select Class
                  </label>
                  <select
                    value={waData.targetClass}
                    onChange={(e) => setWaData({ ...waData, targetClass: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold text-ink outline-none"
                  >
                    <option value="Class IX">Class IX</option>
                    <option value="Class X">Class X</option>
                    <option value="Class XI Commerce">Class XI</option>
                    <option value="Class XII Commerce">Class XII</option>
                    <option value="B.Com">B.Com</option>
                    <option value="CUET Prep">CUET Prep</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-1">
                    Board / Univ
                  </label>
                  <select
                    value={waData.board}
                    onChange={(e) => setWaData({ ...waData, board: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl border border-slate-300 text-xs sm:text-sm font-bold text-ink outline-none"
                  >
                    <option value="CBSE Board">CBSE</option>
                    <option value="ISC Board">ISC</option>
                    <option value="ICSE Board">ICSE</option>
                    <option value="UP Board">UP Board</option>
                    <option value="Lucknow Univ">Lucknow Univ</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 transition shadow-md"
              >
                <span>💬</span> Submit via WhatsApp →
              </button>

              <div className="text-center text-[11px] text-slate-400 font-medium">
                Direct faculty line: <a href="tel:+919838827833" className="text-brand-blue font-bold">+91 98388 27833</a>
              </div>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
