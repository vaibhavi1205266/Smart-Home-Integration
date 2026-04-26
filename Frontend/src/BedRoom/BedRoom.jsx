import React from 'react';
import { useNavigate } from "react-router-dom";

const items = [
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/vxealhxamyjdmworvdgh.png"},
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/eazfeb5v6chmzmxu5hed.png"},
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/pgelvpiqwdd5pb0uhypw.png"},
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/o6kxptjtkknpnm6ikd94.png"},
];

export const BedRoom = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section className="min-h-screen py-24 px-6 lg:px-24 bg-slate-900 theme-transition flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 animate-reveal">
          <div>
            <h2 className="text-2xl md:text-4xl font-outfit font-extrabold text-white">
              Bedroom <span className="brand-gradient-text">Designs</span>
            </h2>
            <div className="w-16 h-1.5 brand-gradient mt-3 rounded-full" />
          </div>
          <button 
            onClick={() => navigate('/Bedroom')} 
            className="group flex items-center gap-2 brand-gradient-text font-outfit font-bold hover:opacity-80 transition-all"
          >
            See All 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 animate-reveal shadow-md hover:shadow-2xl transition-all duration-700"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: `translateY(${Math.max(0, scrollY * 0.05 * (index % 2 === 0 ? 1 : -1))}px)`
              }}
            >
              <img
                src={item.img}
                alt={`Bedroom ${index}`}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-outfit font-bold text-lg">Modern Suite {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
