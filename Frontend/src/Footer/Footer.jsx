import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const logo = "/vs-logo.png";

export const Footer = () => {
  const navigate = useNavigate();
  const totalCircles = 5;

  return (
    <footer className="bg-slate-900 text-slate-300 font-inter py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => navigate("/")}>
            <img className="h-10 w-auto brightness-0 invert logo-glow group-hover:scale-110 transition-transform" src={logo} alt="Logo" />
            <span className="font-outfit font-bold text-2xl text-white tracking-tight">VAIBHAVI & SHRISHTY</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Revolutionizing modern living through seamless smart home integration and bespoke interior designs.
          </p>
          <div className="flex gap-4">
            {[
              { icon: <FaInstagram />, link: "https://instagram.com" },
              { icon: <FaFacebookF />, link: "https://facebook.com" },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:brand-gradient hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-outfit font-bold text-lg text-white mb-8 uppercase tracking-widest text-sm">Quick Access</h3>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Designs', 'Contact Us'].map((link) => (
              <li key={link}>
                <a href={link === 'Home' ? '/' : `/${link.replace(' ', '')}`} className="hover:brand-gradient-text transition-colors duration-300">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-outfit font-bold text-lg text-white mb-8 uppercase tracking-widest text-sm">Designs</h3>
          <ul className="space-y-4">
            {['Bedroom', 'Modular Kitchen', 'Living Room', 'Wardrobe'].map((link) => (
              <li key={link}>
                <a href={`/${link.replace(' ', '')}`} className="hover:brand-gradient-text transition-colors duration-300">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-outfit font-bold text-lg text-white mb-8 uppercase tracking-widest text-sm">Helpline</h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg brand-gradient opacity-20 flex items-center justify-center text-white">
                ☏
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Call Us</p>
                <p className="text-white font-outfit font-bold">+91 9545678756</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg brand-gradient opacity-20 flex items-center justify-center text-white">
                ✉
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Email</p>
                <p className="text-white font-outfit font-bold">vaibhavi@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© 2026 Vaibhavi & Shrishty Integration. All rights reserved.</p>
        <p className="font-outfit">Designed with ♥ by <span className="text-white font-bold">Vaibhavi & Shrishty</span></p>
      </div>
    </footer>
  );
};
