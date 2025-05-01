import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import icon1 from "../assets/Vector (4).png";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import UserMenu from "../pages/UserMenu";
import HomeMobile from "../HomePage/HomeMobile";
import { RxCross2 } from "react-icons/rx";
import { FiAlignJustify } from "react-icons/fi";

export const Navbar = () => {
  const { firstName, mobileNumber, setPicture, setUserName, setFirstName, setMobileNumber, setEmail } = useUser();
  const navigate = useNavigate();
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
    navigate("/home");
  };

  return (
    <div className="relative flex justify-between items-center h-24 bg-sky-200 shadow-xl border-2 shadow-gray-700 px-6">
      <img className="h-14 w-24 mt-2" src={logo} alt="Logo" />
      <div className="flex items-center">
        {firstName ? (
          <button
            onClick={toggleUserMenu}
            type="button"
            className="flex items-center text-black text-xl font-poppins font-medium gap-2"
          >
            {isLargeScreen && 
              <div className="">
                {pict ? (
                  <img src={pict} alt="Profile" className="w-8 h-8 rounded-full" />
                ) : (
                  <img src={icon1} alt="icon1" className="w-6 h-6" />
                )}
              </div>
            }
            {/* {!isLargeScreen && <img src={pict} alt="icon1" className="w-8 h-8 rounded-full" />} */}
            {isLargeScreen && getCapitalizedFirstName(firstName)}
          </button>
          
        ) : (
          <button
            onClick={goToSignUpPage}
            type="button"
            className="text-black text-xl font-poppins font-medium"
          >
            Sign In
          </button>
        )}
        {!isLargeScreen && firstName && (
        // Mobile Menu Button
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex gap-4 text-black text-3xl font-bold px-2"
        >
          {
            pict ? <img src={pict} alt="icon1" className="w-8 h-8 rounded-full" /> 
            : <img src={icon1} alt="icon1" className="w-6 h-6" />   
          }
          {menuOpen ? <RxCross2 /> : <FiAlignJustify />}

        </button>
      )}
      </div>

      {/* User Menu Dropdown */}
      {showUserMenu && isLargeScreen && (
        <div className="absolute top-24 right-8 z-50">
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
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-40 w-[90%] max-w-md">
          <HomeMobile Desgin="Design" firstName={firstName} mobileNumber={mobileNumber} setFirstName={setFirstName} setMobileNumber={setMobileNumber} setMenuOpen={setMenuOpen} />
        </div>
      )}
    </div>
  );
};
