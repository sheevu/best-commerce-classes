import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    targetClass: 'Class XII Commerce',
    board: 'CBSE Board'
  });

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const msg = "Hi Anjali Ma'am, I am interested in Commerce Coaching at Indira Nagar.\n\n*Student Name:* " + formData.name + "\n*Phone:* " + formData.phone + "\n*Class:* " + formData.targetClass + "\n*Board:* " + formData.board;
    
    // Correct phone number: 7022419327
    window.open("https://wa.me/917022419327?text=" + encodeURIComponent(msg), '_blank');
  };

  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-6 md:px-8 pb-16 pt-8">
      <div className="rounded-[28px] border-2 border-brand-dark bg-brand-dark text-white p-6 md:p-10 shadow-neoLarge relative overflow-hidden">
        {/* Ribbon decoration at the top */}
        <div className="absolute top-0 left-0 right-0 h-[6px] bg-gradient-to-r from-brand-lightGreen via-[#C7E8FF] to-[#FEF3C7]" />
        
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          {/* Left Column: Contact Cards */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3.5 py-1 text-[11.5px] font-extrabold tracking-widest uppercase bg-white/10 text-brand-lightGreen">
              Admissions Open 2026-27
            </div>
            <h2 className="mt-4 font-serif-display text-[36px] md:text-[50px] leading-[0.95] text-white">
              Get in Touch with Commerce Tutorials
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.75] text-slate-300 max-w-[560px] font-normal">
              Lucknow's trusted offline commerce coaching at Indira Nagar. AC classrooms, small batches, concept-first teaching, parent updates, and proven board results. Personal mentorship by Anjali Srivastava.
            </p>
            
            {/* Contact Details Grid */}
            <div className="mt-6 grid sm:grid-cols-2 gap-3.5 text-[13px]">
              {/* Address */}
              <div className="rounded-[16px] bg-white/10 border border-white/20 p-4 hover:bg-white/15 transition duration-150">
                <div className="text-brand-lightGreen text-[11px] uppercase tracking-widest font-extrabold">
                  📍 Institute Address
                </div>
                <div className="mt-1.5 font-semibold text-white leading-[1.45]">
                  C-717, Near Church Road, Behind Arawali Marg, Indira Nagar, Lucknow – 226016
                </div>
                <a 
                  href="https://maps.app.goo.gl/bbXyRwKK7zrQQtcz8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block mt-2 text-[12px] font-bold text-brand-lightGreen underline hover:text-white"
                >
                  Open in Google Maps →
                </a>
              </div>
              
              {/* Call & Timings */}
              <div className="rounded-[16px] bg-white/10 border border-white/20 p-4 hover:bg-white/15 transition duration-150">
                <div className="text-brand-lightGreen text-[11px] uppercase tracking-widest font-extrabold">
                  📞 Call & WhatsApp
                </div>
                <div className="mt-1.5 font-bold text-white leading-[1.5]">
                  <a href="tel:+917022419327" className="hover:text-brand-lightGreen block text-[15px]">
                    +91 70224 19327
                  </a>
                  <div className="text-[12px] text-slate-300 font-normal mt-1">
                    ⏰ Mon - Sat: 4:00 PM - 8:00 PM
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="rounded-[16px] bg-white/10 border border-white/20 p-4 hover:bg-white/15 transition duration-150">
                <div className="text-brand-lightGreen text-[11px] uppercase tracking-widest font-extrabold">
                  ✉️ Official Email
                </div>
                <a 
                  href="mailto:hellocommerceclass@gmail.com" 
                  className="mt-1.5 font-bold text-white block hover:text-brand-lightGreen underline break-all"
                >
                  hellocommerceclass@gmail.com
                </a>
                <div className="text-[11.5px] text-slate-300 mt-1">
                  Quick response for admissions & queries
                </div>
              </div>
              
              {/* Pinterest */}
              <div className="rounded-[16px] bg-white/10 border border-white/20 p-4 hover:bg-white/15 transition duration-150">
                <div className="text-brand-lightGreen text-[11px] uppercase tracking-widest font-extrabold">
                  📌 Pinterest & Study Notes
                </div>
                <a 
                  href="https://pin.it/56c56anvX" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-1.5 font-bold text-[#FDA4AF] block hover:underline"
                >
                  pinterest.com/pin/56c56anvX
                </a>
                <div className="text-[11.5px] text-slate-300 mt-1">
                  Commerce infographics, formula sheets & tips
                </div>
              </div>
            </div>

            {/* Quick Action Buttons strip */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a 
                href="tel:+917022419327" 
                className="h-11 px-6 rounded-full bg-brand-lightGreen text-green-950 text-[13px] font-extrabold inline-flex items-center gap-2 hover:bg-white hover:text-brand-dark transition shadow-xs"
              >
                📞 Call: +91 70224 19327
              </a>
              <a 
                href="https://wa.me/917022419327?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-11 px-6 rounded-full bg-[#25D366] text-white text-[13px] font-extrabold inline-flex items-center gap-2 hover:opacity-90 transition border border-black/10 shadow-xs"
              >
                💬 WhatsApp Us
              </a>
              <a 
                href="https://maps.app.goo.gl/bbXyRwKK7zrQQtcz8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-11 px-5 rounded-full border border-white/30 text-white text-[13px] font-bold inline-flex items-center hover:bg-white hover:text-brand-dark transition shadow-xs"
              >
                📍 Directions Map
              </a>
              <a 
                href="mailto:hellocommerceclass@gmail.com" 
                className="h-11 px-5 rounded-full border border-white/30 text-white text-[13px] font-bold inline-flex items-center hover:bg-white hover:text-brand-dark transition shadow-xs"
              >
                ✉️ Email Us
              </a>
            </div>
          </div>

          {/* Right Column: Demo Form Box */}
          <div className="bg-white rounded-[24px] p-6 border-2 border-brand-dark text-brand-dark shadow-neoLarge">
            <div className="text-[20px] font-extrabold font-serif-display text-brand-dark">
              Book Free Demo Class
            </div>
            <p className="text-[12.5px] text-slate-500 font-semibold mt-1">
              Experience concept-first teaching with Anjali Ma'am. Zero fees, zero pressure.
            </p>
            
            <form onSubmit={handleEnquirySubmit} className="mt-4 space-y-3">
              <input 
                type="text" 
                required 
                placeholder="Student Full Name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-11 px-3.5 rounded-[12px] border-2 border-black/25 bg-white text-[13.5px] font-medium text-brand-dark focus:border-brand-primary focus:outline-none" 
              />
              <input 
                type="tel" 
                required 
                placeholder="Mobile / WhatsApp Number" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full h-11 px-3.5 rounded-[12px] border-2 border-black/25 bg-white text-[13.5px] font-medium text-brand-dark focus:border-brand-primary focus:outline-none" 
              />
              <div className="grid grid-cols-2 gap-2">
                <select 
                  value={formData.targetClass} 
                  onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                  className="h-11 px-2.5 rounded-[12px] border-2 border-black/25 bg-white text-[12.5px] font-bold text-brand-dark focus:outline-none"
                >
                  <option value="Class IX">Class IX</option>
                  <option value="Class X">Class X</option>
                  <option value="Class XI Commerce">Class XI Commerce</option>
                  <option value="Class XII Commerce">Class XII Commerce</option>
                  <option value="B.Com">B.Com</option>
                  <option value="CUET Prep">CUET Prep</option>
                </select>
                <select 
                  value={formData.board} 
                  onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                  className="h-11 px-2.5 rounded-[12px] border-2 border-black/25 bg-white text-[12.5px] font-bold text-brand-dark focus:outline-none"
                >
                  <option value="CBSE Board">CBSE Board</option>
                  <option value="ISC Board">ISC Board</option>
                  <option value="ICSE Board">ICSE Board</option>
                  <option value="UP Board">UP Board</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="w-full h-12 rounded-[14px] bg-brand-dark text-white text-[14px] font-extrabold hover:bg-brand-primary transition grid place-items-center shadow-neoBrand border border-black/20"
              >
                Submit Enquiry via WhatsApp →
              </button>
              <p className="text-[11px] text-center text-slate-500 font-bold mt-1.5">
                Direct faculty support: +91 70224 19327 • Indira Nagar, Lucknow
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
