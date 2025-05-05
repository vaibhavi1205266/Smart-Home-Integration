import React from 'react';
import { Routes, Route} from 'react-router-dom';
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
import FetchingPage from './components/FetchingPage';
import BoardingAPage from './components/BoardingAPage';
import BoardingBPage from './components/BoardingBPage';
import BoardingCPage from './components/BoardingCPage';
import FetchPage from './components/FetchPage';
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

function App() {

  return (
    <>
      <ScrollToTop />
      <Toaster />
      <Routes>
        <Route
          path='/home'
          element={
            <>
                  <Navbar />
                  <Home Desgin="Home"/>
                  <Banner />
                  <WhyChooseUs />
                  <BedRoom />
                  <ModularKitchen />
                  <LivingRoom />
                  <Wardrobe />
                  <Estimate />
                  <Session />
                  <Interior />
                  <FreqQuestion />
                  <CustomerReview />
                  <Footer />
                </>
          }
        />
        <Route path='/' element= {<FetchingPage />} />
        <Route path='/abc' element= {<FetchPage />} />
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
        <Route path='/boarding1' element= {<BoardingAPage />} />
        <Route path='/boarding2' element= {<BoardingBPage />} />
        <Route path='/boarding3' element= {<BoardingCPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
