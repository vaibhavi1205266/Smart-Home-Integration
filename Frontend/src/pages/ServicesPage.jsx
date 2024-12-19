import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import smartLightingImg from '../assets/Maskgroup30.png';
import homeSecurityImg from '../assets/Maskgroup26.png';
import energyManagementImg from '../assets/Maskgroup20.png';
import entertainmentImg from '../assets/Maskgroup10.png';
import voiceControlImg from '../assets/Maskgroup13.png';
import smartAppliancesImg from '../assets/Maskgroup16.png';


const ItemType = {
  CARD: 'card',
};


const ServiceCard = ({ service, index, moveCard, hoveredIndex, setHoveredIndex }) => {
  const [, ref] = useDrag({
    type: ItemType.CARD,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.CARD,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  // Handle hover state
  const isHovered = index === hoveredIndex;

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-move"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div
        className={`w-full h-64 transition duration-300 ${
          isHovered ? 'blur-0' : 'blur-sm'
        }`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const [services, setServices] = useState([
    {
      title: 'Smart Lighting Solutions',
      description:
        'Experience personalized lighting control that adapts to your lifestyle. Create the perfect ambiance with automation, energy efficiency, and convenience.',
      image: smartLightingImg,
    },
    {
      title: 'Advanced Home Security',
      description:
        'Protect your home with cutting-edge security systems, including smart cameras, motion sensors, and real-time alerts, ensuring peace of mind.',
      image: homeSecurityImg,
    },
    {
      title: 'Energy Management',
      description:
        'Optimize your energy usage with smart thermostats and power monitoring systems designed to reduce costs and promote sustainability.',
      image: energyManagementImg,
    },
    {
      title: 'Personalized Entertainment',
      description:
        'Transform your living room with immersive home theater setups and multi-room audio systems tailored to deliver exceptional entertainment experiences.',
      image: entertainmentImg,
    },
    {
      title: 'Voice-Control Integration',
      description:
        'Enable hands-free control of your home using voice assistants like Alexa, Google Assistant, or Siri for added convenience and accessibility.',
      image: voiceControlImg,
    },
    {
      title: 'Smart Appliances',
      description:
        'Upgrade your home with intelligent appliances that make daily chores easier, efficient, and connected for seamless living.',
      image: smartAppliancesImg,
    },
  ]);

  // State to track which card is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Function to handle card reordering
  const moveCard = (fromIndex, toIndex) => {
    const updatedServices = [...services];
    const [movedCard] = updatedServices.splice(fromIndex, 1);
    updatedServices.splice(toIndex, 0, movedCard);
    setServices(updatedServices);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gray-50 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-6xl text-green-600 font-semibold mb-4">Our Services</h2>
            <h1 className="text-4xl font-bold text-gray-800">
              Elevating Your Living Experience
            </h1>
            <p className="text-gray-600 mt-4">
              Explore our wide range of home automation solutions designed to make your home smarter, safer, and more connected.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                moveCard={moveCard}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default ServicesPage;
