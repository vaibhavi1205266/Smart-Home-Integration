import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Home } from '../HomePage/HomePage'
import { Footer } from '../Footer/Footer'
import image1 from '../assets/Vector (6).png'

const GetStartedCPage = () => {
  return (
    <>
        <Navbar />
        <Home Desgin = "Home"/>
        <hr className="mt-10 border-t-1 border-black" />
        <div className="flex flex-col items-center justify-center h-[40vh] text-center space-y-4">
            <img src={image1} alt="Booking confirmation icon" className="h-10 w-10" />
            <h1 className="text-3xl font-semibold">Your Session is Successfully Booked</h1>
        </div>
        <Footer />
    </>
  )
}

export default GetStartedCPage
