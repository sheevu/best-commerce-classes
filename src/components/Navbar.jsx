import React, { useState, useEffect } from 'react';

export default function Navbar({ onBookDemo, onSelectSubPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState(null);

  // Close dropdown on outside click or scroll
  useEffect(() => {
    const handleScroll = () => setActiveDropdown(null);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navSections = [
    {
      id: 'classes',
      label: 'Classes',
      href: '#classes',
      subpages: [
        {
          id: 'ix-x',
          category: 'Learning Pathways',
          title: 'Class IX & X Commerce Foundation',
          desc: 'Early financial awareness, disciplined study habits & basic economics concepts.',
          highlights: ['Commercial Studies & Economics', 'CBSE / ICSE Syllabus coverage', 'Speed & Presentation Drills', 'Concept-first learning method']
        },
        {
          id: 'xi',
          category: 'Senior Secondary',
          title: 'Class XI Commerce Mastery',
          desc: 'Accountancy double-entry, Business Studies & Economics theories simplified.',
          highlights: ['T-Account Ledger rules', 'Microeconomics & Statistics', 'Real business invoices & GST case studies', 'Daily 10-min active recall']
        },
        {
          id: 'xii',
          category: 'Board Examination',
          title: 'Class XII Board Toppers Batch',
          desc: 'Full syllabus completion + 3 revision rounds + 10-year PYQ decoders.',
          highlights: ['Board step-marking techniques', 'Weekly full-length mock tests', 'Dedicated 1-on-1 doubt solving', 'Personal answer copy correction']
        },
        {
          id: 'bcom',
          category: 'Higher Education',
          title: 'B.Com & College Support',
          desc: 'Financial Accounting, Corporate Law, Business Statistics, Taxation & Auditing.',
          highlights: ['Lucknow University (LU) syllabus aligned', 'Deep numerical clarity', 'Semester exam question banks', 'Flexible evening schedules']
        },
        {
          id: 'cuet',
          category: 'University Entrance',
          title: 'CUET Commerce Domain Prep',
          desc: 'Strategic preparation for NTA CUET-UG mapped with Delhi University cutoffs.',
          highlights: ['NTA Pattern Mock Tests', 'Commerce Domain + General Test', 'Speed numerical solving', 'DU Top College cutoffs strategy']
        }
      ]
    },
    {
      id: 'subjects',
      label: 'Subjects',
      href: '#subjects',
      subpages: [
        {
          id: 'accounts',
          category: 'Subject Expertise',
          title: 'Accountancy Mastery',
          desc: 'Learn the WHY behind every journal entry, trial balance and balance sheet item.',
          highlights: ['Double-Entry fundamentals', 'Partnership, Company & Cash Flow', 'Numerical error zeroing', 'Neat ledger formatting for full marks']
        },
        {
          id: 'economics',
          category: 'Subject Expertise',
          title: 'Economics & Graphical Curves',
          desc: 'Microeconomics, Macroeconomics and Statistics with intuitive graphs and live examples.',
          highlights: ['Demand-Supply & Elasticity', 'National Income accounting simplified', 'Money, Banking & Government Budget', 'Graphical drawing shortcuts']
        },
        {
          id: 'bst',
          category: 'Subject Expertise',
          title: 'Business Studies & Case Studies',
          desc: 'Master real business management case studies, terminology and structured answers.',
          highlights: ['Principles of Management decoded', 'Marketing & Financial Management', 'Case study decoding framework', 'High-scoring keywords strategy']
        }
      ]
    },
    {
      id: 'method',
      label: 'Method',
      href: '#method',
      subpages: [
        {
          id: 'formula',
          category: 'Teaching Methodology',
          title: 'The 7-Step Board Topper Loop',
          desc: 'Understand + Practise + Apply + Revise + Test + Refine + Master.',
          highlights: ['Small batch limit (12-15 students)', 'Daily revision drills', '1-on-1 doubt clearing before moving on', 'Weekly parent progress reports']
        },
        {
          id: 'classroom',
          category: 'Learning Environment',
          title: 'AC Classrooms & Mentorship',
          desc: 'Focused, comfortable offline classrooms in Indira Nagar with Anjali Ma’am.',
          highlights: ['Air-conditioned quiet classrooms', 'Daily 4:00 PM – 8:00 PM batches', 'Zero crowded lecture halls', 'Individual notebook checking']
        }
      ]
    },
    {
      id: 'toppers',
      label: 'Toppers',
      href: '#toppers',
      subpages: [
        {
          id: 'hall-of-fame',
          category: 'Student Success',
          title: 'Board Merit List & College Placements',
          desc: '97.6% (LSR DU), 96.5% (Kirori Mal DU), 92.0% (LU), RGNUL Law and 500+ board toppers.',
          highlights: ['Tuhina Prasad (97.6% - LSR)', 'Srishti Singh (96.5% - KMC)', 'Manya Kapoor (92.0% - LU)', 'Average +32% mark boost']
        }
      ]
    },
    {
      id: 'lab',
      label: 'Analytics (New)',
      href: '/Infographics/commerce_tutorials_infographic_spa.html',
      isExternal: true,
      highlight: true
    },
    {
      id: 'faq',
      label: 'FAQs',
      href: '#faq'
    }
  ];

  const handleSubPageClick = (subpage) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onSelectSubPage) {
      onSelectSubPage(subpage);
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 h-[76px] flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <a href="#top" className="flex items-center gap-3 group shrink-0">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-to-br from-brand-blue to-cyan-500 text-white font-serif font-bold text-lg sm:text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
            CT
          </div>
          <div className="leading-tight">
            <div className="font-serif font-bold text-[16px] sm:text-[17px] tracking-tight text-ink-dark group-hover:text-brand-blue transition-colors">
              Commerce Tutorials
            </div>
            <div className="text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-brand-blue font-bold">
              By Anjali Srivastava
            </div>
          </div>
        </a>

        {/* Desktop Navigation with Dropdowns */}
        <div className="hidden lg:flex items-center gap-6 text-[14px] font-bold text-slate-700">
          {navSections.map((item) => (
            <div 
              key={item.id} 
              className="relative"
              onMouseEnter={() => item.subpages && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.isExternal ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-full transition-all duration-150 ${
                    item.highlight 
                      ? 'bg-brand-blueSky text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/20 shadow-xs' 
                      : 'hover:text-brand-blue'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  href={item.href}
                  className="py-2 hover:text-brand-blue transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.subpages && (
                    <span className="text-[10px] text-slate-400">▼</span>
                  )}
                </a>
              )}

              {/* Sub-menu Dropdown Flyout */}
              {item.subpages && activeDropdown === item.id && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100">
                    Explore {item.label}
                  </div>
                  <div className="mt-1 space-y-1">
                    {item.subpages.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubPageClick(sub)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-brand-blueSky/60 transition group flex flex-col"
                      >
                        <span className="text-[13px] font-bold text-ink-dark group-hover:text-brand-blue flex items-center justify-between">
                          {sub.title}
                          <span className="text-brand-blue opacity-0 group-hover:opacity-100 text-xs transition">→</span>
                        </span>
                        <span className="text-[11.5px] text-slate-500 font-normal mt-0.5 line-clamp-1">
                          {sub.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Quick CTAs */}
        <div className="hidden xl:flex items-center gap-2.5 shrink-0">
          <a 
            href="tel:+919838827833" 
            className="h-10 px-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[13px] font-bold text-ink flex items-center gap-1.5 transition"
            title="Direct Call"
          >
            <span>📞</span> +91 98388 27833
          </a>
          <a 
            href="https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="h-10 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-[13px] font-bold flex items-center gap-1.5 transition shadow-sm"
          >
            <span>💬</span> WhatsApp Us
          </a>
          <button 
            onClick={onBookDemo}
            className="h-10 px-4 rounded-xl bg-brand-blue hover:bg-brand-blueDark text-white text-[13px] font-bold flex items-center justify-center transition shadow-glowBlue"
          >
            Book Free Demo
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition focus:outline-none shrink-0"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-ink-dark transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-ink-dark my-1 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-ink-dark transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[76px] bg-brand-navy/40 backdrop-blur-xs z-30" 
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-sm h-full shadow-2xl border-r border-slate-200 flex flex-col justify-between p-5 transition-transform duration-300 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Menu & Pathways
              </div>

              <div className="flex flex-col gap-2">
                {navSections.map((item) => (
                  <div key={item.id} className="border-b border-slate-100 pb-2">
                    {item.subpages ? (
                      <div>
                        <button
                          onClick={() => setExpandedMobileSection(expandedMobileSection === item.id ? null : item.id)}
                          className="w-full flex items-center justify-between text-left font-bold text-[15px] text-ink-dark py-1.5 hover:text-brand-blue"
                        >
                          <span>{item.label}</span>
                          <span className="text-xs text-brand-blue font-bold">
                            {expandedMobileSection === item.id ? '▲' : '▼'}
                          </span>
                        </button>

                        {expandedMobileSection === item.id && (
                          <div className="mt-1 pl-3 border-l-2 border-brand-blue/30 space-y-2 py-1">
                            {item.subpages.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => handleSubPageClick(sub)}
                                className="w-full text-left py-1 text-[13px] text-slate-600 hover:text-brand-blue font-medium block"
                              >
                                • {sub.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block font-bold text-[15px] py-1.5 ${
                          item.highlight ? 'text-brand-blue' : 'text-ink-dark hover:text-brand-blue'
                        }`}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Actions Drawer Footer */}
            <div className="space-y-2.5 pt-4 border-t border-slate-200 mt-6 bg-white">
              <a 
                href="tel:+919838827833"
                className="w-full h-11 rounded-xl border border-slate-200 bg-slate-50 text-[13.5px] font-bold text-ink flex items-center justify-center gap-2 hover:bg-slate-100 transition"
              >
                <span>📞</span> Call +91 98388 27833
              </a>
              <a 
                href="https://wa.me/919838827833?text=Hi%20Anjali%20Ma'am,%20I%20want%20to%20enquire%20about%20Commerce%20Batches"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 rounded-xl bg-[#25D366] text-white text-[13.5px] font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <span>💬</span> Chat on WhatsApp
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookDemo();
                }}
                className="w-full h-11 rounded-xl bg-brand-blue text-white text-[13.5px] font-bold hover:bg-brand-blueDark transition shadow-glowBlue"
              >
                Book Free Demo Class
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
