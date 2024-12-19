import React, { useState, useEffect } from 'react';
import Maskgroup1 from '../assets/Maskgroup1.png';
import Maskgroup2 from '../assets/Maskgroup2.png';
import Maskgroup3 from '../assets/Maskgroup3.png';
import Maskgroup4 from '../assets/Maskgroup4.png';
import { useNavigate } from "react-router-dom";

const items = [
  { img: Maskgroup1},
  { img: Maskgroup2},
  { img: Maskgroup3},
  { img: Maskgroup4},
];

export const BedRoom = () => {
  const navigate = useNavigate();
  
    return (
      <>
        <div className="flex justify-between items-center mb-6 mt-24 ml-8">
          <h1 className="text-left text-3xl font-semibold">Bed Room Designs</h1>
          <button onClick={() => navigate('/Bedroom')} className="text-sky-400 text-xl ml-auto mr-10 font-semibold">See All</button>
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
