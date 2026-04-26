import React, { useEffect, useState } from "react";
const logo = "/vs-logo.png";
import icon1 from "../assets/Vector (4).png";
import { useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../context/UserContext";
import UserMenu from "../pages/UserMenu";
import HomeMobile from "../HomePage/HomeMobile";
import { RxCross2 } from "react-icons/rx";
import { FiAlignJustify } from "react-icons/fi";

export const Navbar = ({ onOpenLogin }) => {
  const { firstName, mobileNumber, setPicture, setUserName, setFirstName, setMobileNumber, setEmail } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/AboutUs" },
    { name: "Designs", path: "/Design" },
    { name: "Contact Us", path: "/Contact" },
  ];

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSignUpPage = () => {
    navigate("/abc");
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const pict = localStorage.getItem("picture");


  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUserMenu(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, [toggleUserMenu]);

  const getCapitalizedFirstName = (string) => {
    if (!string) return "";
    const first = string.trim().split(" ")[0];
    return first.charAt(0).toUpperCase() + first.slice(1);
  };

  const handleLogout = () => {
    setFirstName("");
    setEmail("");
    setUserName("");
    setMobileNumber("");
    setPicture("");
    localStorage.removeItem("picture");
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("mobileNumber");
    setShowUserMenu(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 w-full h-20 glass-effect shadow-sm px-6 lg:px-12 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
        <img className="h-12 w-auto animate-reveal logo-glow" src={logo} alt="VS Logo" />
        <span className="hidden xl:block font-outfit font-bold text-xl tracking-tight text-brand-dark whitespace-nowrap">Vaibhavi <span className="brand-gradient-text">& Shrishty</span></span>
      </div>

      <div className="hidden lg:flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-full shadow-inner border border-slate-200/50">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <button
              key={link.name}
              onClick={() => navigate(link.path)}
              className={`px-6 py-2 rounded-full font-outfit font-semibold transition-all duration-300 whitespace-nowrap ${
                isActive 
                ? "bg-white brand-gradient-text shadow-md scale-105" 
                : "text-slate-600 hover:text-brand-purple hover:bg-white/50"
              }`}
            >
              {link.name}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-6">
        {firstName ? (
          <div className="flex items-center gap-4">
            <button
              onClick={toggleUserMenu}
              className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <div className="relative">
                {pict ? (
                  <img src={pict} alt="Profile" className="w-9 h-9 rounded-full object-cover border-2 border-sky-400" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center">
                    <img src={icon1} alt="User" className="w-5 h-5 opacity-70" />
                  </div>
                )}
              </div>
              <span className="hidden md:block font-outfit font-semibold text-slate-700">
                Hi, {getCapitalizedFirstName(firstName)}
              </span>
            </button>
          </div>
        ) : (
          <button
            onClick={onOpenLogin}
            className="px-6 py-2.5 brand-gradient text-white font-outfit font-semibold rounded-full hover:opacity-90 transition-all shadow-lg shadow-brand-purple/20 active:scale-95"
          >
            Get Started
          </button>
        )}

        {!isLargeScreen && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-800"
          >
            {menuOpen ? <RxCross2 size={28} /> : <FiAlignJustify size={28} />}
          </button>
        )}
      </div>

      {/* User Menu Dropdown */}
      {showUserMenu && isLargeScreen && (
        <div className="absolute top-24 right-8 z-50 animate-reveal">
          <UserMenu
            isVisible={showUserMenu}
            firstName={firstName}
            mobileNumber={mobileNumber}
            onLogout={handleLogout}
            picture={pict}
            hideUserMenu={() => setShowUserMenu(false)}
          />
        </div>
      )}

      {/* Mobile Nav Popup */}
      {menuOpen && !isLargeScreen && (
        <div className="fixed inset-0 top-20 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMenuOpen(false)}>
          <div className="absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl p-6 animate-reveal" onClick={e => e.stopPropagation()}>
            <HomeMobile 
              Desgin="Design" 
              firstName={firstName} 
              mobileNumber={mobileNumber} 
              setFirstName={setFirstName} 
              setMobileNumber={setMobileNumber} 
              setMenuOpen={setMenuOpen} 
              onOpenLogin={onOpenLogin}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
