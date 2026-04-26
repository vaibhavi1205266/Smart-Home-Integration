import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const logo = "/vs-logo.png";

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
        src={logo}
        alt="Smart Home Logo"
        className="w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/10 xl:w-1/12 object-contain"
      />
    </div>
  )
}

export default FetchingPage
