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
        <div className="flex justify-between items-center mb-6 mt-10 ml-8">
          <h1 className="text-left text-3xl font-semibold">Modular Kitchen Designs</h1>
          <button onClick={() => navigate('/Kitchen')} className="text-sky-400 text-xl ml-auto mr-10 font-semibold">See All</button>
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
