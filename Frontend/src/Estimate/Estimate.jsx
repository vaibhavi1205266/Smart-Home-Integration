import React from 'react';
import Icon1 from '../assets/Icon1.png';
import Icon2 from '../assets/Vector (10).png';
import Icon3 from '../assets/Icon3.png';
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/UserContext";
import { toast } from "react-hot-toast";

export const Estimate = () => {
  const navigate = useNavigate();
  const { firstName } = useUser();

  const nextHomePage = () => {
    if(firstName) {
      navigate('/getHomeEstimate');
    }
    else{
      toast.error("Please sign in to get home estimate.");
    }
  };

  const nextKitchenPage = () => {
    if(firstName) {
      navigate('/kitchenEstimate');
    }
    else{
      toast.error("Please sign in to get kitchen estimate.");
    }
  }

  
  return (
    <section className="py-24 px-6 lg:px-24 bg-slate-900 theme-transition overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-sky-500/5 -skew-y-6 transform translate-y-1/2" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mb-4">
            Instant <span className="brand-gradient-text">Estimates</span>
          </h2>
          <p className="text-slate-400 font-inter text-lg">Calculate the cost of your dream home interiors in seconds.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12">
          {/* Full Home Interiors Card */}
          <div className="group bg-white/5 backdrop-blur-sm p-10 rounded-3xl shadow-sm border border-white/10 hover:border-brand-purple/50 hover:bg-white/10 transition-all duration-500 animate-reveal flex-1 max-w-md">
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-white/10">
                <img src={Icon1} alt="Full Home" className="w-10 h-10 object-contain brightness-0 invert" />
              </div>
              <img src={Icon2} alt="Calculator" className="w-8 h-8 opacity-40 brightness-0 invert" />
            </div>
            <h3 className="text-2xl font-outfit font-bold text-white mb-4">Full Home Interiors</h3>
            <p className="text-slate-400 font-inter mb-8 leading-relaxed">
              Plan your entire space with a comprehensive cost breakdown for every room.
            </p>
            <button 
              onClick={nextHomePage} 
              className="w-full py-4 brand-gradient text-white font-outfit font-bold rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-brand-purple/20 active:scale-95"
            >
              Get Free Estimate
            </button>
          </div>

          {/* Kitchen Card */}
          <div className="group bg-white/5 backdrop-blur-sm p-10 rounded-3xl shadow-sm border border-white/10 hover:border-brand-purple/50 hover:bg-white/10 transition-all duration-500 animate-reveal flex-1 max-w-md" style={{ animationDelay: '200ms' }}>
            <div className="flex justify-between items-start mb-8">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-white/10">
                <img src={Icon3} alt="Kitchen" className="w-10 h-10 object-contain brightness-0 invert" />
              </div>
              <img src={Icon2} alt="Calculator" className="w-8 h-8 opacity-40 brightness-0 invert" />
            </div>
            <h3 className="text-2xl font-outfit font-bold text-white mb-4">Smart Kitchen</h3>
            <p className="text-slate-400 font-inter mb-8 leading-relaxed">
              Focused costing for your modular kitchen, from cabinets to high-tech appliances.
            </p>
            <button 
              onClick={nextKitchenPage} 
              className="w-full py-4 brand-gradient text-white font-outfit font-bold rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-brand-purple/20 active:scale-95"
            >
              Get Free Estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
