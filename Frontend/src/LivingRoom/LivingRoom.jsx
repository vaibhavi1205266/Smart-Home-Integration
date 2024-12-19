import React from 'react';
import Maskgroup17 from '../assets/Maskgroup17.png';
import Maskgroup18 from '../assets/Maskgroup18.png';
import Maskgroup19 from '../assets/Maskgroup19.png';
import Maskgroup20 from '../assets/Maskgroup20.png';
import { useNavigate } from 'react-router-dom';

const items = [
  { img: Maskgroup17},
  { img: Maskgroup18},
  { img: Maskgroup19},
  { img: Maskgroup20},
];

export const LivingRoom = () => {

  const navigate = useNavigate();
  
    return (
      <>
        <div className="flex justify-between items-center mb-6 mt-10 ml-8">
          <h1 className="text-left text-3xl font-semibold">Living Room Designs</h1>
          <button onClick={() => navigate('/LivingRoom')} className="text-sky-400 text-xl ml-auto mr-10 font-semibold">See All</button>
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
