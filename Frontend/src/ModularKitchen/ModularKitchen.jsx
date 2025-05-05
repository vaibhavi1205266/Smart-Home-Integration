import React from 'react';
import Maskgroup9 from '../assets/Maskgroup9.png';
import Maskgroup10 from '../assets/Maskgroup10.png';
import Maskgroup11 from '../assets/Maskgroup11.png';
import Maskgroup12 from '../assets/Maskgroup12.png';
import { useNavigate } from 'react-router-dom';

const items = [
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/c84a9mw2w1ibrkr1bttp.png"},
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/dqebyhdgjg7u2ijvtcsk.png"},
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/c4zb1echh5pktje7iyrh.png"},
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/d0givotft0n8pllhjft7.png"},
];

export const ModularKitchen = () => {
  const navigate = useNavigate();
    return (
      <>
        <div className="flex justify-between items-center mb-6 mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 ml-2 sm:ml-4 md:ml-6 lg:ml-7 xl:ml-8">
          <h1 className="text-left text-base  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Modular Kitchen Designs</h1>
          <button onClick={() => navigate('/Kitchen')} className="text-sky-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ml-auto mr-4 sm:mr-6 md:mr-7 lg:mr-8  xl:mr-10 font-semibold">See All</button>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-center items-center md:hidden">
          {items.slice(0, 2).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.img}
                alt={`Img${index}`}
                className="object-cover w-40 h-32 sm:w-72 sm:h-60 rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="hidden md:grid grid-cols-4 gap-4 justify-center items-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.img}
                alt={`Img${index}`}
                className="object-cover w-40 h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80 rounded-md"
              />
            </div>
          ))}
        </div>
      </>
    );
  };
