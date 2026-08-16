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
    
    // Correct phone number: 7022419327
    window.open("https://wa.me/917022419327?text=" + encodeURIComponent(msg), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-brand-dark/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-brand-cream border-2 border-brand-dark rounded-[24px] p-6 max-w-[440px] w-full shadow-neoLarge relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 rounded-full border-2 border-brand-dark bg-white font-bold text-[14px] grid place-items-center hover:bg-brand-dark hover:text-white transition-colors duration-150"
        >
          ✕
        </button>

        <h3 className="text-[24px] font-bold font-serif-display text-brand-dark">
          Book Your Free Demo Class
        </h3>
        <p className="text-[12.5px] text-slate-500 font-semibold mt-1">
          Enter your details to reserve your trial slot with Anjali Srivastava in Indira Nagar.
        </p>
        
        <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
          <div>
            <label className="text-[11.5px] font-extrabold uppercase tracking-wider text-brand-dark block mb-1">
              Student Name
            </label>
            <input 
              type="text" 
              required 
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-11 px-3.5 rounded-[12px] border-2 border-black/25 bg-white text-[13.5px] font-medium text-brand-dark focus:border-brand-primary focus:outline-none" 
            />
          </div>
          
          <div>
            <label className="text-[11.5px] font-extrabold uppercase tracking-wider text-brand-dark block mb-1">
              WhatsApp Mobile Number
            </label>
            <input 
              type="tel" 
              required 
              placeholder="e.g. 7022419327"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full h-11 px-3.5 rounded-[12px] border-2 border-black/25 bg-white text-[13.5px] font-medium text-brand-dark focus:border-brand-primary focus:outline-none" 
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11.5px] font-extrabold uppercase tracking-wider text-brand-dark block mb-1">
                Select Class
              </label>
              <select 
                value={formData.targetClass}
                onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                className="w-full h-11 px-3 rounded-[12px] border-2 border-black/25 bg-white text-[13px] font-bold text-brand-dark focus:outline-none"
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
              <label className="text-[11.5px] font-extrabold uppercase tracking-wider text-brand-dark block mb-1">
                Board / Univ
              </label>
              <select 
                value={formData.board}
                onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                className="w-full h-11 px-3 rounded-[12px] border-2 border-black/25 bg-white text-[13px] font-bold text-brand-dark focus:outline-none"
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
            className="mt-2 w-full h-12 rounded-[14px] bg-[#25D366] text-white text-[14px] font-extrabold hover:opacity-90 transition duration-150 grid place-items-center shadow-neo border border-black/20"
          >
            💬 Submit Enquiry on WhatsApp
          </button>
          
          <div className="text-[11.5px] text-center text-slate-500 font-bold pt-1">
            Center: C-717, Indira Nagar, Lucknow •{' '}
            <a href="tel:+917022419327" className="underline text-brand-dark">
              Call: +91 70224 19327
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
