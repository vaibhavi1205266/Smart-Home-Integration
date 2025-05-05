import React from 'react';
import image2 from "../assets/image3.png";
import { useNavigate } from 'react-router-dom';

const BoardingAPage = () => {
    const navigate = useNavigate();
  
    return (
      <div className="min-h-[90vh] flex flex-col justify-between">
        {/* Image Section */}
        <div className="relative">
        <img
        src="https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/naajhjwcyc7r1wvmntes.png"
        alt="" 
        className="
          w-[550px] h-[350px] sm:w-[780px] sm:h-[500px] md:w-[1100px] md:h-[500px] lg:w-full lg:h-[500px] bg-blue-300 border-b-[14px] border-sky-300 rounded-b-3xl" 
      />
          <button
            onClick={() => navigate('/abc')}
            className="absolute top-2 right-2 md:top-4 md:right-12 text-black px-4 py-2 text-md sm:text-lg md:text-xl lg:text-4xl"
          >
            Skip <img src={image2} alt="" className="ml-2 inline-block w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>
{/* Text Section */}
<div className="flex flex-col items-center text-center px-6 mt-2">
  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-400 font-semibold">
    Comfortable Space
  </h1>
  <p className="mt-2 text-black text-base sm:text-lg lg:text-xl">
    Thoughtfully designed for your unique lifestyle. Explore our curated collection of furniture and decor, where comfort meets style.
  </p>
</div>

{/* Bottom Controls */}
<div className="flex items-center justify-between px-8 mb-2">
  <div className="flex space-x-2">
    <div className="w-8 h-2 rounded-full bg-sky-400"></div>
    <div className="w-4 h-2 rounded-full bg-sky-200"></div>
    <div className="w-4 h-2 rounded-full bg-sky-200"></div>
  </div>
  <button
    onClick={() => navigate('/boarding2')}
    className="bg-sky-400 text-black font-semibold rounded-full px-6 py-2"
  >
    Next
  </button>
</div>

      </div>
    );
  };  

export default BoardingAPage;
