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
      <h1 className="text-center text-3xl font-bold mb-8 mt-16">Why Choose Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-10 justify-center items-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center mr-10">
            <img src={item.img} alt={`Img${index}`} className="h-32 w-32" />
            <p className="mt-4 text-center font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
