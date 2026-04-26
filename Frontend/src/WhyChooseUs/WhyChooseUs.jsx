import React from 'react';
import Group811 from '../assets/Guarantee.png';
import Group812 from '../assets/Discount.png';
import Group813 from '../assets/Designer.png';

const items = [
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/szezyzxu2pyizgkrrteg.png", text: "22 Cities" },
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/iukqua7o5zdlj4tcuhbs.png", text: "Delivery in 45 days" },
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/numgtz3sgbb8qyi2d67m.png", text: "No Hidden Costs" },
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/gpkmwnaulaewhaiypisl.png", text: "Flat 10 Year Warranty" },
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/oq4qrjony15ui1qfxy3j.png", text: "Easy EMIs" },	
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/ymqg62nfcpsgfbbsacxt.png", text: "600+ In-House Designers" },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-3xl md:text-5xl font-outfit font-extrabold text-slate-900 mb-4">
            Why Choose V&S?
          </h2>
          <div className="w-24 h-1.5 brand-gradient mx-auto rounded-full" />
          <p className="mt-6 text-slate-600 font-inter text-lg max-w-2xl mx-auto">
            We combine expert craftsmanship with innovative technology to deliver homes that are built for the future.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-purple/30 hover:bg-white hover:shadow-xl hover:shadow-brand-purple/5 transition-all duration-300 group animate-reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-6 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-500">
                <img src={item.img} alt={item.text} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <p className="text-sm md:text-base font-outfit font-bold text-slate-800 text-center leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
