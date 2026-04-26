import React from 'react';
import Maskgroup35 from "../assets/Maskgroup35.webp";

export const CustomerReview = () => {
  const teamMembers = [
    {
      name: 'Vidhi Singh',
      designation: 'Student',
      longDesc: "Smooth, reliable, and easy to use—this platform makes smart home control effortless.",
      imageUrl: Maskgroup35,
    },
    {
      name: 'Shrishty Singh',
      designation: 'Student',
      longDesc: "I love how easy it is to control everything from one place. The automation saves time, and the app runs without lag. A great solution for smart living.",
      imageUrl: Maskgroup35,
    },
    {
      name: 'Vaibhavi Singh',
      designation: 'Student',
      longDesc: "A thoughtfully designed platform that combines powerful automation with a user-friendly experience. It sets a high standard for smart home integration.",
      imageUrl: Maskgroup35,
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-24 bg-slate-900 theme-transition overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-white mb-4">
            Voices of <span className="brand-gradient-text">Satisfaction</span>
          </h2>
          <div className="flex justify-center gap-1 brand-gradient-text mb-6 text-xl">
            {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
          </div>
          <p className="text-slate-400 font-inter text-lg">See why thousands of homeowners trust V&S for their smart homes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-[40px] border border-white/10 hover:border-brand-purple/30 hover:bg-white/10 transition-all duration-500 animate-reveal"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-purple/30"
                />
                <div>
                  <h3 className="font-outfit font-bold text-white">{member.name}</h3>
                  <p className="text-sm brand-gradient-text font-inter font-bold">{member.designation}</p>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-brand-purple/10 font-serif">“</span>
                <p className="text-slate-400 font-inter leading-relaxed relative z-10 italic">
                  {member.longDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
