import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ButtonPage = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/getHomeEstimateC");
    setTimeout(() => {
      toast.success("Booking successful!");
    }, 1000);
  };
  
  

  return (
    <div>
      <div className="flex justify-center gap-72 sm:gap-96 md:gap-[600px] lg:gap-[800px] mb-12 -mt-24">
          <button
            type="button"
            onClick={() => navigate(-1)} // Navigate back
            className="px-6 py-1 md:px-10 md:py-2 border-white shadow-md shadow-gray-700 bg-white text-black font-medium font-montserrat text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg rounded-lg"
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextPage} // Existing logic
            className="px-6 py-2 md:px-10 md:py-2 border-white shadow-md shadow-gray-700 bg-sky-400 text-black font-medium font-montserrat text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg rounded-lg"
          >
            Next
          </button>
        </div>
    </div>
  );
};

export default ButtonPage;
