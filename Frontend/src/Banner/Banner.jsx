import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();
  const image1 = "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/ebixxdj8jstsw9ipa3y8.png";
  const image2 = "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/rdt9hsk76urnnzx2urjd.png";
  const image3 = "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/dq6cry8keuvz0uijqnwv.png";
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden group theme-transition">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out parallax-section ${index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          style={{
            transitionProperty: "opacity, transform",
            backgroundImage: `url(${img})`
          }}
        >
          {/* Linear Gradient Overlay - Dark on left for text, Light on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center px-6 lg:px-24">
        <div className="max-w-3xl animate-reveal">
          <span className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-outfit font-bold text-sm uppercase tracking-widest shadow-lg">
            Smart Home Revolution
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-extrabold text-white leading-tight mb-6">
            Elevate Your <br />
            <span className="brand-gradient-text">Living Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-inter mb-10 max-w-xl">
            Seamlessly integrate cutting-edge technology into your home with V&S Experience comfort, security, and luxury at your fingertips.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate("/Design")}
              className="px-10 py-4 brand-gradient text-white font-outfit font-bold rounded-full hover:opacity-90 transition-all shadow-xl shadow-brand-purple/20 hover:-translate-y-1 active:scale-95"
            >
              Explore Designs
            </button>
            <button 
              onClick={() => navigate("/Contact")}
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-outfit font-bold rounded-full hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === currentIndex ? "w-12 brand-gradient" : "w-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
