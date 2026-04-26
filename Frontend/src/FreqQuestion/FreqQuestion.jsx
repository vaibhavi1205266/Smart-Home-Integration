import React, { useState } from 'react';

export const FreqQuestion = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    "How can I get started with VS?",
    "What is the timeline for completing a project with VS?",
    "How does the VS interior design process work?",
    "Can I visit a VS showroom to see your products and designs in person?",
    "What are the end-to-end services offered by VS?",
    "Are your designs customisable?"
  ];

  return (
    <section className="py-24 px-6 lg:px-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-slate-900 mb-4">
            Common <span className="brand-gradient-text">Questions</span>
          </h2>
          <p className="text-slate-600 font-inter">Everything you need to know about our smart home integration process.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((question, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border transition-all duration-300 ${
                openFAQ === index ? "border-brand-purple/30 bg-brand-purple/5" : "border-slate-100 bg-slate-50 hover:bg-slate-100"
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-outfit font-bold text-lg text-slate-800">{question}</span>
                <span className={`text-xl transition-transform duration-300 ${openFAQ === index ? "rotate-180 brand-gradient-text font-black" : "text-slate-400"}`}>
                  ↓
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 font-inter leading-relaxed">
                  Our team of experts will guide you through every step, from initial consultation to final installation, ensuring a seamless and personalized experience tailored to your lifestyle.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
