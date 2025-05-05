import React, { useState, useEffect } from 'react';

export const Banner = () => {
  const image1 = "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/ebixxdj8jstsw9ipa3y8.png";
  const image2 = "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/rdt9hsk76urnnzx2urjd.png";
  const image3 = "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/dq6cry8keuvz0uijqnwv.png";
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="-mt-1 relative flex justify-center items-center">
      <img 
        className='h-[400px] sm:h-[500px] xl:h-[700px] w-full object-fill rounded-lg shadow-lg' 
        src={images[currentIndex]} 
        alt="Banner" 
      />
    </div>
  );
}
