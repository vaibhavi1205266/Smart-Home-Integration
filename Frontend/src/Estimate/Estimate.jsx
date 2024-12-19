import React from 'react';
import Icon1 from '../assets/Icon1.png';
import Icon2 from '../assets/Vector (10).png';
import Icon3 from '../assets/Icon3.png';
import { useNavigate } from 'react-router-dom';
import { useUser } from "../context/UserContext";
import { toast } from "react-hot-toast";

export const Estimate = () => {
  const navigate = useNavigate();
  const { firstName } = useUser();

  const nextHomePage = () => {
    if(firstName) {
      navigate('/getHomeEstimate');
    }
    else{
      toast.error("Please sign in to get home estimate.");
    }
  };

  const nextKitchenPage = () => {
    if(firstName) {
      navigate('/kitchenEstimate');
    }
    else{
      toast.error("Please sign in to get kitchen estimate.");
    }
  }

  
  return (
    <>
      <h1 className='text-4xl text-center mt-16'>Get an estimate for your home.</h1>
      <p className='text-xl text-center mt-2'>Calculate the cost of doing up your home interiors now.</p>
      <div className="flex justify-center mt-8 space-x-8">
        <div className="bg-white text-black p-6 rounded-lg shadow-md border-2 shadow-slate-700 w-1/3">
          <div className="flex justify-between items-center">
            <div>
              <img src={Icon1} alt="Full Home Icon" width="40" height="40"  className='ml-4'/>
            </div>
            <div>
              <img src={Icon2} alt="Calculator Icon" width="40" height="40" />
            </div>
          </div>
          <h2 className="mt-4 text-lg font-semibold">Full Home Interiors</h2>
          <p className="mt-2 text-sm text-left">Get the estimate price for your</p>
          <p className="mt-2 text-sm text-left">Full home interiors.</p> 
          <button onClick={nextHomePage} className="mt-4 bg-sky-500 text-white px-4 py-2 rounded">Get Free Estimate</button>
        </div>
        <div className="bg-white text-black p-6 rounded-lg shadow-md border-2 shadow-slate-700 w-1/3">
          <div className="flex justify-between items-center">
            <div>
              <img src={Icon3} alt="Kitchen Icon" width="40" height="40" className='ml-4'/>
            </div>
            <div>
              <img src={Icon2} alt="Calculator Icon" width="40" height="40" />
            </div>
          </div>
          <h2 className="mt-4 text-lg font-semibold">Kitchen</h2>
          <p className="mt-2 text-sm text-left">Get costing for your</p>
          <p className="mt-2 text-sm text-left">Kitchen interiors.</p> 
          <button onClick={nextKitchenPage} className="mt-4 bg-sky-500 text-white px-4 py-2 rounded">Get Free Estimate</button>
        </div>
      </div>
    </>
  );
}
