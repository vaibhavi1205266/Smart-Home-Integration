import React from 'react';
import { useNavigate } from 'react-router-dom';
const logo = "/vs-logo.png";

const FetchPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col  md:pt-36 lg:pt-0 lg:flex-row h-screen w-full">
      
      {/* Left Section (always visible) */}
      <div className="flex justify-center items-center w-full lg:w-1/2 lg:bg-cyan-100 p-6">
        <div className="text-center">
          <img 
            src={logo} 
            alt="VS Logo" 
            className="mx-auto h-[200px] w-[200px] mb-4" 
          />
          <p className="max-w-[500px] mx-auto leading-relaxed text-center">
            At VS Smart Home Integration, we believe your home should be more than just a place to live—it should be a space that enriches your lifestyle. Our team combines cutting-edge technology with modern design to create smart homes that are functional, beautiful, and energy-efficient.
          </p>
        </div>
      </div>

      {/* Right Section: buttons only visible on large screens */}
      <div className="hidden lg:flex justify-center items-center w-1/2 relative">
        <div className="absolute top-[370px] right-[250px] transform -translate-y-1/2">
          <button 
            onClick={() => navigate('/signin')} 
            className="block mb-4 bg-sky-300 hover:bg-sky-500 px-[85px] font-semibold font-poppins py-2 rounded-3xl"
          >
            Log In
          </button>
          <button 
            onClick={() => navigate('/signup')} 
            className="block bg-sky-300 hover:bg-sky-500 px-[80px] py-2 font-semibold font-poppins rounded-3xl"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile & Tablet: buttons below content */}
      <div className="flex flex-col lg:hidden items-center justify-center gap-3 mt-6 mb-6">
        <button 
          onClick={() => navigate('/signin')} 
          className="mb-4 bg-sky-300 hover:bg-sky-500 w-[100px] font-semibold font-poppins py-2 rounded-3xl"
        >
          Log In
        </button>
        <button 
          onClick={() => navigate('/signup')} 
          className="mb-12 bg-sky-300 hover:bg-sky-500 w-[100px] py-2 font-semibold font-poppins rounded-3xl"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default FetchPage;
