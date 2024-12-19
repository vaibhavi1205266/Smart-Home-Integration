import React from 'react';
import image1 from "../assets/image4.png";
import image2 from "../assets/image3.png";
import { useNavigate } from 'react-router-dom';

const BoardingBPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <img
                    src={image1}
                    alt=""
                    className="w-full h-[500px] bg-blue-300 border-b-[14px] border-sky-300 rounded-b-3xl"
                />
                <button
                    onClick={() => navigate('/abc')}
                    className="flex absolute top-4 right-12 text-black px-4 py-2 text-4xl"
                >
                    Skip <img src={image2} alt="" className="mt-2 ml-2" />
                </button>
            </div>
            <div className="flex justify-center flex-col items-center mt-20">
                <h1 className="text-7xl text-sky-400 font-poppins font-[550]">
                    Modern Design
                </h1>
                <p className="px-8 mt-4 max-w-xl text-xl text-black font-poppins text-center">
                    Discover the future of interior design. Sleek lines, bold colors, and innovative materials. Transform your space into a modern masterpiece.
                </p>
            </div>
            <div>
                <button onClick={()=> navigate('/boarding3')} className="text-2xl absolute bottom-8 rounded-3xl right-16 bg-sky-400 px-14 py-2 font-semibold">
                    Next
                </button>
                <div className="flex absolute bottom-10 left-8 space-x-2">
                    <button onClick={() => navigate('/boarding1')} className="w-6 h-3 rounded-full bg-sky-200"></button>
                    <button onClick={() => navigate('/boarding2')} className="w-12 h-3 rounded-full bg-sky-400"></button>
                    <button onClick={() => navigate('/boarding3')} className="w-6 h-3 rounded-full bg-sky-200"></button>
                </div>
            </div>
        </>
    );
};

export default BoardingBPage;
