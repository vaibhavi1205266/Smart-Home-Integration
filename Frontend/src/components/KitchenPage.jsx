import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../HomePage/HomePage';
import { Footer } from '../Footer/Footer';
import image1 from "../assets/kitchenImage.png";
import image2 from "../assets/Mask group (20).png";
import image3 from "../assets/Mask group (21).png";
import image4 from "../assets/Group 3016404.png";
import image5 from "../assets/Group 3016403.png";
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import ModularKitchenA from './ModularKitchenA';
import ModularKitchenB from './ModularKitchenB';
import ModularKitchenC from './ModularKitchenC';
import ModularKitchenD from './ModularKitchenD';

const selectionSchema = z.object({
  floorplan: z.string().nonempty("Please select a floorplan."),
  purpose: z.string().nonempty("Please select a purpose."),
});

const KitchenPage = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState({
    floorplan: "",
    purpose: "",
  });
  const [selectedShape, setSelectedShape] = useState("U-Shape");
  const [error, setError] = useState("");

  const handleFloorplanClick = (value) => {
    setSelection((prev) => ({ ...prev, floorplan: value }));
    setError("");
  };

  const handleSelect = (shape) => {
    setSelectedShape(shape);
  };

  const handlePurposeClick = (value) => {
    setSelection((prev) => ({ ...prev, purpose: value }));
    setError("");
  };

  const handleNext = () => {
    try {
      selectionSchema.parse(selection);
      navigate('/getHomeEstimateC', { state: selection });
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <Home Desgin="Home" />
      <hr className="mt-10 border-t-1 border-black" />
      <div>
        <h1 className="font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 mb-2 text-center">Let's Get Started</h1>
        <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mb-8 text-center">Step 1 of 1</p>
        <div className='flex flex-col items-center justify-center'>
          <div className="flex justify-center items-center mb-20">
          <div className="w-[80%] max-w-6xl bg-white rounded-lg shadow-lg border border-sky-400 flex relative">

              {/* Left: Form Section */}
              <div className="w-[66%] md:w-[60%] pr-4 border-r border-gray-300">
                <div className="mb-8">
                  <h3 className="ml-2 mt-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-bold mb-4">Your Floorplan</h3>
                  <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 ml-4">
                    {["1 BHK", "2 BHK", "3 BHK", "4 BHK"].map((floorplan) => (
                      <button
                        key={floorplan}
                        onClick={() => handleFloorplanClick(floorplan)}
                        className={`border text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] py-2 px-3  rounded-full md:rounded-lg flex items-center justify-center text-center ${
                          selection.floorplan === floorplan
                            ? "bg-sky-400 border-blue-500"
                            : "border-gray-400 hover:bg-blue-100"
                        }`}
                      >
                        {floorplan}
                      </button>
                    ))}
                  </div>
                  {!selection.floorplan && error.includes("floorplan") && (
                    <p className="text-red-500 mt-4 -ml-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">Please select a floorplan.</p>
                  )}
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-bold mb-4 ml-2">Purpose</h3>
                  <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 ml-4">
                    {["New Home", "Renovate"].map((purpose) => (
                      <button
                        key={purpose}
                        onClick={() => handlePurposeClick(purpose)}
                        className={`border text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] py-2 px-4 sm:py-[4px] md:py-4 rounded-full md:rounded-lg flex items-center justify-center text-center ${
                          selection.purpose === purpose
                            ? "bg-sky-400 border-blue-500"
                            : "border-gray-400 hover:bg-blue-100"
                        }`}
                      >
                        {purpose}
                      </button>
                    ))}
                  </div>
                </div>
                {!selection.purpose && error.includes("purpose") && (
                  <p className="text-red-500 mt-4 -ml-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">Please select your purpose.</p>
                )}

                <div className="mt-6">
                  <span className="mb-2 ml-2 font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">Shape:</span>
                  <div className='flex ml-4 mt-4 gap-8'>
                    <img src={image2} alt=""  className='h-8 w-8 md:h-16 md:w-16'/>
                    <img src={image3} alt="" className='h-8 w-8 md:h-16 md:w-16'/>
                    <img src={image4} alt="" className='h-8 w-8 md:h-16 md:w-16'/>
                    <img src={image5} alt="" className='h-2 w-12 md:h-4 md:w-16'/>
                  </div>
                  <div className="mt-4">
                  <div className="flex space-x-5 md:space-x-8 ml-2">
                      {["U-Shape", "L-Shape", "Parallel", "Straight"].map((shape) => (
                        <div className="flex flex-col items-center" key={shape}>
                          <input
                            type="radio"
                            id={shape.toLowerCase()}
                            name="shape"
                            className="peer hidden"
                            onClick={() => handleSelect(shape)}
                          />
                          <label
                            htmlFor={shape.toLowerCase()}
                            className={`w-3 h-3 md:w-5 md:h-5 mb-1 rounded-full border-[1.25px] flex items-center justify-center cursor-pointer ${
                              selectedShape === shape ? "bg-sky-400 border-sky-400" : "border-sky-400"
                            }`}
                          ></label>
                          <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg text-center whitespace-nowrap">
                            {shape}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    {selectedShape === "U-Shape" ? (
                      <ModularKitchenA kitchen="work" />
                    ) : selectedShape === "L-Shape" ? (
                      <ModularKitchenB kitchen="work" />
                    ) : selectedShape === "Parallel" ? (
                      <ModularKitchenC kitchen="work" />
                    ) : (
                      <ModularKitchenD kitchen="work" />
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Image + Description */}
              <div className="w-1/3 pl-4 flex flex-col items-center justify-center">
                <img
                  src={image1}
                  alt="Home Illustration"
                  className="w-72 mt-14"
                />
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-bold text-center mt-4 mb-4">
                  Your Ideas. Our Expertise.
                </h3>
                <p className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-gray-600 text-center">
                  Our 600+ design experts use state-of-the-art 3D design technology,
                  SpaceCraft, to ensure that you get the perfect designs for your
                  home. Wait no more! Start your home interiors journey with us.
                </p>
              </div>

              {/* Book Button */}
              <div className="absolute -bottom-16 right-2">
                <button
                  onClick={handleNext}
                  className="py-2 px-6 md:px-10 md:py-2 border-white shadow-md shadow-gray-700 bg-sky-400 text-black font-medium font-montserrat rounded-lg"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KitchenPage;
