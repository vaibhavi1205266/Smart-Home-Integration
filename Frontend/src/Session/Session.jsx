import React, { useState, useEffect } from 'react';
import SlideImg from '../assets/Group 783.png';

export const Session = () => {

  return (
    <>
      <h1 className='text-4xl ml text-center mt-20 mb-8'>What is a Design Session?</h1>
      <div>
          <img src={SlideImg} alt="Design session" className='ml-20'/>
      </div>
      <hr className="border-t-1 border-gray-950 mt-12 mb-8" />
    </>
  );
};
