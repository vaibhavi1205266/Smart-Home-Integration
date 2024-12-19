import React from 'react'
import Maskgroup34 from "../assets/Maskgroup34.jpeg"
import Maskgroup35 from "../assets/Maskgroup35.webp"
import Maskgroup36 from "../assets/Maskgroup36.png"

export const CustomerReview = () => {
    const teamMembers = [
        {
          name: 'Name 1',
          designation: 'Designation 1',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imageUrl: Maskgroup34 // Placeholder for image
        },
        {
          name: 'Name 2',
          designation: 'Designation 2',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imageUrl: Maskgroup35
        },
        {
          name: 'Name 3',
          designation: 'Designation 3',
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          imageUrl: Maskgroup36
        }
      ];
    
      return (
        <>
        <h1 className='text-6xl text-center mt-20 mb-8'>What Our Customers Saying</h1>
        <div className="flex justify-around items-center py-10">  
          {teamMembers.map((member, index) => (
            <div key={index} className="w-1/3 text-center bg-sky-400 rounded-lg shadow-lg p-6 mx-4">
              <img 
                src={member.imageUrl} 
                alt={`${member.name}'s avatar`} 
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <p className="text-white text-sm mb-4">{member.description}</p>
              <h3 className="text-lg text-white font-semibold">{member.name}</h3>
              <p className="text-white">{member.designation}</p>
            </div>
          ))}
        </div>
        </>
      );
}
