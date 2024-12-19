import React, { useState, useEffect } from 'react';
import Banner1 from '../assets/BannerPage.png';
import Banner2 from '../assets/BannerPage2.png';
import Banner3 from '../assets/BannerPage3.png';

export const Banner = () => {
  const images = [Banner1, Banner2, Banner3];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex justify-center items-center">
      <img 
        className='w-full h-[720px]' 
        src={images[currentIndex]} 
        alt="Banner" 
      />
    </div>
  );
}
