import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../HomePage/HomePage';
import { Footer } from '../Footer/Footer';
import image1 from "../assets/imaging1.png";
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useUser } from "../context/UserContext";

const selectionSchema = z.object({
  floorplan: z.string().nonempty("Please select a floorplan."),
  purpose: z.string().nonempty("Please select a purpose."),
});

const GetStartedPage = () => {
  const navigate = useNavigate();
  const { firstName } = useUser();
  const [selection, setSelection] = useState({
    floorplan: "",
    purpose: "",
  });

  const [error, setError] = useState("");

  const handleFloorplanClick = (value) => {
    setSelection((prev) => ({ ...prev, floorplan: value }));
    setError("");
  };

  const handlePurposeClick = (value) => {
    setSelection((prev) => ({ ...prev, purpose: value }));
    setError("");
  };

  const handleNext = () => {
    try {
      selectionSchema.parse(selection);
      navigate('/getHomeEstimateA', { state: selection });
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
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
          <div className="w-[90%] max-w-5xl bg-white rounded-lg shadow-lg border border-sky-400 p-6 relative">
            <div className="flex h-full">
              <div className="flex-1 px-6">
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">Your Floorplan</h3>
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
                    <p className="text-red-500 mt-2">Please select a floorplan.</p>
                  )}
                </div>

                <div>
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
              </div>

              <div className="flex-1 px-6 border-l -mt-6 -mb-6 border-sky-300 flex flex-col items-center justify-between h-[400px]">
                <img src={image1} alt="Home Illustration" className="w-72 mt-14" />
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
          <div className="absolute -bottom-2 left-[245px] mb-8">
            <button
              onClick={handleNext}
              className="px-10 py-2 border-white shadow-md shadow-gray-700 bg-sky-400 text-black font-medium font-montserrat rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetStartedPage;
