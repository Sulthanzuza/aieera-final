import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Future from './pages/Future';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Particles from './components/ParticlesBackground';
import ScrollToTop from './components/ScrollToTop'; 
import Geo from './servicepage/Geo'
import Seo from './servicepage/Seo'
import Branding from "./servicepage/Branding"
import ChatBots from './servicepage/ChatBots';
import ContentMarketing from "./servicepage/ContentMarketing";
import Custom from './servicepage/Custom';
import EmailAuto from './servicepage/EmailAuto';
import SMM from './servicepage/Smm';
import ErrorPage from "./pages/Error"
import Webdev from './servicepage/WebDevelopment'
import WebDesign from './servicepage/WebDesigning'
import PaidAds from "./servicepage/PPC"
import Whatsapp from "./components/WhatsappFloatButton"
import MetaPixelTracker from './components/MetaPixelTracker';
import Santa from "./components/Santa";
import Snowfall from 'react-snowfall';

function App() {
  return (
    <BrowserRouter>
    <MetaPixelTracker />
    <Santa />
     <Snowfall
        color="#f3fcffff"
        snowflakeCount={200}  
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          pointerEvents: 'none', 
        }}
      />
      <ScrollToTop /> 
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <main className="flex-grow">
          <Particles />
          <Navbar />
          <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Services />} />
  <Route path="/services/generative-engine-optimization" element={<Geo />} />
  <Route path="/services/search-engine-optimization" element={<Seo />} />
  <Route path="/services/web-development" element={<Webdev />} />
  <Route path="/services/web-designing" element={<WebDesign />} />
  <Route path="/services/paid-ads" element={<PaidAds />} />
  <Route path="/services/branding" element={<Branding />} />
  <Route path="/services/chat-bots" element={<ChatBots />} />
  <Route path="/services/customization" element={<Custom />} />
  <Route path="/services/content-marketing" element={<ContentMarketing />} />
  <Route path="/services/email-automation" element={<EmailAuto />} />
  <Route path="/services/socialmedia-marketing" element={<SMM />} />
  <Route path="/about" element={<About />} />
  <Route path="/future" element={<Future />} />
  <Route path="/contact" element={<Contact />} />
   <Route path="*" element={<ErrorPage />} />
</Routes>
<Whatsapp />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
