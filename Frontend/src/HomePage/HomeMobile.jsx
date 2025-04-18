import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiPhone, FiLock, FiLogOut } from "react-icons/fi";
import { BsPeople, BsHeadphones } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbArrowBigRightLines } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";

const HomeMobile = ({ Desgin, setMenuOpen, firstName, mobileNumber, setFirstName, setMobileNumber }) => {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleClick = () => {
    navigate('/nextpage', { replace: true });
  };

  const menuItem = (label, icon, path, activeKey) => (
    <div
      onClick={() => goToPage(path)}
      className={`flex items-center gap-4 cursor-pointer px-2 py-2 rounded-md hover:text-sky-500 ${
        Desgin === activeKey ? "text-sky-400" : "text-black"
      }`}
    >
      {icon}
      <span className="text-lg font-medium font-poppins">{label}</span>
    </div>
  );

  return (
    <div className="bg-white h-full flex flex-col justify-between p-4 space-y-4">
      {/* Profile Section */}
      <div>
        {firstName && (
          <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-sky-400 flex items-center justify-center text-white text-lg font-bold">
          <FaUserAlt />
          </div>
          <div>
            <p className="text-black font-semibold text-lg">{firstName}</p>
            <p className="text-gray-600 text-sm">{mobileNumber}</p>
          </div>
        </div>
        )}

        <hr className="my-4 border-t border-sky-300" />

        {/* Main Menu */}
        {menuItem("Home", <FiHome size={20} />, "/home", "Home")}
        {menuItem("About Us", <BsPeople size={20} />, "/AboutUs", "aboutus")}
        {menuItem("Designs", <MdOutlineDesignServices size={20} />, "/Design", "Bedroom")}
        {menuItem("Contact Us", <FiPhone size={20} />, "/Contact", "contactus")}

        <hr className="my-4 border-t border-sky-300" />

        {menuItem("My Account", <FiLock size={20} />, "/account", "account")}
        {menuItem("My Wishlist", <BsHeadphones size={20} />, "/wishlist", "wishlist")}
        {menuItem("My Appointment", <TbArrowBigRightLines size={20} />, "/appointment", "appointment")}
        {menuItem("Price Estimate", <FiLock size={20} />, "/price-estimate", "price")}
        {menuItem("Full Home Estimate", <BsHeadphones size={20} />, "/full-estimate", "fullestimate")}
        {menuItem("Kitchen Estimate", <TbArrowBigRightLines size={20} />, "/kitchen", "kitchen")}
        {menuItem("Customer Support", <TbArrowBigRightLines size={20} />, "/support", "support")}
      </div>

      {/* Logout Button */}
      <div className="mt-6">
        <button
          onClick={() => {
            setFirstName("");         // Clear firstName
            setMobileNumber("");      // Clear mobileNumber
            goToPage("/home");        // Navigate to home
          }}
          className="w-full bg-sky-400 text-white font-semibold py-3 rounded-lg text-lg flex items-center justify-center gap-2"
        >
          <FiLogOut size={20} /> Logout
        </button>
      </div>
    </div>
  );
};

export default HomeMobile;
