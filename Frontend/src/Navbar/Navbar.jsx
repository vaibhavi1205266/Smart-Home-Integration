import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import icon1 from "../assets/Vector (4).png";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import UserMenu from "../pages/UserMenu";


export const Navbar = () => {
  const { firstName, mobileNumber } = useUser();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { setUserName, setFirstName, setMobileNumber, setEmail } = useUser();

  const goToSignUpPage = () => {
    navigate("/abc");
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUserMenu(false);
    }
    , 10000);
    return () => clearTimeout(timer);
  }, [toggleUserMenu])

  const getCapitalizedFirstName = (string) => {
    if (!string) return "";
    const firstName = string.trim().split(" ")[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1);
  };

  const handleLogout = () => {
    setFirstName("");
    setEmail("");
    setUserName("");
    setMobileNumber("");
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("mobileNumber");
    setShowUserMenu(false); // Hide the UserMenu after logout
    navigate("/home");
  };

  return (
    <div className="flex justify-between h-24 bg-sky-200 shadow-xl border-2 shadow-gray-700">
      <img className="h-14 w-24 mx-2 my-2 ml-12 mt-4" src={logo} alt="Logo" />
      <div className="flex mx-4 my-4 gap-8">
        <div className="flex h-8 w-auto gap-4 mt-4">
          <img src={icon1} alt="icon1" />
          {firstName ? (
            <button
              onClick={toggleUserMenu}
              type="button"
              className="text-black text-3xl font-poppins font-medium mr-12"
            >
              {getCapitalizedFirstName(firstName)}
            </button>
          ) : (
            <button
              onClick={goToSignUpPage}
              type="button"
              className="text-black text-3xl mb-6 font-poppins font-medium mr-12"
            >
              Sign In
            </button>
          )}
        </div>
        {/* UserMenu Dropdown */}
        {showUserMenu && (
          <div className="absolute top-24 right-8 z-50">
            <UserMenu
              isVisible={showUserMenu}
              firstName={firstName}
              mobileNumber={mobileNumber}
              onLogout={handleLogout}
              hideUserMenu={() => setShowUserMenu(false)} // Pass the callback
            />
          </div>
        )}
      </div>
    </div>
  );
};
