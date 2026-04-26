import React from 'react';
import SlideImg from '../assets/Group 783.png';

export const Session = () => {

  return (
    <section className="py-24 bg-white px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-slate-900 mb-4">
            What is a <span className="brand-gradient-text">Design Session?</span>
          </h2>
          <div className="w-24 h-1.5 brand-gradient mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 font-inter text-lg max-w-2xl mx-auto">
            Experience our unique 4-step process to transform your vision into a stunning reality.
          </p>
        </div>

        <div className="flex justify-center animate-slide-up">
          <img 
            src={SlideImg} 
            alt="Design session process" 
            className="w-full max-w-6xl h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};
