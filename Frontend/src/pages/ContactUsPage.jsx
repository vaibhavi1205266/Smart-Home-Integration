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
      <hr className="mt-10 border-t-1 border-black" />
      <div className="mt-10 mb-10">
        <h1 className="text-4xl text-center font-sans font-bold text-sky-400">Contact Us</h1>
        <div className="mt-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <div className="ml-32">
                <label
                  htmlFor="name"
                  className="block text-xl font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-[500px] border-b-2 border-blue-300 outline-none focus:ring-0  text-gray-700 py-2 text-base"
                />
              </div>
              <div className="mr-32">
                <label
                  htmlFor="mobile"
                  className="block text-xl font-semibold text-gray-700 mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="+91 1234567890"
                  className="w-[500px] border-b-2 border-blue-300 outline-none focus:ring-0  text-gray-700 py-2 text-base"
                />
              </div>
            </div>
            <div className="mx-32 py-12">
              <label
                htmlFor="description"
                className="block text-xl font-semibold text-gray-700 mb-2"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Hello, my name is..."
                className="w-[1260px] border-b-2 border-blue-300 outline-none focus:ring-0 text-gray-700 py-2 text-base"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-sky-400 text-white font-semibold rounded-full transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {isSubmitted && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Form Submitted Successfully!
            </h2>
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-sky-400 text-white font-semibold rounded transition duration-200"
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
