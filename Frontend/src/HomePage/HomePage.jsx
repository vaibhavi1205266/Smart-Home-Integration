import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = ({Desgin}) => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate('/home'); 
  };
  const goToAboutUs = () => {
    navigate('/AboutUs');
  };
  const goToDesignPage = () => {
    navigate('/Design');
  };
  const goToContactPage = () => {
    navigate('/Contact');
  };
  return (
    <>
        <div className='flex justify-center space-x-8 bg-white p-4'>
            <p 
              onClick={goToHomePage} 
              className={`text-black text-3xl font-medium font-poppins cursor-pointer hover:text-sky-500 ${Desgin === "Home" ? 'text-sky-400' : ''}`}
            >
              Home
            </p>
            <p 
              onClick={goToAboutUs} 
              className={`text-black text-3xl font-medium font-poppins cursor-pointer hover:text-sky-500 ${Desgin === "aboutus" ? 'text-sky-400' : ''}`}
            >
              About Us
            </p>
            <p 
              onClick={goToDesignPage} 
              className={`text-black text-3xl font-medium font-poppins cursor-pointer hover:text-sky-500 ${Desgin === "Bedroom" ? 'text-sky-400' : ''}`}
            >
              Designs
            </p>
            <p 
              onClick={goToContactPage} 
              className={`text-black text-3xl font-medium font-poppins cursor-pointer hover:text-sky-500 ${Desgin === "contactus" ? 'text-sky-400' : ''}`}
            >
              Contact Us
            </p>
        </div>
    </>
  )
}

