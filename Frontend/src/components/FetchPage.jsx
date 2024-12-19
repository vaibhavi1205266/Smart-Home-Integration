import React from 'react'
import image1 from "../assets/DLN Logo.png"
import { useNavigate } from 'react-router-dom';

const FetchPage = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className='flex justify-center items-center h-screen w-[800px] bg-cyan-100'>
            <div className='text-center'>
                <img 
                    src={image1} 
                    alt="" 
                    className='mx-auto h-[200px] w-[300px] mb-4' 
                />
                <p className='max-w-[500px] mx-auto leading-relaxed text-center'>
                    At DLN Smart Home Integration, we believe your home should be more than just a place to live—it should be a space that enriches your lifestyle. Our team combines cutting-edge technology with modern design to create smart homes that are functional, beautiful, and energy-efficient.
                </p>
            </div>
        </div>
        <div className='fixed top-[370px] right-[250px] transform -translate-y-1/2'>
            <button onClick={() => navigate('/signin')} className='block mb-4 bg-sky-300 hover:bg-sky-500 px-[85px] font-semibold font-poppins py-2 rounded-3xl'>Log In</button>
            <button onClick={() => navigate('/signup')} className='block bg-sky-300 hover:bg-sky-500 px-[80px] py-2 font-semibold font-poppins rounded-3xl'>Sign Up</button>
        </div>
    </>
  )
}

export default FetchPage
