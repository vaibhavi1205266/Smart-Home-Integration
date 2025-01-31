import React from 'react';
import logo from '../../public/logo.png';

export const Footer = () => {
  const totalCircles = 5;

  return (
    <footer className="bg-sky-200 text-black py-10 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col items-center mx-32">
          <img className="h-24 w-48 mx-2 my-2" src={logo} alt="Logo" />
          <div className="flex space-x-3 mt-5">
            {Array.from({ length: totalCircles }).map((_, index) => (
              <span
                key={index}
                className={`w-8 h-8 rounded-full inline-block transition-colors duration-300 bg-gray-400`}
              ></span>
            ))}
          </div>
        </div>
        <div className="flex space-x-32">
        <div className="text-center">
          <h2
            className=" font-montserrat font-semibold
              text-[20px]
              mb-8
              text-black
            "
          >
            Quick Access
          </h2>
          <ul className="space-y-6 text-left">
            <li className="font-montserrat text-[16px] leading-[14px]">Home</li>
            <li className="font-montserrat text-[16px] leading-[14px]">About Us</li>
            <li className="font-montserrat text-[16px] leading-[14px]">Designs</li>
            <li className="font-montserrat text-[16px] leading-[14px]">Contact Us</li>
          </ul>
        </div>
        <div className="text-center">
          <h2
            className=" font-montserrat font-semibold
              text-[20px]
              mb-8
              text-black
            "
          >
            Designs
          </h2>
          <ul className="ml-12 space-y-6 text-left">
            <li className="flex font-montserrat text-[16px] leading-[14px]">Bedroom</li>
            <li className="flex font-montserrat text-[16px] leading-[14px]">Modular Kitchen</li>
            <li className="font-montserrat text-[16px] leading-[14px]">Living Room</li>
            <li className="font-montserrat text-[16px] leading-[14px]">Wardrobe</li>
          </ul>
        </div>
        <div className="text-center ">
        <h2
            className="mr-36 font-montserrat font-semibold
              text-[20px]
              mb-8
              text-black
            "
          >
            Helpline
          </h2>
          <ul className=" space-y-4 text-left">
            <li className="font-montserrat text-[16px] leading-[14px]">9548685176</li>
            <li className="font-montserrat text-[16px] leading-[14px]">deveshkumar8114@gmail.com</li>
          </ul>
        </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 flex justify-center items-center">
        <p className="text-sm text-black font-montserrat">
          Designed by Devesh Kumar, Developed by Lalit Kumar with the help of Nizam
        </p>
      </div>
    </footer>
  );
};
