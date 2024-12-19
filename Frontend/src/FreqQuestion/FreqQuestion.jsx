import React, { useState } from 'react';

export const FreqQuestion = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    "How can I get started with DLN?",
    "What is the timeline for completing a project with DLN?",
    "How does the DLN interior design process work?",
    "Can I visit a DLN showroom to see your products and designs in person?",
    "What are the end-to-end services offered by DLN?",
    "Are your designs customisable?"
  ];

  return (
    <>
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center my-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((question, index) => (
          <div key={index} className="border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer py-2 text-lg font-medium"
              onClick={() => toggleFAQ(index)}
            >
              <span>{question}</span>
              <span>{openFAQ === index ? '▲' : '▼'}</span>
            </div>
            {openFAQ === index && (
              <div className="mt-2 text-gray-700">
                <p>The answer to "{question}" will be placed here.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <hr className="border-t-1 border-gray-950 mt-12 mb-8" />
    </>
  );
};
