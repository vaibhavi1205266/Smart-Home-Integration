import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        <img 
          src="/vs-logo.gif" 
          alt="Vaibhavi & Shrishty Loading..." 
          className="w-48 h-48 md:w-64 md:h-64 object-contain animate-pulse-slow"
        />
        {/* Progress Bar */}
        <div className="w-48 md:w-64 h-1 bg-slate-100 rounded-full overflow-hidden mt-8">
          <div className="h-full brand-gradient animate-[loading_4s_ease-in-out_infinite]" />
        </div>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { width: 0%; left: 0%; }
          50% { width: 100%; left: 0%; }
          100% { width: 0%; left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
