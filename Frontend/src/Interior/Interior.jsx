import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ImgInterior from '../assets/ImgInterior1.png';

export const Interior = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep === 3 ? 1 : prevStep + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const paraText = [
    ['Explore more than just modular design ideas', 'with our experts.'],
    ['Complete the design with painting flooring', 'other decor solutions.'],
    ['Move in with ease, with our hassle-free', 'civil work and installation services.'],
  ];

  return (
    <section className="py-24 px-6 lg:px-24 bg-slate-900 theme-transition">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 animate-reveal">
            <div className="relative">
              <div className="absolute -inset-4 brand-gradient opacity-10 rounded-3xl -z-10 blur-xl" />
              <img
                src={ImgInterior}
                alt="Interior Design Process"
                className="w-full h-[400px] lg:h-[600px] object-cover rounded-3xl shadow-2xl border border-white/5"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mb-6">
              Your Dream Home in <span className="brand-gradient-text">3 Simple Steps</span>
            </h2>
            <p className="text-slate-400 font-inter text-lg mb-12">
              We've streamlined the interior design process to make it effortless and enjoyable for you.
            </p>

            {/* Step Indicator */}
            <div className="space-y-10">
              {[
                { title: 'Discover', desc: paraText[0].join(' ') },
                { title: 'Design', desc: paraText[1].join(' ') },
                { title: 'Completed', desc: paraText[2].join(' ') },
              ].map((step, index) => (
                <div 
                  key={index} 
                  className={`flex gap-6 transition-all duration-500 ${
                    currentStep === index + 1 ? "opacity-100 translate-x-4" : "opacity-30"
                  }`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-outfit font-bold text-xl ${
                    currentStep === index + 1 ? "brand-gradient text-white shadow-lg shadow-brand-purple/30" : "bg-white/5 text-slate-500"
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`text-xl font-outfit font-bold mb-2 ${
                      currentStep === index + 1 ? "text-white" : "text-slate-500"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-slate-400 font-inter leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => navigate('/Contact')}
              className="mt-16 px-10 py-4 brand-gradient text-white font-outfit font-bold rounded-full hover:opacity-90 transition-all shadow-xl shadow-brand-purple/20 active:scale-95"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
