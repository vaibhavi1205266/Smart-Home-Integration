import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { Home } from '../HomePage/HomePage'
import Maskgroup1 from '../assets/Maskgroup1.png';
import Maskgroup2 from '../assets/Maskgroup2.png';
import Maskgroup3 from '../assets/Maskgroup3.png';
import Maskgroup4 from '../assets/Maskgroup4.png';
import Maskgroup5 from '../assets/Maskgroup5.png';
import Maskgroup6 from '../assets/Maskgroup6.png';
import Maskgroup7 from '../assets/Maskgroup7.png';
import Maskgroup8 from '../assets/Maskgroup8.png';
import Maskgroup9 from '../assets/Mask group.png';
import Maskgroup10 from '../assets/Mask group (1).png';
import Maskgroup11 from '../assets/Mask group (2).png';
import Maskgroup12 from '../assets/Mask group (3).png';
import Maskgroup13 from '../assets/Mask group (4).png';
import Maskgroup14 from '../assets/Mask group (5).png';
import Maskgroup15 from '../assets/Mask group (6).png';
import Maskgroup16 from '../assets/Mask group (7).png';
import Maskgroup20 from '../assets/Maskgroup9.png';
import Maskgroup19 from '../assets/Maskgroup10.png';
import Maskgroup18 from '../assets/Maskgroup11.png';
import Maskgroup17 from '../assets/Maskgroup12.png';
import Maskgroup21 from '../assets/Maskgroup13.png';
import Maskgroup22 from '../assets/Maskgroup14.png';
import Maskgroup23 from '../assets/Maskgroup15.png';
import Maskgroup24 from '../assets/Maskgroup16.png';
import Maskgroup25 from '../assets/Mask group (8).png';
import Maskgroup26 from '../assets/Mask group (9).png';
import Maskgroup27 from '../assets/Mask group (10).png';
import Maskgroup28 from '../assets/Mask group (11).png';
import Maskgroup29 from '../assets/Maskgroup17.png';
import Maskgroup30 from '../assets/Maskgroup18.png';
import Maskgroup31 from '../assets/Maskgroup19.png';
import Maskgroup32 from '../assets/Maskgroup20.png';
import Maskgroup33 from '../assets/Maskgroup21.png';
import Maskgroup34 from '../assets/Maskgroup22.png';
import Maskgroup35 from '../assets/Maskgroup23.png';
import Maskgroup36 from '../assets/Maskgroup24.png';
import Maskgroup37 from '../assets/Mask group (12).png';
import Maskgroup38 from '../assets/Mask group (13).png';
import Maskgroup39 from '../assets/Mask group (14).png';
import Maskgroup40 from '../assets/Mask group (15).png';
import Maskgroup41 from '../assets/Maskgroup25.png';
import Maskgroup42 from '../assets/Maskgroup26.png';
import Maskgroup43 from '../assets/Maskgroup27.png';
import Maskgroup44 from '../assets/Maskgroup28.png';
import Maskgroup45 from '../assets/Maskgroup29.png';
import Maskgroup46 from '../assets/Maskgroup30.png';
import Maskgroup47 from '../assets/Maskgroup31.png';
import Maskgroup48 from '../assets/Maskgroup32.png';
import Maskgroup49 from '../assets/Mask group (16).png';
import Maskgroup50 from '../assets/Mask group (17).png';
import Maskgroup51 from '../assets/Mask group (18).png';
import Maskgroup52 from '../assets/Mask group (19).png';

const items1 = [
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
  { img: Maskgroup13},
  { img: Maskgroup14},
  { img: Maskgroup15},
  { img: Maskgroup16},
];
const items2 = [
    { img: Maskgroup17},
    { img: Maskgroup18},
    { img: Maskgroup19},
    { img: Maskgroup20},
    { img: Maskgroup21},
    { img: Maskgroup22},
    { img: Maskgroup23},
    { img: Maskgroup24},
    { img: Maskgroup25},
    { img: Maskgroup26},
    { img: Maskgroup27},
    { img: Maskgroup28},
  ];
  const items3 = [
    { img: Maskgroup29},
    { img: Maskgroup30},
    { img: Maskgroup31},
    { img: Maskgroup32},
    { img: Maskgroup33},
    { img: Maskgroup34},
    { img: Maskgroup35},
    { img: Maskgroup36},
    { img: Maskgroup37},
    { img: Maskgroup38},
    { img: Maskgroup39},
    { img: Maskgroup40},
  ];
  const items4 = [
    { img: Maskgroup41},
    { img: Maskgroup42},
    { img: Maskgroup43},
    { img: Maskgroup44},
    { img: Maskgroup45},
    { img: Maskgroup46},
    { img: Maskgroup47},
    { img: Maskgroup48},
    { img: Maskgroup49},
    { img: Maskgroup50},
    { img: Maskgroup51},
    { img: Maskgroup52},
  ];

const Desgin = () => {
  return (
    <>
        <Navbar />
        <Home Desgin="Bedroom"/>
        <hr className="mt-10 border-t-1 border-black" />
        <div className="flex justify-center items-center m-12">
          <h1 className="text-center text-3xl text-sky-400 font-semibold">Bed Room</h1>
        </div>
        <div className="grid grid-cols-4 m-10 justify-center items-center">
          {items1.map((item, index) => (
            <div key={index} className="flex flex-col mb-10 items-center">
              <img src={item.img} alt={`Img${index}`} className="w-80 h-80 text-justify rounded-md" />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center m-12">
          <h1 className="text-center text-3xl text-sky-400 font-semibold">Modular Kitchen Designs</h1>
        </div>
        <div className="grid grid-cols-4 m-10 justify-center items-center">
          {items2.map((item, index) => (
            <div key={index} className="flex flex-col mb-10 items-center">
              <img src={item.img} alt={`Img${index}`} className="w-80 h-80 text-justify rounded-md" />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center m-12">
          <h1 className="text-center text-3xl text-sky-400 font-semibold">Living Room Designs</h1>
        </div>
        <div className="grid grid-cols-4 m-10 justify-center items-center">
          {items3.map((item, index) => (
            <div key={index} className="flex flex-col mb-10 items-center">
              <img src={item.img} alt={`Img${index}`} className="w-80 h-80 text-justify rounded-md" />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center m-12">
          <h1 className="text-center text-3xl text-sky-400 font-semibold">Wardrobe Designs</h1>
        </div>
        <div className="grid grid-cols-4 m-10 justify-center items-center">
          {items4.map((item, index) => (
            <div key={index} className="flex flex-col mb-10 items-center">
              <img src={item.img} alt={`Img${index}`} className="w-80 h-80 text-justify rounded-md" />
            </div>
          ))}
        </div>
        <Footer />
    </>
  )
}

export default Desgin

