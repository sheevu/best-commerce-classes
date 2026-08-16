import React, { useState } from 'react';

const faqsList = [
  {
    q: "Which Commerce subjects are taught at the center?",
    a: "We provide comprehensive coaching for Accountancy, Economics (Microeconomics, Macroeconomics and Statistics), Business Studies, and General Commerce fundamentals for senior secondary and college levels."
  },
  {
    q: "Are Class 11 and Class 12 batches available for CBSE, ICSE & ISC?",
    a: "Yes! We run dedicated offline batches for Class XI and Class XII students across CBSE, ISC, and UP Board curricula with customized syllabus pacing, revision drills and mock exam series."
  },
  {
    q: "What is your typical batch size and why does it matter?",
    a: "We strictly limit our batches to 12–15 students. Unlike crowded lecture halls with 80+ students, small batches ensure Anjali Ma'am personally checks every student's notebook, numerical step-marking and doubts daily."
  },
  {
    q: "Are classes conducted offline or online?",
    a: "Classes are primarily conducted offline in comfortable, air-conditioned classrooms at our center in Indira Nagar, Lucknow (C-717, Near Church Road) to foster direct mentor-student interaction."
  },
  {
    q: "How do you help students who struggle with Accountancy or Economics graphs?",
    a: "We focus on the 'WHY' before the 'HOW'. For Accountancy, we teach double-entry accounting logic rather than rote formulas. For Economics, we draw every curve step-by-step with intuitive real-world examples, backed by 1-on-1 doubt clearing."
  },
  {
    q: "Do you offer demo classes for new admissions?",
    a: "Yes! Prospective students can reserve a complimentary 2-day demo class to experience our concept-first teaching methodology and classroom setting before enrolling."
  },
  {
    q: "Where is the coaching center located in Lucknow?",
    a: "We are located at C-717, Near Church Road, Behind Arawali Marg, Indira Nagar, Lucknow – 226016. Easy access from Munshipulia, Faizabad Road, and Gomti Nagar."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50/80 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-extrabold tracking-[0.18em] uppercase text-brand-blue mb-2">
            COMMON QUESTIONS
          </p>
          <h2 className="font-serif text-[34px] sm:text-[46px] leading-[1.08] tracking-tight text-ink-dark">
            Everything parents and students ask.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Clear answers about batch structures, subject coverage, and admissions at Indira Nagar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqsList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 font-serif font-bold text-base sm:text-lg text-ink-dark hover:text-brand-blue transition-colors focus:outline-none"
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className={`text-xl font-sans font-bold text-brand-blue transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 mt-1">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
