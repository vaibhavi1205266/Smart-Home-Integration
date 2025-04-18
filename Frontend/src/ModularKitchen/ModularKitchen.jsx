import React from 'react';
import Maskgroup9 from '../assets/Maskgroup9.png';
import Maskgroup10 from '../assets/Maskgroup10.png';
import Maskgroup11 from '../assets/Maskgroup11.png';
import Maskgroup12 from '../assets/Maskgroup12.png';
import { useNavigate } from 'react-router-dom';

const items = [
  { img: Maskgroup9},
  { img: Maskgroup10},
  { img: Maskgroup11},
  { img: Maskgroup12},
];

export const ModularKitchen = () => {
  const navigate = useNavigate();
    return (
      <>
        <div className="flex justify-between items-center mb-6 mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 ml-2 sm:ml-4 md:ml-6 lg:ml-7 xl:ml-8">
          <h1 className="text-left text-base  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Modular Kitchen Designs</h1>
          <button onClick={() => navigate('/Kitchen')} className="text-sky-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ml-auto mr-4 sm:mr-6 md:mr-7 lg:mr-8  xl:mr-10 font-semibold">See All</button>
        </div>
        <div className="grid grid-cols-4 gap-4 justify-center items-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.img} alt={`Img${index}`} className="h-30 w-30 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80 rounded-md" />
            </div>
          ))}
        </div>
      </>
    );
  };
