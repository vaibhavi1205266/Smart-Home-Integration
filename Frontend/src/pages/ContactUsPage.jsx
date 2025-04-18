import React, { useState } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../HomePage/HomePage';
import { Footer } from '../Footer/Footer';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', mobile: '', description: '' });
  };

  return (
    <>
      <Navbar />
      <Home Desgin="contactus" />
      <hr className="mt-10 border-t border-black" />

      <div className="mt-10 mb-10 px-4 md:px-8">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center font-sans font-bold text-sky-400 mb-10">
          Contact Us
        </h1>
        <form className="space-y-6 max-w-6xl mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg font-semibold text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full border-b-2 border-blue-300 outline-none text-gray-700 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="mobile" className="block text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg font-semibold text-gray-700 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="+91 1234567890"
                className="w-full border-b-2 border-blue-300 outline-none text-gray-700 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Hello, my name is..."
              className="w-full border-b-2 border-blue-300 outline-none text-gray-700 py-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg resize-none h-8"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-sky-400 text-white font-semibold rounded-full transition duration-200 hover:bg-sky-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center w-11/12 max-w-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Form Submitted Successfully!
            </h2>
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-sky-400 text-white font-semibold rounded transition duration-200 hover:bg-sky-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ContactUs;
