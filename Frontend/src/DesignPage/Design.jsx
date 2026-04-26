import React from 'react'
import Maskgroup1 from '../assets/Maskgroup1.png';
import Maskgroup2 from '../assets/Maskgroup2.png';
import Maskgroup3 from '../assets/Maskgroup3.png';
import Maskgroup4 from '../assets/Maskgroup4.png';
import Maskgroup5 from '../assets/Maskgroup5.png';
import Maskgroup6 from '../assets/Maskgroup6.png';
import Maskgroup7 from '../assets/Maskgroup7.png';
import Maskgroup8 from '../assets/Maskgroup8.png';
import Maskgroup9 from '../assets/Mask group.png';
import Maskgroup10 from '../assets/Mask group (1).png';
import Maskgroup11 from '../assets/Mask group (2).png';
import Maskgroup12 from '../assets/Mask group (3).png';
import Maskgroup13 from '../assets/Mask group (4).png';
import Maskgroup14 from '../assets/Mask group (5).png';
import Maskgroup15 from '../assets/Mask group (6).png';
import Maskgroup16 from '../assets/Mask group (7).png';
import Maskgroup20 from '../assets/Maskgroup9.png';
import Maskgroup19 from '../assets/Maskgroup10.png';
import Maskgroup18 from '../assets/Maskgroup11.png';
import Maskgroup17 from '../assets/Maskgroup12.png';
import Maskgroup21 from '../assets/Maskgroup13.png';
import Maskgroup22 from '../assets/Maskgroup14.png';
import Maskgroup23 from '../assets/Maskgroup15.png';
import Maskgroup24 from '../assets/Maskgroup16.png';
import Maskgroup25 from '../assets/Mask group (8).png';
import Maskgroup26 from '../assets/Mask group (9).png';
import Maskgroup27 from '../assets/Mask group (10).png';
import Maskgroup28 from '../assets/Mask group (11).png';
import Maskgroup29 from '../assets/Maskgroup17.png';
import Maskgroup30 from '../assets/Maskgroup18.png';
import Maskgroup31 from '../assets/Maskgroup19.png';
import Maskgroup32 from '../assets/Maskgroup20.png';
import Maskgroup33 from '../assets/Maskgroup21.png';
import Maskgroup34 from '../assets/Maskgroup22.png';
import Maskgroup35 from '../assets/Maskgroup23.png';
import Maskgroup36 from '../assets/Maskgroup24.png';
import Maskgroup37 from '../assets/Mask group (12).png';
import Maskgroup38 from '../assets/Mask group (13).png';
import Maskgroup39 from '../assets/Mask group (14).png';
import Maskgroup40 from '../assets/Mask group (15).png';
import Maskgroup41 from '../assets/Maskgroup25.png';
import Maskgroup42 from '../assets/Maskgroup26.png';
import Maskgroup43 from '../assets/Maskgroup27.png';
import Maskgroup44 from '../assets/Maskgroup28.png';
import Maskgroup45 from '../assets/Maskgroup29.png';
import Maskgroup46 from '../assets/Maskgroup30.png';
import Maskgroup47 from '../assets/Maskgroup31.png';
import Maskgroup48 from '../assets/Maskgroup32.png';
import Maskgroup49 from '../assets/Mask group (16).png';
import Maskgroup50 from '../assets/Mask group (17).png';
import Maskgroup51 from '../assets/Mask group (18).png';
import Maskgroup52 from '../assets/Mask group (19).png';

const items1 = [
  { img: Maskgroup1},
  { img: Maskgroup2},
  { img: Maskgroup3},
  { img: Maskgroup4},
  { img: Maskgroup5},
  { img: Maskgroup6},
  { img: Maskgroup7},
  { img: Maskgroup8},
  { img: Maskgroup9},
  { img: Maskgroup10},
  { img: Maskgroup11},
  { img: Maskgroup12},
  { img: Maskgroup13},
  { img: Maskgroup14},
  { img: Maskgroup15},
  { img: Maskgroup16},
];
const items2 = [
    { img: Maskgroup17},
    { img: Maskgroup18},
    { img: Maskgroup19},
    { img: Maskgroup20},
    { img: Maskgroup21},
    { img: Maskgroup22},
    { img: Maskgroup23},
    { img: Maskgroup24},
    { img: Maskgroup25},
    { img: Maskgroup26},
    { img: Maskgroup27},
    { img: Maskgroup28},
  ];
  const items3 = [
    { img: Maskgroup29},
    { img: Maskgroup30},
    { img: Maskgroup31},
    { img: Maskgroup32},
    { img: Maskgroup33},
    { img: Maskgroup34},
    { img: Maskgroup35},
    { img: Maskgroup36},
    { img: Maskgroup37},
    { img: Maskgroup38},
    { img: Maskgroup39},
    { img: Maskgroup40},
  ];
  const items4 = [
    { img: Maskgroup41},
    { img: Maskgroup42},
    { img: Maskgroup43},
    { img: Maskgroup44},
    { img: Maskgroup45},
    { img: Maskgroup46},
    { img: Maskgroup47},
    { img: Maskgroup48},
    { img: Maskgroup49},
    { img: Maskgroup50},
    { img: Maskgroup51},
    { img: Maskgroup52},
  ];

const Desgin = () => {
  const sections = [
    { title: "Elegant Bedrooms", items: items1 },
    { title: "Modular Kitchens", items: items2 },
    { title: "Luxury Living Rooms", items: items3 },
    { title: "Modern Wardrobes", items: items4 },
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-sky-500/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10 text-center animate-reveal">
          <span className="inline-block px-4 py-1.5 mb-6 bg-white/10 text-sky-400 rounded-full font-outfit font-bold text-sm uppercase tracking-widest border border-white/10">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-outfit font-extrabold text-white leading-tight mb-8">
            Design <span className="text-sky-500">Masterpieces</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-inter leading-relaxed max-w-2xl mx-auto">
            Explore our curated collection of interior designs, where every corner tells a story of elegance and innovation.
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <div className="py-24 space-y-32">
        {sections.map((section, sIndex) => (
          <section key={section.title} className="max-w-7xl mx-auto px-6 lg:px-24">
            <div className="flex items-center gap-8 mb-16 animate-reveal">
              <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-slate-900 whitespace-nowrap">
                {section.title}
              </h2>
              <div className="h-px bg-slate-200 w-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.items.map((item, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-3xl bg-slate-100 aspect-square animate-reveal shadow-sm hover:shadow-2xl transition-all duration-700"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img 
                    src={item.img} 
                    alt={`${section.title} ${index + 1}`} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white font-outfit font-bold tracking-wide">View Project</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
};

export default Desgin

