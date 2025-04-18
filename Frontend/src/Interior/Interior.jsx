import React, { useState, useEffect } from 'react';
import ImgInterior from '../assets/ImgInterior1.png';

export const Interior = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep === 3 ? 1 : prevStep + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const paraText = [
    ['Explore more than just modular design ideas', 'with our experts.'],
    ['Complete the design with painting flooring', 'other decor solutions.'],
    ['Move in with ease, with our hassle-free', 'civil work and installation services.'],
  ];

  return (
    <>
      <div className='flex justify-between mt-16 px-4 md:px-20'>
        
        {/* Image Section */}
        <div className='min-w-[300px] max-w-[400px] shrink-0'>
          <img
            src={ImgInterior}
            alt="Interior"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[600px] h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className='min-w-[200px] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] -ml-8 md:ml-8 lg:ml-12 xl:ml-16'>
          <h3 className='text-xs sm:text-base lg:text-lg xl:text-xl font-semibold mb-12 mt-8'>
            Complete home interiors in 3 easy steps
          </h3>

          {/* Step Indicator with Labels */}
          <div className="w-full max-w-md mx-auto mt-4">
            {/* Step Circles + Dashed Line */}
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((num, index) => (
                <React.Fragment key={num}>
                  <div className="flex flex-col items-center">
                    {/* Step Circle */}
                    <div
                      className={`flex items-center justify-center h-6 w-6 rounded-full border-2 text-sm font-semibold shadow transition-all duration-300 ${
                        currentStep === num
                          ? 'bg-sky-500 text-white border-sky-500'
                          : 'bg-white text-black border-gray-400'
                      }`}
                    >
                      {num}
                    </div>

                    {/* Step Label */}
                    <h2
                      className={`mt-2 text-xs sm:text-sm md:text-base font-semibold transition-opacity duration-300 ${
                        currentStep === num ? 'text-sky-500 opacity-100' : 'text-white opacity-30'
                      }`}
                    >
                      {['Discover', 'Design', 'Completed'][index]}
                    </h2>
                  </div>

                  {/* Dashed Line (between steps) */}
                  {index !== 2 && (
                    <div className="flex-1 h-6 md:h-8 border-t-2 border-dashed border-gray-800 px-2"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>


          {/* Paragraphs */}
          <p className='mt-6 text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
            {paraText[currentStep - 1][0]}
          </p>
          <p className='text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
            {paraText[currentStep - 1][1]}
          </p>
        </div>
      </div>

      <hr className="border-t border-gray-300 mt-16 mx-6 md:mx-20" />
    </>
  );
};
