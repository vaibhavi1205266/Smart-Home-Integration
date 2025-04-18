import React from 'react';
import Group808 from '../assets/Skyline.png';
import Group809 from '../assets/Calendar.png';
import Group810 from '../assets/Moneybag.png';
import Group811 from '../assets/Guarantee.png';
import Group812 from '../assets/Discount.png';
import Group813 from '../assets/Designer.png';

const items = [
  { img: Group808, text: "22 Cities" },
  { img: Group809, text: "Delivery in 45 days" },
  { img: Group810, text: "No Hidden Costs" },
  { img: Group811, text: "Flat 10 Year Warranty" },
  { img: Group812, text: "Easy EMIs" },
  { img: Group813, text: "600+ In-House Designers" },
];

export const WhyChooseUs = () => {
  return (
    <>
      <h1 className="text-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-5 md:mb-7 lg:mb-12 xl:mb-16 mt-8 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-24">Why Choose Us</h1>
      <div className="grid grid-cols-6 sm:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 justify-center items-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center mr-2 sm:mr-4 md:mr-6 lg:mr-8 xl:mr-10">
            <img src={item.img} alt={`Img${index}`} className="h-12 w-16 xl:h-32 xl:w-32" />
            <p className="mt-2 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-4 text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl   text-center font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
