import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../HomePage/HomePage';
import { Footer } from '../Footer/Footer';
import image1 from '../assets/2 6.png'
import image2 from '../assets/4 8.png'
import image3 from '../assets/3 3.png'
import image4 from '../assets/1 24.png'
 
const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <Home Desgin="aboutus"/>
      <hr className="mt-10 border-t-1 border-black" />
      <div className="flex items-center justify-between p-10">
        <div className="w-1/2">
          <img 
            src={image1}
            alt="Interior Design" 
            className="ml-20 h-[300px] w-[550px] rounded-lg" 
          />
        </div>
        <div className="w-1/2 pl-10 mr-12">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-justify text-[16px] font-sans leading-relaxed mb-2">
            Smart Home Interiors is a full-service interior design firm that specializes in mid segment & premium residential and commercial office interior projects. The mission of Smart Interiors is to create interiors that are functional, sophisticated, and timeless.
          </p>
          <p className="text-justify text-[16px] font-sans leading-relaxed mb-2">
            Trained as an Interior Designer, Lalit has developed a passion for designing interiors from different design styles, origins, and cultures. His understanding of design, scaling, and proportion enables him to create sophisticated, minimalist, synchronous, and warm residential environments.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between p-10">
        <div className="w-1/2 pl-10 mr-12">
          <p className="text-justify text-[16px] font-sans leading-relaxed mb-2">
          He has designed, renovated and redesigned medium budget and high-end residential and commercial offices throughout the city and has been fortunate to work for many companies & professionals alike.
          </p>
          <p className="text-justify text-[16px] font-sans leading-relaxed mb-2">
          She has designed over 500,000 square foot of living spaces so far in her career which speaks volumes about her experience. She has transformed them into a stylish modern, contemporary or eclectic living spaces as per client's needs with her interior design ideas that represents the true spirit of her designs.
          </p>
        </div>
        <div className="w-1/2">
          <img 
            src={image2}
            alt="Interior Design" 
            className="ml-20 h-[300px] w-[550px] rounded-lg" 
          />
        </div>
      </div>
      <div className="flex items-center justify-between p-10">
        <div className="w-1/2">
          <img 
            src={image3}
            alt="Interior Design" 
            className="ml-20 h-[300px] w-[550px] rounded-lg" 
          />
        </div>
        <div className="w-1/2 pl-10 mr-12">
          <p className="text-justify text-[16px] font-sans leading-relaxed">
          The projects of Smart Home Interiors have taken Shadab And Sultan places with clients in the form of corporates, doctors, engineers, advocates, businessmen and professionals equally.
          </p>
          <p className=" text-justify text-[16px] font-sans leading-relaxed">
          The support staff at this establishment is courteous and prompt at providing any assistance. They readily answer any queries or questions that you may have. You can pay for various products or services with ease by using any of the available modes of payment, such as Cash, Cheques, Credit Card, Debit Card, UPI, or online wallets. Smart Interior currently serves in and around Delhi NCR .
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between p-10">
        <div className="w-1/2 pl-10 mr-12">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-justify text-[16px] font-sans leading-relaxed">
          Smart Interiors aims to become unparalleled leader in the domain of Interior products and services by use of cutting-edge technology and expertise.
          </p>
          <h2 className="text-xl font-semibold mt-4">Our Mission</h2>
          <p className="text-justify text-[16px] font-sans leading-relaxed mb-2">
          To provide every client with an affordable, modern, elegant and reliable interior solutions.
          </p>
          <h2 className="text-xl font-semibold mt-4">Our Motto</h2>
          <p className="text-justify text-[16px] font-sans leading-relaxed mb-2">
          Our motto is to attain highest degree of customer satisfaction with the customer-first approach.
          </p>
        </div>
        <div className="w-1/2">
          <img 
            src={image4}
            alt="Interior Design" 
            className="ml-20 h-[300px] w-[550px] rounded-lg" 
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
