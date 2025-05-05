import React from 'react';
import { useNavigate } from 'react-router-dom';

const items = [
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/kgwxeg0aaknmx5xz4pkm.png"},
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/nwrruwdsluah1243p1cd.png"},
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/cii9ucvbtl04oq2e1yyf.png"},
  { img: "https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/pchu8zm97qxgjtqolc52.png"},
];

export const LivingRoom = () => {

  const navigate = useNavigate();
  
    return (
      <>
        <div className="flex justify-between items-center mb-6 mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 ml-2 sm:ml-4 md:ml-6 lg:ml-7 xl:ml-8">
          <h1 className="text-left text-base  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">Living Room Designs</h1>
          <button onClick={() => navigate('/LivingRoom')} className="text-sky-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl ml-auto mr-4 sm:mr-6 md:mr-7 lg:mr-8  xl:mr-10 font-semibold">See All</button>
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
