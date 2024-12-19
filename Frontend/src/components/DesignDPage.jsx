import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Home } from '../HomePage/HomePage'
import Maskgroup1 from '../assets/Maskgroup25.png';
import Maskgroup2 from '../assets/Maskgroup26.png';
import Maskgroup3 from '../assets/Maskgroup27.png';
import Maskgroup4 from '../assets/Maskgroup28.png';
import Maskgroup5 from '../assets/Maskgroup29.png';
import Maskgroup6 from '../assets/Maskgroup30.png';
import Maskgroup7 from '../assets/Maskgroup31.png';
import Maskgroup8 from '../assets/Maskgroup32.png';
import Maskgroup9 from '../assets/Mask group (16).png';
import Maskgroup10 from '../assets/Mask group (17).png';
import Maskgroup11 from '../assets/Mask group (18).png';
import Maskgroup12 from '../assets/Mask group (19).png';

const items = [
  { img: Maskgroup1},
  { img: Maskgroup2},
  { img: Maskgroup3},
  { img: Maskgroup4},
  { img: Maskgroup5},
  { img: Maskgroup6},
  { img: Maskgroup7},
  { img: Maskgroup8},
  { img: Maskgroup9},
  { img: Maskgroup10},
  { img: Maskgroup11},
  { img: Maskgroup12},
];

const DesginDpage = () => {
  return (
    <>
        <Navbar />
        <Home Desgin="Bedroom"/>
        <hr className="mt-10 border-t-1 border-black" />
        <div className="flex justify-center items-center m-12">
          <h1 className="text-center text-3xl text-sky-400 font-semibold">Wardrobe Designs</h1>
        </div>
        <div className="grid grid-cols-4 m-10 justify-center items-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col mb-10 items-center">
              <img src={item.img} alt={`Img${index}`} className="w-80 h-80 text-justify rounded-md" />
            </div>
          ))}
        </div>
        <Footer />
    </>
  )
}

export default DesginDpage
