import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FetchingPage = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const timer = setTimeout(() => {
            navigate('/boarding1'); 
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);
  return (
    <div className="bg-sky-400 flex justify-center items-center h-screen w-screen px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <img
        src= "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/iybcdvpmm6rxl4l8co2k.png"
        alt="Smart Home Logo"
        className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 object-contain"
      />
    </div>
  )
}

export default FetchingPage
