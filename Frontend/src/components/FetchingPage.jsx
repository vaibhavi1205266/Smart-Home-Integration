import React from 'react'
import image1 from "../assets/DLN Logo 1.png"
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
    <div className='bg-sky-400 flex justify-center items-center h-screen w-screen'>
        <img src={image1} alt=""/>
    </div>
  )
}

export default FetchingPage
