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
      <div className="absolute -bottom-6 left-[245px] py-8">
        <button
          onClick={() => navigate("/getHomeEstimateA")}
          className="px-10 py-2 border-2 border-white shadow-md shadow-gray-700 bg-white text-black font-medium font-montserrat rounded-lg"
        >
          Back
        </button>
      </div>
      <div className="absolute -bottom-6 right-[245px] mb-8">
        <button
          className="px-10 py-2 border-white shadow-md shadow-gray-700 bg-sky-400 text-black font-medium font-montserrat rounded-lg"
          onClick={nextPage}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default ButtonPage;
