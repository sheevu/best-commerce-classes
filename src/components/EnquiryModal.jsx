import React, { useState } from 'react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    targetClass: 'Class XII Commerce',
    board: 'CBSE Board'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = "Hi Anjali Ma'am, I want to book a free demo slot for commerce classes.\n\n*Student Name:* " + formData.name + "\n*Phone:* " + formData.phone + "\n*Class:* " + formData.targetClass + "\n*Board:* " + formData.board;
    window.open("https://wa.me/919838827833?text=" + encodeURIComponent(msg), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-brand-navy/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-[460px] w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold text-sm flex items-center justify-center transition"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blueSky text-brand-blue text-[11px] font-bold tracking-wider uppercase mb-2">
          <span>🎯</span> Free 2-Day Trial Demo
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-ink-dark">
          Book Your Free Demo Class
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 leading-relaxed">
          Reserve your trial slot with Anjali Srivastava at C-717, Indira Nagar, Lucknow.
        </p>
        
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-ink-dark block mb-1">
              Student Full Name
            </label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-sm font-medium text-ink-dark focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none" 
            />
          </div>
          
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-ink-dark block mb-1">
              WhatsApp Mobile Number
            </label>
            <input 
              type="tel" 
              required 
              placeholder="e.g. 9838827833"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-sm font-medium text-ink-dark focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none" 
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-ink-dark block mb-1">
                Select Class
              </label>
              <select 
                value={formData.targetClass}
                onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-bold text-ink-dark outline-none"
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
              <label className="text-xs font-bold uppercase tracking-wider text-ink-dark block mb-1">
                Board / Univ
              </label>
              <select 
                value={formData.board}
                onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                className="w-full h-11 px-3 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-bold text-ink-dark outline-none"
              >
                <option value="CBSE Board">CBSE</option>
                <option value="ISC Board">ISC</option>
                <option value="ICSE Board">ICSE</option>
                <option value="UP Board">UP Board</option>
              </select>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-md transition"
          >
            <span>💬</span> Submit Enquiry on WhatsApp
          </button>
          
          <div className="text-xs text-center text-slate-500 font-medium pt-1">
            Indira Nagar Center: C-717 •{' '}
            <a href="tel:+919838827833" className="text-brand-blue font-bold hover:underline">
              Call: +91 98388 27833
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
