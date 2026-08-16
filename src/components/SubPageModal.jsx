import React from 'react';

export default function SubPageModal({ subPageData, isOpen, onClose, onBookDemo }) {
  if (!isOpen || !subPageData) return null;

  return (
    <div className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-brand-border rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 text-ink-muted font-bold text-base flex items-center justify-center transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blueLight text-brand-blue text-[11px] font-bold tracking-wider uppercase">
          {subPageData.category || 'Academic Overview'}
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink-dark mt-3">
          {subPageData.title}
        </h3>

        {/* Subtitle / Description */}
        <p className="text-ink-muted text-sm sm:text-base mt-2 leading-relaxed">
          {subPageData.description}
        </p>

        {/* Key Highlights / Features */}
        {subPageData.highlights && (
          <div className="mt-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Highlights & Curriculum</h4>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {subPageData.highlights.map((h, i) => (
                <div key={i} className="p-3 bg-brand-cream/60 rounded-xl border border-amber-200/50 flex items-start gap-2.5">
                  <span className="text-brand-orange font-bold text-sm mt-0.5">✓</span>
                  <span className="text-xs sm:text-sm text-ink font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Extra Details Box */}
        {subPageData.details && (
          <div className="mt-6 p-4 rounded-xl bg-brand-blueSky border border-brand-blueLight text-xs sm:text-sm text-ink-muted leading-relaxed">
            <strong className="text-brand-blue block mb-1">Batch Schedule & Mentorship:</strong>
            {subPageData.details}
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-ink-muted">
            📍 C-717, Indira Nagar, Lucknow • <a href="tel:+919838827833" className="text-brand-blue font-bold">+91 98388 27833</a>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <a 
              href={`https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(subPageData.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 hover:opacity-90 transition shadow-sm"
            >
              💬 WhatsApp Query
            </a>
            <button 
              onClick={() => {
                onClose();
                onBookDemo();
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blueDark text-white text-xs sm:text-sm font-bold flex items-center justify-center transition shadow-glowBlue"
            >
              Book Free Trial Slot →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
