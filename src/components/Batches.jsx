import React, { useState } from 'react';

const batchesData = [
  {id:"ALL",label:"All Classes",title:"Complete Commerce Learning",desc:"Comprehensive offline coaching for Class IX, X, XI, XII, B.Com and CUET. Small batches, personal attention, and concept-first mentoring.",tags:["CBSE","ICSE","ISC","UP Board","B.Com","CUET"]},
  {id:"IX-X",label:"Class IX & X",title:"Foundation Commerce & Economics",desc:"Build early concepts in Commercial Studies and Economics. Chapter-wise tests and answer writing practice to build speed, accuracy and presentation.",tags:["Commercial Studies","Economics","Class IX","Class X","CBSE / ICSE"]},
  {id:"XI",label:"Class XI Commerce",title:"Class XI Commerce Mastery",desc:"Turn Commerce concepts into solid fundamentals. Accountancy numerics, Business Studies concepts, and Economics theories simplified with practical examples.",tags:["Accountancy","Business Studies","Economics","Commerce"]},
  {id:"XII",label:"Class XII Boards",title:"Class XII Board Toppers Batch",desc:"Full syllabus completion + 3 rounds of revision + 10-year PYQs + Pre-board mock series. Dedicated 1-on-1 doubt solving till exam day.",tags:["Board Mastery","PYQ Marathon","1-on-1 Doubts","Pre-Board Series"]},
  {id:"BCOM",label:"B.Com & Higher Ed",title:"B.Com (1st, 2nd, 3rd Year)",desc:"University-level depth made simple. Financial Accounting, Corporate Law, Business Statistics, Income Tax & Auditing for LU and top universities.",tags:["Financial Acc","Corporate Law","Taxation","Auditing"]},
  {id:"CUET",label:"CUET Entrance Prep",title:"CUET Commerce Domain Prep",desc:"Strategic preparation for NTA CUET-UG. Commerce domain subjects + English + General Test practice mapped with top college cutoffs.",tags:["NTA Pattern","Mock Tests","Speed Drills","DU Cutoff Mapping"]}
];

export default function Batches({ onBookDemo }) {
  const [batchId, setBatchId] = useState("XI");

  const currentBatch = batchesData.find(b => b.id === batchId) || batchesData[0];

  return (
    <section id="batches" className="mx-auto max-w-[1280px] px-6 md:px-8 py-12 bg-white/70 border-y-2 border-brand-dark/10">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <h2 className="font-serif-display text-[38px] md:text-[54px] leading-[0.95] tracking-[-0.02em] max-w-[520px] text-brand-dark">
          Choose Your <span className="text-brand-primary">Perfect</span> Commerce Batch
        </h2>
        <p className="text-[15px] leading-[1.65] text-slate-600 max-w-[400px] font-display font-medium">
          Small batch size of 12-15 students ensures individual graph tracking for every student.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {batchesData.map((t) => (
          <button 
            key={t.id} 
            onClick={() => setBatchId(t.id)} 
            className={`h-10 px-5 rounded-full border-2 text-[13.5px] font-bold transition-all duration-150 ${
              batchId === t.id 
                ? "bg-brand-dark text-white border-brand-dark shadow-neo" 
                : "bg-white border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Batch Cards Content */}
      <div className="mt-6 grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        {/* Main Details Card */}
        <div className="bg-white border-2 border-brand-dark rounded-[24px] p-6 md:p-8 shadow-neoLarge relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-[11.5px] font-extrabold tracking-widest uppercase text-brand-primary">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-primary"></span> 
              Admissions Open 2026-27
            </div>
            <h3 className="mt-3 font-serif-display text-[30px] md:text-[38px] leading-[1] tracking-tight text-brand-dark">
              {currentBatch.title}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.75] text-slate-700 max-w-[540px] font-display font-medium">
              {currentBatch.desc}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {currentBatch.tags.map((t) => (
                <span 
                  key={t} 
                  className="px-3.5 py-1.5 rounded-full border-2 border-brand-dark bg-brand-cream text-[12.5px] font-bold text-brand-dark shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-brand-dark/10 flex items-center justify-between flex-wrap gap-4">
            <div className="leading-[1.2]">
              <div className="text-[12px] text-slate-500 font-bold uppercase tracking-wider">
                Batch Size & Timings
              </div>
              <div className="text-[14.5px] font-extrabold text-brand-dark mt-0.5">
                12-15 Students Max • Offline AC Room • 4:00 PM - 8:00 PM
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={onBookDemo} 
                className="h-10 px-5 rounded-full bg-brand-dark text-white text-[13px] font-extrabold grid place-items-center hover:bg-brand-primary transition shadow-xs"
              >
                Enroll / Book Demo
              </button>
              <a 
                href={`https://wa.me/917022419327?text=Hi%20Anjali%20Ma'am,%20I%20want%20details%20for%20${encodeURIComponent(currentBatch.title)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 px-4 rounded-full bg-[#25D366] text-white text-[13px] font-extrabold inline-flex items-center gap-1.5 hover:opacity-90 transition border border-black/20 shadow-xs"
              >
                💬 Details
              </a>
            </div>
          </div>
        </div>

        {/* Side Callout Card */}
        <div className="bg-brand-dark rounded-[24px] border-2 border-brand-dark p-6 text-white shadow-neoLarge flex flex-col justify-between">
          <div>
            <div className="text-[11.5px] uppercase tracking-widest font-extrabold text-brand-primary">
              Why Small Batches Matter
            </div>
            <h4 className="mt-2 font-serif-display text-[28px] leading-[1.1] text-white">
              Personal Attention on Every Student
            </h4>
            <p className="mt-3 text-[13.5px] text-slate-300 leading-[1.65] font-normal">
              No crowded halls of 100+ students. We limit batches to 12-15 so Anjali Ma'am personally checks every student's notebook, numerical errors, and board presentation.
            </p>
          </div>
          <div className="mt-6 bg-white/10 rounded-[16px] p-4 border border-white/20">
            <div className="text-[13px] font-bold text-brand-lightGreen">
              ✨ Free 2-Day Trial Demo
            </div>
            <div className="text-[12px] text-slate-200 mt-1 leading-[1.4]">
              Attend class, experience the concept clarity method, then decide.
            </div>
            <button 
              onClick={onBookDemo}
              className="mt-3 w-full h-9 rounded-full bg-white text-brand-dark text-[12.5px] font-extrabold grid place-items-center hover:bg-brand-lightGreen hover:text-brand-dark transition shadow-xs"
            >
              Reserve Demo Slot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
