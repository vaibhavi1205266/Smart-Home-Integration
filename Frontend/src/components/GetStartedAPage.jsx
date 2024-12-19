import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { z } from "zod";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../HomePage/HomePage";
import { Footer } from "../Footer/Footer";
import image1 from "../assets/imaging1.png";

const requirementsSchema = z.object({
  bedroom: z.boolean(),
  modularKitchen: z.boolean(),
  livingRoom: z.boolean(),
  wardrobe: z.boolean(),
}).refine((data) => Object.values(data).includes(true), {
  message: "Please select at least one requirement.",
});

const GetStartedAPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { floorplan, purpose } = location.state || {};
  const [requirements, setRequirements] = useState({
    bedroom: false,
    modularKitchen: false,
    livingRoom: false,
    wardrobe: false,
  });
  const [error, setError] = useState("");

  const handleInputClick = (requirement) => {
    setRequirements((prev) => ({
      ...prev,
      [requirement]: !prev[requirement],
    }));
    setError("");
  };

  const handleNext = () => {
    try {
      requirementsSchema.parse(requirements);
      navigate("/getHomeEstimateB", {
        state: { requirements, floorplan, purpose },
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <Home Desgin = "Home"/>
      <hr className="mt-10 border-t-1 border-black" />
      <div>
        <h1 className="font-sans text-4xl font-medium mt-14 mb-2 text-center">Tell Us What You Need</h1>
        <p className="font-sans text-xl font-medium mb-8 text-center">Step 2 of 3</p>
        <div className="flex justify-center items-center mb-20">
          <div className="w-[90%] max-w-5xl bg-white rounded-lg shadow-lg border border-sky-400 p-6 relative">
            <div className="flex h-full">
              <div className="flex-1 px-6">
                <div className="mb-8">
                  <h1 className="-ml-6 font-sans font-medium">
                    Your requirement: {floorplan} for {purpose}.
                  </h1>
                  <div className="mt-6">
                    {[
                      { label: "Bed Room", key: "bedroom" },
                      { label: "Modular Kitchen", key: "modularKitchen" },
                      { label: "Living Room", key: "livingRoom" },
                      { label: "Wardrobe", key: "wardrobe" },
                    ].map(({ label, key }) => (
                      <React.Fragment key={key}>
                        <label className="mt-6 flex justify-between items-center mb-4 -ml-6">
                          {label}
                          <button
                            type="button"
                            onClick={() => handleInputClick(key)}
                            className={`w-5 h-5 rounded-sm border-[1.25px] ${
                              requirements[key]
                                ? "bg-sky-400 border-sky-400"
                                : error
                                ? "border-red-500"
                                : "border-sky-400 bg-white"
                            }`}
                          />
                        </label>
                        <hr className="-ml-6 w-[500px] border-t-1 border-sky-400" />
                      </React.Fragment>
                    ))}
                  </div>
                  {error && <p className="text-red-500 mt-4">{error}</p>}
                </div>
              </div>
              <div className="flex-1 px-6 border-l -mt-6 -mb-6 border-sky-300 flex flex-col items-center justify-between h-[400px]">
                <img
                  src={image1}
                  alt="Home Illustration"
                  className="w-72 mt-14"
                />
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
              onClick={() => navigate("/getHomeEstimate")}
              className="px-10 py-2 border-2 border-white shadow-md shadow-gray-700 bg-white text-black font-medium font-montserrat rounded-lg"
            >
              Back
            </button>
          </div>
          <div className="absolute -bottom-2 right-[245px] mb-8">
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

export default GetStartedAPage;
