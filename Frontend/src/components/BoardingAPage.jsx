import React from 'react';
import image1 from "../assets/image2.png";
import image2 from "../assets/image3.png";
import { useNavigate } from 'react-router-dom';

const BoardingAPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <img
                    src={image1}
                    alt=""
                    className="w-[650px] h-[400px] sm:w-[780px] sm:h-[500px] md:w-[1100px] md:h-[500px] lg:w-full lg:h-[500px] bg-blue-300 border-b-[14px] border-sky-300 rounded-b-3xl"
                />
                <button
                    onClick={() => navigate('/abc')}
                    className="flex absolute top-4 right-12 text-black px-4 py-2 text-md sm:text-lg md:text-xl lg:text-4xl"
                >
                    Skip <img src={image2} alt="" className="mt-[5px] ml-1 h-4 w-4 sm:h-6 sm:w-5 sm:mt-1 md:w-6 lg:h-8 lg:w-8 " />
                </button>
            </div>
            <div className="flex justify-center flex-col items-center mt-20">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-400 font-poppins font-[550]">
                    Comfortable Space
                </h1>
                <p className="px-8 mt-4 max-w-sm sm:max-w-lg md:max-w-md lg:max-w-lg xl:max-w-xl text-md sm:text-lg md:text-lg lg:text-xl text-black font-poppins text-center">
                    Thoughtfully designed for your unique lifestyle. Explore our curated collection of furniture and decor, where comfort meets style.
                </p>
            </div>
            <div className="flex justify-between mt-24 sm:mt-32 md:mt-32 lg:mt-28 xl:mt-28 relative sm:flex-row sm:items-end">
            <div className="flex mt-6 ml-4 space-x-2 sm:mb-0 sm:absolute sm:bottom-10 sm:left-8">
                <button  className="w-12 h-3 rounded-full bg-sky-400"></button>
                <button  className="w-6 h-3 rounded-full bg-sky-200"></button>
                <button  className="w-6 h-3 rounded-full bg-sky-200"></button>
            </div>
                
                <button 
                    onClick={() => navigate('/boarding2')} 
                    className="text-2xl mr-10 rounded-3xl bg-sky-400 px-14 py-2 font-semibold mb-4 sm:mb-0 sm:absolute sm:bottom-8 sm:right-16"
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default BoardingAPage;
