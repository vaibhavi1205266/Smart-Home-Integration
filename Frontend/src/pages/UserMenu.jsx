import React, { useState } from "react";
import icon1 from "../assets/Vector (4).png";
import icon2 from "../assets/Vector (2).png";
import icon3 from "../assets/Vector (7).png";
import icon4 from "../assets/Frame 894 (1).png";
import icon5 from "../assets/Frame 895.png";
import icon6 from "../assets/Frame 896.png";
import icon7 from "../assets/Vector (9).png";
import icon8 from "../assets/Vector (8).png";
import icon9 from "../assets/Frame 897.png";
import icon10 from "../assets/Frame 899.png";
import { useNavigate } from "react-router-dom";

const UserMenu = ({ firstName, mobileNumber, isVisible, onLogout, hideUserMenu }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleLogoutClick = () => {
    onLogout();
    hideUserMenu();
  };
  const toggleButton = () => {
    setIsActive((prev) => !prev);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-80 border border-sky-400 rounded-3xl shadow-lg bg-white text-black">
      <div className="p-4 flex flex-row items-center border-b border-sky-400 gap-8">
        <div className="ml-4">
          <span className="text-4xl">
            <img src={icon1} alt="User Icon" />
          </span>
        </div>
        <div>
          <h2 className="text-lg font-medium mt-2">{firstName}</h2>
          <p className="text-gray-500 text-sm">{mobileNumber}</p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center gap-5 cursor-pointer hover:text-sky-400">
          <img src={icon2} alt="My Account" className="h-6 w-6" />
          <span className="text-lg">My Account</span>
        </div>
        <div className="flex items-center gap-5 cursor-pointer hover:text-sky-400">
          <img src={icon3} alt="My Wishlist" className="h-6 w-6" />
          <span className="text-lg">My Wishlist</span>
        </div>
        <div className="flex items-center gap-5 cursor-pointer hover:text-sky-400">
          <img src={icon4} alt="My Appointment" className="h-7 w-7" />
          <span className="text-lg">My Appointment</span>
        </div>
        <div className="flex items-center gap-5 cursor-pointer hover:text-sky-400">
          <img src={icon5} alt="Price Estimate" className="h-7 w-7" />
          <span className="text-lg" onClick={toggleButton}>
            Price Estimate
          </span>
          <button onClick={toggleButton}>
            <img
              src={isActive ? icon7 : icon8}
              alt="Toggle Icon"
              className="h-3 w-3 ml-20"
            />
          </button>
        </div>
        {isActive && (
          <div className="mt-2 pl-8">
            <div className="flex items-center gap-2" onClick={() => navigate("/getHomeEstimate")}>
              <img src={icon9} alt="Full Home Estimate" className="h-6 w-6" />
              <h1 className="text-lg hover:text-sky-400 cursor-pointer">Full Home Estimate</h1>
            </div>
            <div className="flex items-center gap-2 mt-2" onClick={() => navigate("/kitchenEstimate")}>
              <img src={icon10} alt="Kitchen Estimate" className="h-6 w-6" />
              <h1 className="text-lg hover:text-sky-400 cursor-pointer">Kitchen Estimate</h1>
            </div>
          </div>
        )}
        <div className="flex items-center gap-4 cursor-pointer hover:text-sky-400">
          <img src={icon6} alt="Customer Support" className="h-8 w-8" />
          <span className="text-lg">Customer Support</span>
        </div>
      </div>

      <div className="p-4 border-sky-400 border rounded-b-3xl text-center">
        <button
          onClick={handleLogoutClick} // Call the function to logout and hide the menu
          className="text-white bg-sky-400 rounded-lg font-medium text-lg w-full py-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
