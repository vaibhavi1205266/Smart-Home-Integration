import React from 'react';
import Maskgroup34 from "../assets/Maskgroup34.jpeg";
import Maskgroup35 from "../assets/Maskgroup35.webp";
import Maskgroup36 from "../assets/Maskgroup36.png";

export const CustomerReview = () => {
  const teamMembers = [
    {
      name: 'Name 1',
      designation: 'Designation 1',
      shortDesc: "Lorem ipsum dolor sit amet. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      longDesc: "Lorem ipsum dolor sit amet. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: Maskgroup34,
    },
    {
      name: 'Name 2',
      designation: 'Designation 2',
      shortDesc: "Lorem ipsum dolor sit amet. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      longDesc: "Lorem ipsum dolor sit amet. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: Maskgroup35,
    },
    {
      name: 'Name 3',
      designation: 'Designation 3',
      shortDesc: "Lorem ipsum dolor sit amet. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      longDesc: "Lorem ipsum dolor sit amet. consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: Maskgroup36,
    },
  ];

  return (
    <>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center xl:mt-20 mb-2 sm:mb-4 md:mb-6 lg:mb-8  xl:mb-8'>
        What Our Customers Saying
      </h1>
      <div className="flex justify-center  px-4 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-[600px] md:w-[500px] xl:w-[600px] text-center rounded-lg p-6  bg-white"
          >
            <img
              src={member.imageUrl}
              alt={`${member.name}'s avatar`}
              className="w-10 h-10 sm:w-10 sm:h-10 md:w-20  md:h-20 lg:w-30 lg:h-30 xl:w-40 xl:h-40 rounded-full mx-auto mb-4"
            />
            
            {/* Short Description on small screens */}
            <p className="text-black text-xs mb-4 block md:hidden">{member.shortDesc}</p>

            {/* Long Description on medium and larger screens */}
            <p className="text-black text-sm mb-4 hidden md:block">{member.longDesc}</p>

            <h3 className="text-black text-sm font-semibold">{member.name}</h3>
            <p className="text-black text-sm">{member.designation}</p>
          </div>
        ))}
      </div>
    </>
  );
};
