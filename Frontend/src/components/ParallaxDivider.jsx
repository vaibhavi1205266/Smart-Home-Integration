import React from 'react';

export const ParallaxDivider = ({ imageUrl, title, subtitle }) => {
  return (
    <div 
      className="relative h-[300px] md:h-[450px] w-full overflow-hidden parallax-section"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mb-4 animate-reveal shadow-sm">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-slate-200 font-inter max-w-2xl animate-slide-up">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
