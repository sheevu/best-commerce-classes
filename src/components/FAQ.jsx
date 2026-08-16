import React, { useState } from 'react';

const faqsList = [
  {
    q: "What makes Commerce Tutorials By Anjali Srivastava unique in Indira Nagar?",
    a: "Unlike large coaching factories with 80–100 students per hall, we strictly limit our batches to 12–15 students. Led by Anjali Srivastava with over 8 years of teaching expertise, we focus on concept clarity ('Why' before 'How'), 1-on-1 doubt resolution, personalized performance tracking, and a supportive AC classroom environment."
  },
  {
    q: "Which classes and educational boards do you cover?",
    a: "We offer comprehensive coaching for Class IX, X, XI, and XII across CBSE, ICSE, and ISC boards. We also provide specialized academic assistance and university exam preparation for B.Com undergraduates."
  },
  {
    q: "Which core commerce subjects are taught at the center?",
    a: "We specialize in core commerce subjects: Accountancy, Business Studies, Economics (Microeconomics, Macroeconomics, and Statistics), and General Commerce fundamentals."
  },
  {
    q: "How do you support students who are weak in Accountancy or Economics?",
    a: "We rebuild fundamentals from the ground up. For Accountancy, we focus on accounting logic, journal entry rules, and balance sheet practice. For Economics, we simplify numerical and graphical models. Combined with individual doubt-solving and daily practice sheets, we turn weak areas into high-scoring strengths."
  },
  {
    q: "What is your typical batch size and classroom setting?",
    a: "We maintain small batch sizes capped at 12–15 students to ensure direct faculty-student interaction. All classes are conducted offline in comfortable, air-conditioned classrooms at our Indira Nagar center."
  },
  {
    q: "How often are tests and evaluations conducted?",
    a: "Evaluation is continuous. We conduct weekly chapter tests, monthly unit assessments, and full-length board pattern pre-board examinations with detailed paper correction and constructive feedback."
  },
  {
    q: "Do parents receive regular updates regarding student progress?",
    a: "Yes! We believe parent-teacher collaboration is key to student success. We share weekly performance analysis reports and organize periodic parent interaction sessions to review academic progress and attendance."
  },
  {
    q: "Do you assist with competitive exams like CUET and career guidance after Class 12?",
    a: "Absolutely. Beyond board exams, we provide dedicated CUET strategy guidance, career counselling for professional pathways like CA, CS, CMA, and BBA, and help students with university application planning."
  },
  {
    q: "Are demo classes available for new students?",
    a: "Yes, prospective students can attend a complimentary demo class to experience our teaching methodology, batch environment, and personalized attention before enrolling."
  },
  {
    q: "Where is the center located and how can we contact you?",
    a: "We are located at C-717, Near Church Road, Behind Arawali Marg, Indira Nagar, Lucknow – 226016 (easily accessible from Munshipulia, Gomti Nagar, and Faizabad Road). You can reach us directly via Call or WhatsApp at +91 98388 27833."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="mx-auto max-w-[1280px] px-6 md:px-8 py-12 md:py-16">
      <div className="mb-8">
        <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
          Quick Reference
        </span>
        <h3 className="text-3xl font-serif-display text-brand-dark mt-1">
          Frequently Asked Questions (FAQs)
        </h3>
        <p className="text-slate-600 text-sm mt-2">
          Everything parents and prospective students need to know about our batch structure, subject coverage, and teaching methodology in Indira Nagar, Lucknow.
        </p>
      </div>

      <div className="space-y-4 max-w-4xl">
        {faqsList.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="bg-white border-2 border-brand-dark rounded-xl p-4 transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center text-left font-bold text-brand-dark text-sm sm:text-base focus:outline-none"
              >
                <span>{`Q${idx + 1}: ${faq.q}`}</span>
                <span className={`text-brand-primary font-bold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {isOpen && (
                <p className="text-xs sm:text-sm text-slate-600 mt-3 border-t border-brand-dark/10 pt-3 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
