import React from 'react';
import Maskgroup25 from '../assets/Maskgroup25.png';
import Maskgroup26 from '../assets/Maskgroup26.png';
import Maskgroup27 from '../assets/Maskgroup27.png';
import Maskgroup28 from '../assets/Maskgroup28.png';
import { useNavigate } from 'react-router-dom';

const items = [
  { img: Maskgroup25},
  { img: Maskgroup26},
  { img: Maskgroup27},
  { img: Maskgroup28},
];

export const Wardrobe = () => {
   const navigate = useNavigate();
    return (
      <>
        <div className="flex justify-between items-center mb-6 mt-10 ml-8">
          <h1 className="text-left text-3xl font-semibold">Wardrobe Designs</h1>
          <button onClick={() => navigate('/Wardrobe')} className="text-sky-400 text-xl ml-auto mr-10 font-semibold">See All</button>
        </div>
        <div className="grid grid-cols-4 justify-center items-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.img} alt={`Img${index}`} className="w-80 h-80 text-justify rounded-md" />
            </div>
          ))}
        </div>
      </>
    );
  };
