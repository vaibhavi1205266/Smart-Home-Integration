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

    const [activeId, setActiveId] = useState(""); // Start with an empty activeId
        
        const backgroundcolorchange = (id) => {
            setActiveId(id);
            if (!selectedItems.includes(id)) {
            setSelectedItems((prev) => [...prev, id]);
            }
    };

  return (
    <>
      <Navbar />
      <Home Desgin = "Home" />
      <hr className="mt-10 border-t-1 border-black" />
      <div>
        <h1 className="font-sans text-4xl font-medium mt-14 mb-2 text-center">Let's Get Started</h1>
        <p className="font-sans text-xl font-medium mb-8 text-center">Step 1 of 3</p>
        <div className="flex justify-center items-center mb-20">
          <div className="h-[500px] max-w-6xl bg-white rounded-lg shadow-lg border border-sky-400 p-6 relative">
            <div className="flex h-full">
              <div className="flex-1 px-6">
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Home Configuration</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {["1 BHK", "2 BHK", "3 BHK", "4 BHK"].map((floorplan) => (
                      <button
                        key={floorplan}
                        onClick={() => handleFloorplanClick(floorplan)}
                        className={`border py-2 px-4 rounded-lg ${
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
                    <p className="text-red-500 mt-2">Please select a home configuration.</p>
                  )}
                </div>

                <div className='mb-4'>
                  <h3 className="text-lg font-bold mb-4">Purpose</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["New Home", "Renovate"].map((purpose) => (
                      <button
                        key={purpose}
                        onClick={() => handlePurposeClick(purpose)}
                        className={`border py-2 px-4 rounded-lg ${
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
                  <p className="text-red-500 mt-2">Please select your purpose.</p>
                )}
                <span className="mb-2 font-medium">Shape:</span>
                <div className='flex mt-4 gap-8'>
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" className='h-4'/>
                </div>
                {
                    <div className="mt-4">
                    <div className="flex space-x-10">
                    <div className="flex">
                        <input type="radio" id="u-shape" name="shape" className="peer hidden" onClick={() => handleSelect("U-Shape")} />
                        <label htmlFor="u-shape" className={`mt-[6px] w-3 h-3 rounded-full border-[1.25px] flex items-center justify-center cursor-pointer ${selectedShape === "U-Shape" ? "bg-sky-400 border-sky-400" : "border-sky-400"}`}>
                        </label>
                        <span className="ml-2">U-Shape</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="radio" id="l-shape" name="shape" className="peer hidden" onClick={() => handleSelect("L-Shape")}/>
                        <label htmlFor="l-shape" className={`w-3 h-3 rounded-full border-[1.25px] flex items-center justify-center cursor-pointer ${selectedShape === "L-Shape" ? "bg-sky-400 border-sky-400" : "border-sky-400"}`}
                        ></label>
                        <span className="ml-2">L-Shape</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="radio" id="parallel" name="shape" className="peer hidden" onClick={() => handleSelect("Parallel")} />
                        <label htmlFor="parallel" className={`w-3 h-3 rounded-full border-[1.25px] flex items-center justify-center cursor-pointer ${selectedShape === "Parallel" ? "bg-sky-400 border-sky-400" : "border-sky-400"}`}>
                        </label>
                        <span className="ml-2">Parallel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="radio" id="straight" name="shape"className="peer hidden" onClick={() => handleSelect("Straight")}/>
                        <label htmlFor="straight" className={`w-3 h-3 rounded-full border-[1.25px] flex items-center justify-center cursor-pointer ${selectedShape === "Straight" ? "bg-sky-400 border-sky-400" : "border-sky-400"}`}>
                        </label>
                        <span className="ml-2">Straight</span>
                    </div>
                    </div>
                </div>
                }
                {
                selectedShape === "U-Shape"? <ModularKitchenA kitchen="work"/>
                : selectedShape === "L-Shape" ? <ModularKitchenB kitchen="work"/> : selectedShape === "Parallel" ?
                <ModularKitchenC kitchen="work"/> : <ModularKitchenD kitchen="work"/>
                }
              </div>
              <div className="flex-1 px-6 border-l -mt-6 -mb-6 border-sky-300 flex flex-col items-center justify-between h-[500px]">
                <img src={image1} alt="Home Illustration" className=" w-60 mt-14" />
                <h3 className="text-lg font-bold text-center -mt-8">
                  Your Ideas. Our Expertise.
                </h3>
                <p className="text-sm text-gray-600 ml-10 mr-10 text-justify -mt-8 mb-14">
                  Our 600+ design experts use state-of-the-art 3D design technology,
                  SpaceCraft, to ensure that you get the perfect designs for your
                  home. Wait no more! Start your home interiors journey with us.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-28 right-48 mb-8">
            <button
              onClick={handleNext}
              className="px-10 py-2 border-white shadow-md shadow-gray-700 bg-sky-400 text-black font-medium font-montserrat rounded-lg"
            >
              Book
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KitchenPage;
