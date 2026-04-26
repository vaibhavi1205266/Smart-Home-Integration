import React, { useState } from 'react';

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
    <div className="bg-white min-h-screen">
      
      <section className="py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Side: Info */}
            <div className="w-full lg:w-1/2 animate-reveal">
              <span className="inline-block px-4 py-1.5 mb-6 bg-sky-500/10 text-sky-600 rounded-full font-outfit font-bold text-sm uppercase tracking-widest">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-6xl font-outfit font-extrabold text-slate-900 leading-tight mb-8">
                Let's Start Your <br />
                <span className="text-sky-500">Transformation</span>
              </h1>
              <p className="text-lg text-slate-600 font-inter mb-12 max-w-lg">
                Whether you have a specific vision or just want to explore possibilities, our experts are here to help you design the home of your dreams.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-sky-500 shrink-0 shadow-sm">
                    <span className="text-2xl">☏</span>
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-slate-900 mb-1">Call Us</h3>
                    <p className="text-slate-500 font-inter">+91 1234567890</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-sky-500 shrink-0 shadow-sm">
                    <span className="text-2xl">✉</span>
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-slate-900 mb-1">Email Us</h3>
                    <p className="text-slate-500 font-inter">contact@vsintegration.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-sky-500 shrink-0 shadow-sm">
                    <span className="text-2xl"> location</span>
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-slate-900 mb-1">Our Studio</h3>
                    <p className="text-slate-500 font-inter">Serving Delhi, Noida, Gurgaon & NCR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-1/2 animate-slide-up">
              <div className="bg-slate-50 p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-outfit font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all font-inter"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-outfit font-bold text-slate-400 uppercase tracking-wider ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+91 00000 00000"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all font-inter"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-outfit font-bold text-slate-400 uppercase tracking-wider ml-1">Your Message</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Tell us about your space..."
                      rows="4"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/5 transition-all font-inter resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white font-outfit font-bold py-5 rounded-2xl hover:bg-sky-600 transition-all shadow-lg shadow-slate-200 active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-900/40 backdrop-blur-md z-[100] animate-reveal p-6">
          <div className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-md w-full border border-slate-100">
            <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-8 text-sky-500 text-4xl animate-reveal">
              ✓
            </div>
            <h2 className="text-3xl font-outfit font-extrabold text-slate-900 mb-4">
              Thank You!
            </h2>
            <p className="text-slate-500 font-inter mb-10 leading-relaxed">
              Your message has been received. Our design expert will contact you within the next 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="w-full bg-slate-50 text-slate-900 font-outfit font-bold py-4 rounded-2xl hover:bg-slate-100 transition-all"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
