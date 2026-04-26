import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Banner } from './Banner/Banner';
import { BedRoom } from './BedRoom/BedRoom';
import { CustomerReview } from './CustomerReview/CustomerReview';
import { Estimate } from './Estimate/Estimate';
import { Footer } from './Footer/Footer';
import { FreqQuestion } from './FreqQuestion/FreqQuestion';
import { Home } from './HomePage/HomePage';
import { Interior } from './Interior/Interior';
import { LivingRoom } from './LivingRoom/LivingRoom';
import { ModularKitchen } from './ModularKitchen/ModularKitchen';
import { Navbar } from './Navbar/Navbar';
import { Session } from './Session/Session';
import { Wardrobe } from './Wardrobe/Wardrobe';
import { WhyChooseUs } from './WhyChooseUs/WhyChooseUs';
import SignInPage from './components/signInPage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './components/signUpPage';
import DesginApage from './components/DesginApage';
import DesginBpage from './components/DesginBPage';
import DesginCpage from './components/DesignCPage';
import DesginDpage from './components/DesignDPage';
import ScrollToTop from './components/ScrollToTop';
import Design from './DesignPage/Design';
import ContactUs from './pages/ContactUsPage';
import GetStartedPage from './components/GetStartedPage';
import GetStartedAPage from './components/GetStartedAPage';
import GetStartedBPage from './components/GetStartedBpage';
import GetStartedCPage from './components/GetStartedCPage';
import KitchenPage from './components/KitchenPage';
import { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import LoginModal from './components/LoginModal';
import SignUpModal from './components/SignUpModal';
import { useNavigate } from 'react-router-dom';

import { ParallaxDivider } from './components/ParallaxDivider';

function App() {
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  useEffect(() => {
    // Show loader on route changes
    setLoading(true);

    const duration = isInitialLoad ? 4000 : 1500; 
    
    const timer = setTimeout(() => {
      setLoading(false);
      if (isInitialLoad) setIsInitialLoad(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [location.pathname]); // Trigger on path change

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {loading && <Loader />}
      <Navbar onOpenLogin={() => setIsLoginOpen(true)} />
      <div className="flex-1 flex flex-col">
        <ScrollToTop />
        <Toaster 
          position="top-center" 
          toastOptions={{
            style: {
              zIndex: 9999,
              background: '#0f172a',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
              fontFamily: 'Outfit, sans-serif',
            },
          }}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                    <Banner />
                    <WhyChooseUs />
                    
                    {/* Stacking Parallax Sections */}
                    <div className="relative">
                      <div className="sticky top-0 min-h-screen">
                        <BedRoom />
                      </div>
                      <div className="sticky top-0 min-h-screen">
                        <ModularKitchen />
                      </div>
                      <div className="sticky top-0 min-h-screen">
                        <LivingRoom />
                      </div>
                      <div className="sticky top-0 min-h-screen">
                        <Wardrobe />
                      </div>
                    </div>

                    <ParallaxDivider 
                      imageUrl="https://res.cloudinary.com/dh4cgdjhh/image/upload/v1746338974/dq6cry8keuvz0uijqnwv.png"
                      title="Smart Living, Simplified"
                      subtitle="Experience the perfect harmony of technology and design in every corner of your home."
                    />
                    <Estimate />
                    <Session />
                    <Interior />
                    <FreqQuestion />
                    <CustomerReview />
                  </>
            }
          />
          <Route path='/AboutUs' element={<AboutUsPage />} />
          <Route path='/Services' element={<ServicesPage />} />
          <Route path='/Bedroom' element={<DesginApage />} />
          <Route path='/Design' element={<Design />} />
          <Route path='/Kitchen' element={<DesginBpage />} />
          <Route path='/LivingRoom' element={<DesginCpage />} />
          <Route path='/Wardrobe' element={<DesginDpage />} />
          <Route path='/Contact' element={<ContactUs />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/getHomeEstimate' element={<GetStartedPage />} />
          <Route path='/getHomeEstimateA' element={<GetStartedAPage />} />
          <Route path='/getHomeEstimateB' element={<GetStartedBPage />} />
          <Route path='/getHomeEstimateC' element={<GetStartedCPage />} />
          <Route path='/kitchenEstimate' element={<KitchenPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signin' element={<SignInPage />} />
          {/* Redirect any unknown routes to Home */}
          <Route path='*' element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onSwitchToSignUp={() => {
          setIsLoginOpen(false);
          setIsSignUpOpen(true);
        }}
      />

      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSwitchToLogin={() => {
          setIsSignUpOpen(false);
          setIsLoginOpen(true);
        }}
      />
    </div>
  );
}

export default App;

