import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiPhone, FiLock, FiLogOut } from "react-icons/fi";
import { BsPeople, BsHeadphones } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbArrowBigRightLines } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";

const HomeMobile = ({ Desgin, setMenuOpen, firstName, mobileNumber, setPicture, setFirstName, setMobileNumber, onOpenLogin }) => {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleClick = () => {
    navigate('/nextpage', { replace: true });
  };

  const pict = localStorage.getItem("picture");

  const location = useLocation();

  const menuItem = (label, icon, path) => {
    const isActive = location.pathname === path;
    return (
      <div
        onClick={() => goToPage(path)}
        className={`flex items-center gap-4 cursor-pointer px-4 py-3 rounded-xl transition-all duration-300 ${
          isActive 
          ? "brand-gradient text-white shadow-lg" 
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        }`}
      >
        <span className={`${isActive ? "text-white" : "text-slate-400"}`}>{icon}</span>
        <span className="text-lg font-outfit font-semibold">{label}</span>
      </div>
    );
  };

  return (
    <div className="bg-white h-full flex flex-col justify-between p-4 space-y-6 overflow-y-auto rounded-l-3xl">
      <div>
        {firstName ? (
          <div className="flex items-center gap-4 px-2 py-4 mb-2">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
              {pict ? (
                <img src={pict} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full brand-gradient flex items-center justify-center text-white">
                  <FaUserAlt size={24} />
                </div>
              )}
            </div>
            <div>
              <p className="text-slate-900 font-outfit font-bold text-xl leading-tight">{firstName}</p>
              <p className="text-slate-400 font-inter text-sm">{mobileNumber || "Smart Home User"}</p>
            </div>
          </div>
        ) : (
          <div className="px-2 py-6">
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full brand-gradient text-white font-outfit font-bold py-4 rounded-2xl text-lg shadow-lg shadow-brand-purple/20 active:scale-95"
            >
              Get Started
            </button>
          </div>
        )}

        <div className="space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-2">Main Menu</p>
          {menuItem("Home", <FiHome size={22} />, "/")}
          {menuItem("About Us", <BsPeople size={22} />, "/AboutUs")}
          {menuItem("Designs", <MdOutlineDesignServices size={22} />, "/Design")}
          {menuItem("Contact Us", <FiPhone size={22} />, "/Contact")}
        </div>

        <div className="my-6 border-t border-slate-100 mx-4" />

        <div className="space-y-1">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-2">My Activity</p>
          {menuItem("Account Settings", <FiLock size={20} />, "/account")}
          {menuItem("My Wishlist", <BsHeadphones size={20} />, "/wishlist")}
          {menuItem("My Appointment", <TbArrowBigRightLines size={20} />, "/appointment")}
          {menuItem("Price Estimate", <FiLock size={20} />, "/price-estimate")}
          {menuItem("Customer Support", <BsHeadphones size={20} />, "/support")}
        </div>
      </div>

      {/* Logout Button */}
      <div className="pt-6 border-t border-slate-100">
        <button
          onClick={() => {
            setFirstName("");
            setMobileNumber(""); 
            setPicture("") ;  
            goToPage("/");   
          }}
          className="w-full bg-slate-900 text-white font-outfit font-bold py-4 rounded-2xl text-lg flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
        >
          <FiLogOut size={22} /> Logout
        </button>
      </div>
    </div>
  );
};

export default HomeMobile;
