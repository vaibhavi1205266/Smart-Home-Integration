import React from 'react';
import SlideImg from '../assets/Group 783.png';

export const Session = () => {

  return (
    <>
      <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-10 sm:mt-12  md:mt-14 lg:mt-16 xl:mt-20 mb-2 sm:mb-4 md:mb-6 lg:mb-7 xl:mb-8'>What is a Design Session?</h1>
      <div>
          <img src={SlideImg} alt="Design session" className='w-[500px] sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1400px] sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20'/>
      </div>
      <hr className="border-t-1 border-gray-950 mt-12 mb-8" />
    </>
  );
};
