import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../HomePage/HomePage";
import { Footer } from "../Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import ModularKitchenA from "./ModularKitchenA";
import ModularKitchenB from "./ModularKitchenB";
import ModularKitchenC from "./ModularKitchenC";
import ModularKitchenD from "./ModularKitchenD";
import SizePage from "./SizePage";
import ButtonPage from "./ButtonPage";

const GetStartedBPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { requirements } = location.state || {};
  const [bgColor, setBgColor] = useState("");
  const [selectedShape, setSelectedShape] = useState("U-Shape");

  const [activeTab, setActiveTab] = useState("essential");
  const [para, setPara] = useState("For homes to be rented");
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeId, setActiveId] = useState(""); // Start with an empty activeId

  const backgroundcolorchange = (id) => {
    setActiveId(id);
    if (!selectedItems.includes(id)) {
      setSelectedItems((prev) => [...prev, id]);
    }
  };
  const handleClick = () => {
    setBgColor("bg-sky-400"); 
  };

  const handleSelect = (shape) => {
    setSelectedShape(shape);
  };

  const interiors = {
    essential: [
      { id: "bedroom", label: "Bed Room", price: 1 },
      { id: "modularKitchen", label: "Kitchen", price: 1 },
      { id: "livingRoom", label: "Living Room", price: 1 },
      { id: "wardrobe", label: "Wardrobe", price: 1 },
    ],
    comfort: [
      { id: "bedroom", label: "Bed Room", price: 2 },
      { id: "modularKitchen", label: "Kitchen", price: 2 },
      { id: "livingRoom", label: "Living Room", price: 2 },
      { id: "wardrobe", label: "Wardrobe", price: 2 },
    ],
    luxury: [
      { id: "bedroom", label: "Bed Room", price: 3 },
      { id: "modularKitchen", label: "Kitchen", price: 3 },
      { id: "livingRoom", label: "Living Room", price: 3 },
      { id: "wardrobe", label: "Wardrobe", price: 3 },
    ],
  };

  useEffect(() => {
    if (requirements) {
      const initialSelections = Object.keys(requirements).filter(
        (key) => requirements[key]
      );
      setSelectedItems(initialSelections);
    }
  }, [requirements]);

  const handleTabChange = (tab) => setActiveTab(tab);

  const [bgColors, setBgColors] = useState({
    bedroom: "bg-white",
    modularkitchen: "bg-white",
    livingroom: "bg-white",
    wardrobe: "bg-white",
  });

  

  const currentItems = interiors[activeTab];

  // Set the default activeId to the first item in the currentItems list
  useEffect(() => {
    if (selectedItems.length > 0) {
      // If there are selected items, set the first selected item as activeId
      const firstSelectedItem = selectedItems.find((id) =>
        currentItems.some((item) => item.id === id)
      );
      setActiveId(firstSelectedItem || currentItems[0].id);
    } else if (currentItems.length > 0) {
      // If no selected items, default to the first item in the list
      setActiveId(currentItems[0].id);
    }
  }, [activeTab, selectedItems]);

  const totalPrice = currentItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0);

  const handleBooking = () => {
    console.log("Booking with:", selectedItems);
    navigate("/confirmation", { state: { selectedItems, totalPrice } });
  };

  useEffect(() => {
    if (activeTab === "essential") {
      setPara("For homes to be rented");
    } else if (activeTab === "comfort") {
      setPara("For the first-time homeowners");
    } else if (activeTab === "luxury") {
      setPara("Best of design and style");
    }
  }, [activeTab]);

  return (
    <>
      <Navbar />
      <Home Desgin = "Home"/>
      <hr className="mt-10 border-t-1 border-black" />
      <div>
        <h1 className="text-4xl font-medium mt-14 mb-2 text-center">
          Below are your estimates to book a free online consultation
        </h1>
        <p className="text-xl font-medium mb-8 text-center">Step 3 of 3</p>
        <div className="max-w-5xl h-[420px] mx-auto bg-white shadow-xl border-[1.25px] rounded-lg border-sky-400 mt-6 mb-32">
          <div className="flex justify-between items-center">
            <button
              onClick={() => handleTabChange("essential")}
              className={`w-96 py-3 h-20 border-b-[1.25px] border-r-[1.25px] border-sky-400 rounded-tl-md font-medium ${
                activeTab === "essential" ? "bg-sky-400 text-black" : "bg-white text-black"
              }`}
            >
              Essential Interiors
            </button>
            <button
              onClick={() => handleTabChange("comfort")}
              className={`w-96 py-3 h-20 border-b-[1.25px] border-sky-400 text-center font-medium ${
                activeTab === "comfort" ? "bg-sky-400 text-black" : "bg-white text-black"
              }`}
            >
              Comfort Interiors
            </button>
            <button
              onClick={() => handleTabChange("luxury")}
              className={`w-96 py-3 h-20 border-b-[1.25px] border-l-[1.25px] border-sky-400 text-center rounded-tr-md font-medium ${
                activeTab === "luxury" ? "bg-sky-400 text-black" : "bg-white text-black"
              }`}
            >
              Luxury Interiors
            </button>
          </div>
          <div className="flex justify-between mt-2 ml-10">
            <div>
              <h3 className="text-lg font-medium px-4">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Interiors
              </h3>
              <p className="ml-4">{para}</p>
            </div>
            <div className="mt-4 px-4">
              <p className="text-lg font-medium text-sky-400">
                Total Price: {totalPrice}.0 rs Lakh
              </p>
            </div>
          </div>
          <div className="flex rounded-full justify-center mt-10 px-4 mx-16">
          {currentItems
            .filter((item) => selectedItems.includes(item.id))
            .map((item, index, filteredItems) => {
              const length = filteredItems.length;

              const getItemWidthClass = () => {
                if (length === 1) return "w-full";
                if (length === 2) return "w-1/2";
                if (length === 3) return "w-1/3";
                return "w-1/4";
              };

              const getItemRoundedClass = () => {
                if (length === 1) return "rounded-xl";
                if (length === 2) return index === 0 ? "rounded-l-xl" : "rounded-r-xl";
                if (length === 3) {
                  if (index === 0) return "rounded-l-xl";
                  if (index === length - 1) return "rounded-r-xl";
                  return "";
                }
                return index === 0
                  ? "rounded-l-xl"
                  : index === length - 1
                  ? "rounded-r-xl"
                  : "";
              };

              const itemWidthClass = getItemWidthClass();
              const itemRoundedClass = getItemRoundedClass();

              return (
                <div
                  key={item.id}
                  className={`px-18 mb-4 text-center border-[1.25px] shadow-lg border-sky-400 ${itemRoundedClass} ${itemWidthClass}`}
                >
                  <div
                    className={`w-full ${itemRoundedClass} h-full py-6 ${
                      activeId === item.id ? "bg-sky-400" : bgColors[item.id]
                    }`}
                    onClick={() => backgroundcolorchange(item.id)}
                  >
                    <p className="font-medium">{item.label}</p>
                    <p>{item.price} rs Lakh</p>
                  </div>
                </div>
              );
            })}
          </div>
          {activeId === "modularKitchen" &&
            <div className="mr-20">
            <div className="flex justify-center items-center space-x-24">
              <span className="font-normal text-lg ml-[65px]">Shape:</span>
              <div className="flex items-center">
                <input type="radio" id="u-shape" name="shape" className="peer hidden" onClick={() => handleSelect("U-Shape")} />
                <label htmlFor="u-shape" className={`w-5 h-5 rounded-full border-[1.25px] flex items-center justify-center cursor-pointer ${selectedShape === "U-Shape" ? "bg-sky-400 border-sky-400" : "border-sky-400"}`}>
                </label>
                <span className="ml-2">U-Shape</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="l-shape" name="shape" className="peer hidden" onClick={() => handleSelect("L-Shape")}/>
                <label htmlFor="l-shape" className={`w-5 h-5 rounded-full border-[1.25px] flex items-center justify-center cursor-pointer ${selectedShape === "L-Shape" ? "bg-sky-400 border-sky-400" : "border-sky-400"}`}
                ></label>
                <span className="ml-2">L-Shape</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="parallel" name="shape" className="peer hidden" onClick={() => handleSelect("Parallel")} />
                <label htmlFor="parallel" className={`w-5 h-5 rounded-full border-[1.25px] flex items-center justify-center cursor-pointer ${selectedShape === "Parallel" ? "bg-sky-400 border-sky-400" : "border-sky-400"}`}>
                </label>
                <span className="ml-2">Parallel</span>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="straight" name="shape"className="peer hidden" onClick={() => handleSelect("Straight")}/>
                <label htmlFor="straight" className={`w-5 h-5 rounded-full border-[1.25px] flex items-center justify-center cursor-pointer ${selectedShape === "Straight" ? "bg-sky-400 border-sky-400" : "border-sky-400"}`}>
                </label>
                <span className="ml-2">Straight</span>
              </div>
            </div>
          </div>
          }
          {
            activeId === "modularKitchen" ? <div className="flex flex-row items-center mt-4 ml-4 mr-10 mb-10">
            <p className="font-normal text-lg ml-20">Size:</p>
            {
              selectedShape === "U-Shape"? <ModularKitchenA />
            : selectedShape === "L-Shape" ? <ModularKitchenB /> : selectedShape === "Parallel" ?
            <ModularKitchenC /> : <ModularKitchenD />
            }
          </div>
          :
          <SizePage />
          }
        </div>
        <ButtonPage />
      </div>
      <Footer />
    </>
  );
};

export default GetStartedBPage;

