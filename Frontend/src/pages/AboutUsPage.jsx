import React from 'react';
import image1 from '../assets/2 6.png';
import image2 from '../assets/4 8.png';
import image3 from '../assets/3 3.png';
import image4 from '../assets/1 24.png';

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-500/5 -skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-24 relative z-10">
          <div className="max-w-3xl animate-reveal">
            <span className="inline-block px-4 py-1.5 mb-6 brand-gradient text-white rounded-full font-outfit font-bold text-sm uppercase tracking-widest shadow-lg shadow-brand-purple/20">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-6xl font-outfit font-extrabold text-slate-900 leading-tight mb-8">
              Crafting Spaces that <br />
              <span className="brand-gradient-text">Inspire Living</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 font-inter leading-relaxed max-w-2xl">
              Vaibhavi & Shrishty is a full-service design firm dedicated to creating functional, sophisticated, and timeless environments for modern living.
            </p>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-24 space-y-32">
        {/* Section 1 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 animate-reveal">
              <div className="relative">
                <div className="absolute -inset-4 brand-gradient opacity-10 rounded-3xl -z-10" />
                <img src={image1} alt="Design" className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-slide-up">
              <h2 className="text-3xl font-outfit font-bold text-slate-900 mb-6">Unmatched Expertise</h2>
              <p className="text-slate-600 font-inter text-lg leading-relaxed mb-6">
                Trained as Interior Designers, Vaibhavi & Shrishty have developed a passion for designing interiors from different design styles, origins, and cultures.
              </p>
              <p className="text-slate-600 font-inter text-lg leading-relaxed">
                Their understanding of design, scaling, and proportion enables them to create sophisticated, minimalist, synchronous, and warm residential environments.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="w-full lg:w-1/2 animate-reveal">
              <div className="relative">
                <div className="absolute -inset-4 bg-slate-900/5 rounded-3xl -z-10" />
                <img src={image2} alt="Experience" className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 animate-slide-up">
              <h2 className="text-3xl font-outfit font-bold text-slate-900 mb-6">Proven Track Record</h2>
              <p className="text-slate-600 font-inter text-lg leading-relaxed mb-6">
                With over 500,000 square feet of living spaces designed, our experience speaks volumes. We transform spaces into stylish, modern environments tailored to your spirit.
              </p>
              <p className="text-slate-600 font-inter text-lg leading-relaxed">
                We've been fortunate to work for many prestigious companies and professionals, delivering excellence in every renovation and redesign.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 animate-reveal">
              <img src={image3} alt="Service" className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" />
            </div>
            <div className="w-full lg:w-1/2 animate-slide-up">
              <h2 className="text-3xl font-outfit font-bold text-slate-900 mb-6">Service Excellence</h2>
              <p className="text-slate-600 font-inter text-lg leading-relaxed mb-6">
                Our support staff is dedicated to providing prompt assistance, ensuring your journey with us is smooth from start to finish.
              </p>
              <p className="text-slate-600 font-inter text-lg leading-relaxed">
                Serving the Delhi NCR region, we offer flexible payment modes and a customer-first approach that defines the true spirit of Vaibhavi & Shrishty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision/Mission/Motto Cards */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all animate-reveal">
              <div className="text-brand-purple text-4xl mb-6">◈</div>
              <h3 className="text-2xl font-outfit font-bold mb-4">Our Vision</h3>
              <p className="text-slate-400 font-inter leading-relaxed">
                To become an unparalleled leader in interior solutions by leveraging cutting-edge technology and unparalleled expertise.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all animate-reveal" style={{ animationDelay: '150ms' }}>
              <div className="text-brand-purple text-4xl mb-6">✦</div>
              <h3 className="text-2xl font-outfit font-bold mb-4">Our Mission</h3>
              <p className="text-slate-400 font-inter leading-relaxed">
                To provide every client with affordable, modern, elegant, and reliable interior solutions that elevate their quality of life.
              </p>
            </div>
            <div className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all animate-reveal" style={{ animationDelay: '300ms' }}>
              <div className="text-brand-purple text-4xl mb-6">♥</div>
              <h3 className="text-2xl font-outfit font-bold mb-4">Our Motto</h3>
              <p className="text-slate-400 font-inter leading-relaxed">
                Attaining the highest degree of customer satisfaction through a dedicated, customer-first approach in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
