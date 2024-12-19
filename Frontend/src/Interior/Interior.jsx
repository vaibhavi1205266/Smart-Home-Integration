import React, { useState, useEffect } from 'react';
import ImgInterior from '../assets/ImgInterior1.png';

export const Interior = () => {
  const [currentStep, setCurrentStep] = useState(1); // Start from step 1

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep === 3 ? 1 : prevStep + 1));
    }, 2000); // Change step every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const getText = () => {
    if (currentStep === 1) return 'Discover';
    if (currentStep === 2) return 'Design';
    if (currentStep === 3) return 'Completed';
  };

  const getMargin = () => {
    if (currentStep === 1) return 'ml-0'; // No margin for step 1
    if (currentStep === 2) return 'ml-28'; // Move to the middle for step 2
    if (currentStep === 3) return 'ml-60'; // Move further for step 3
  };

  const paraText1 = () => {
    if(currentStep === 1) return 'Explore more than just modular design ideas';
    if(currentStep === 2) return 'Complete the design with painting flooring';
    if(currentStep === 3) return 'Move in with ease , with our hassle-free';
  }
  const paraText2 = () => {
    if(currentStep === 1) return 'with our experts.';
    if(currentStep === 2) return 'other decor solutions.';
    if(currentStep === 3) return 'civil work and installation services.';
  }

  return (
    <>
      <div className='grid grid-cols-2 mt-20 m-20'>
        <img src={ImgInterior} alt="" />
        <div className='mt-32 ml-24'>
        <h1 className='text-3xl mb-8'>Complete home interiors in 3 easy steps</h1>
          <div className='flex items-center'>
            <div className={`pt-[2px] pl-[9px] h-8 w-8 border-2 rounded-full ${currentStep === 1 ? 'bg-sky-400' : 'bg-white'}`}>
              1
            </div>
            <p>------------</p>
            <div className={`pt-[2px] pl-[9px] h-8 w-8 border-2 rounded-full ${currentStep === 2 ? 'bg-sky-400' : 'bg-white'}`}>
              2
            </div>
            <p>--------------</p>
            <div className={`pt-[2px] pl-[9px] h-8 w-8 border-2 rounded-full ${currentStep === 3 ? 'bg-sky-400' : 'bg-white'}`}>
              3
            </div>
          </div>

          {/* Add margin dynamically based on the step */}
          <div className={`transition-transform ease-linear duration-500 mt-2 ${getMargin()}`}>
            <h2 className='text-sky-400'>{getText()}</h2>
          </div>
          <p className='mt-4'>{paraText1()}</p>
          <p>{paraText2()}</p>
        </div>
      </div>
      <hr className="border-t-1 border-gray-950 mt-12 mb-8" />
    </>
  );
};
