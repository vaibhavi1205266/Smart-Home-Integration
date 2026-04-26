import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = ({Desgin}) => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/home'); 
  };
  const goToAboutUs = () => {
    navigate('/AboutUs');
  };
  const goToDesignPage = () => {
    navigate('/Design');
  };
  const goToContactPage = () => {
    navigate('/Contact');
  };
  return (
    <div className="hidden lg:flex justify-center bg-white/50 backdrop-blur-sm border-b border-slate-100 py-3 sticky top-20 z-40">
      <div className="flex bg-slate-100/50 p-1.5 rounded-full gap-1 shadow-inner">
        {[
          { name: "Home", path: "/", key: "Home", action: goToHomePage },
          { name: "About Us", path: "/AboutUs", key: "aboutus", action: goToAboutUs },
          { name: "Designs", path: "/Design", key: "Bedroom", action: goToDesignPage },
          { name: "Contact Us", path: "/Contact", key: "contactus", action: goToContactPage },
        ].map((item) => (
          <button
            key={item.key}
            onClick={item.action}
            className={`px-8 py-2.5 rounded-full font-outfit font-semibold transition-all duration-300 ${
              Desgin === item.key
                ? "bg-white text-sky-600 shadow-md scale-105"
                : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

