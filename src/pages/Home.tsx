import { React, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart as ChartBar, Target } from 'lucide-react';
import { Bot, Megaphone, Zap, LineChart, SlidersHorizontal, Code, Pen, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Seo from "../assets/seo.jpeg"
import Content from "../assets/content creation.jpeg"
import Strategy from "../assets/strategy.jpeg"
import Web from "../assets/we b design.jpeg"
import PPC from "../assets/ppc.jpeg"
import Smm from "../assets/smm.jpeg"
import Camp from "../assets/campaign.jpeg"
import Email from "../assets/email.jpeg"
import Webdev from "../assets/web development.jpeg"
import Geo from "../assets/geo.jpeg"
import Branding from "../assets/branding1.png"
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate hook



// Service items with added image URLs and slugs for navigation
const serviceItems = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered SEO",
    description: "Complex data analysis using more advanced tools",
    path: "/services/seo-service", // Added path for navigation
    image: Seo,
    features: [
      "Real-time data processing",
      "Pattern recognition",
      "Predictive modeling",
      "Automated reporting"
    ]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Generative Engine Optimization",
    description: "Optimize your content for the future of AI-driven discovery",
    path: "/services/geo-service", // Added path for navigation
    image: Geo,
    features: [
      "Optimized content for AI chatbots and assistants",
      "Structured data and context-rich formatting",
      "Enhanced discoverability in generative search engines",
      "Future-proof SEO aligned with AI language models"
    ]
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI-Powered PPC / Paid Ads",
    description: "Turn clicks into conversions for your marketing campagins",
    path: "/services/paid-ads", // Added path for navigation
    image: PPC,
    features: [
      "Campaign automation",
      "A/B testing",
      "Customer journey mapping",
      "Performance tracking"
    ]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "AI Social Media Marketing",
    description: "AI enabled targeting and integration",
    path: "/services/ai-social-media-marketing", // Added path for navigation
    image: Smm,
    features: [
      "Audience segmentation",
      "Behavioral targeting",
      "Custom audiences",
      "Look-alike modeling"
    ]
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Email Marketing Automation",
    description: "AI-powered content creation and optimization",
    path: "/services/email-marketing-automation", // Added path for navigation
    image: Email,
    features: [
      "SEO optimization",
      "Content personalization",
      "Multi-channel content",
      "Performance analytics"
    ]
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Branding",
    description: "Build a brand that speaks, resonates, and scales—powered by AI intelligence.",
    path: "/services/branding", // Updated path
    image: Branding, // Replace with your branding-related image if needed
    features: [
      "Visual identity systems designed for digital and AI-first platforms",
      "AI-led brand positioning and tone of voice development",
      "Omnichannel consistency across digital, print, and social",
      "Reputation tracking and real-time sentiment analysis"
    ]
  },  
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Content Marketing with AI tools",
    description: "Future-proof insights for strategic planning",
    path: "/services/content-marketing", // Added path for navigation
    image: Content,
    features: [
      "Trend analysis",
      "Market forecasting",
      "Risk assessment",
      "Growth opportunities"
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI Chatbots & Lead Generation",
    description: "Instant connections, Instant leads",
    path: "/services/ai-chatbots-lead-generation", // Added path for navigation
    image: Camp,
    features: [
      "Real-time monitoring",
      "Dynamic optimization",
      "Performance tracking",
      "ROI maximization"
    ]
  },
  {
    icon: <SlidersHorizontal className="w-8 h-8" />,
    title: "Customization & Strategy",
    description: "Future-proof insights for strategic planning",
    path: "/services/customization-strategy", // Added path for navigation
    image: Strategy,
    features: [
      "Trend analysis",
      "Market forecasting",
      "Risk assessment",
      "Growth opportunities"
    ]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Future-proof insights for strategic planning",
    path: "/services/web-development", // Added path for navigation
    image: Webdev,
    features: [
      "Trend analysis",
      "Market forecasting",
      "Risk assessment",
      "Growth opportunities"
    ]
  },
  {
    icon: <Pen className="w-8 h-8" />,
    title: "Web Designing",
    description: "Future-proof insights for strategic planning",
    path: "/services/web-designing", // Added path for navigation
    image: Web,
    features: [
      "Trend analysis",
      "Market forecasting",
      "Risk assessment",
      "Growth opportunities"
    ]
  }
];

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Control swiper on mouseover/out
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (swiperRef.current && swiperRef.current.Swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  // Function to handle navigation to service page
  const handleNavigateToService = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
            Welcome to the 
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
              ERA of Digital Marketing with <span className="animated-gradient bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-600 to-gray-900">
                AI
              </span>,
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-900">
              Built for You
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-600 mb-12 max-w-5xl mx-auto" 
          >
            Harness the complete power of your brand through AI digital marketing. Achieve results through intelligent automation, precision-targeted campaigns, and real-time data insights designed for your success
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => navigate('/services')}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-20"
  >
    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
      Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">Services</span>
    </h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto"
    >
      Explore our suite of AI-powered services designed to supercharge your digital marketing strategy.
    </motion.p>
  </motion.div>

  {/* Enhanced Service Slider */}
  <div 
    className="py-10 relative"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {/* Side arrow navigation controls */}
    {isHovered && (
      <>
        {/* Left arrow */}
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white p-3 rounded-full transition-colors duration-300 shadow-md"
          onClick={() => swiperRef.current.swiper.slidePrev()}
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Right arrow */}
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white p-3 rounded-full transition-colors duration-300 shadow-md"
          onClick={() => swiperRef.current.swiper.slideNext()}
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </>
    )}

<Swiper
  ref={swiperRef}
  slidesPerView={1}
  spaceBetween={30}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  loop={true}
  speed={1000}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  modules={[Autoplay, Navigation]}
  className="mySwiper"
  allowTouchMove={isHovered}
  grabCursor={isHovered}
>
  {serviceItems.map((item, index) => (
    <SwiperSlide key={index} className="flex justify-center py-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card w-[300px] md:w-[320px] lg:w-[350px] h-96 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group relative"
      >
        {/* Background Image - Hidden by default, shown on hover */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to ensure text and button are visible over any image */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content visible when not hovered */}
        <div className="p-6 flex flex-col justify-between h-full relative z-10 group-hover:opacity-0 transition-opacity duration-500">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            
            {/* Features with bullet points */}
            <ul className="space-y-1">
              {item.features.map((feature, idx) => (
                <li key={idx} className="text-gray-700 text-sm flex items-start">
                  <span className="text-gray-900 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hover Content - Title and Learn More Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 p-6">
          <h3 className="text-2xl font-bold text-white mb-auto mt-6">{item.title}</h3>
          
          <div className="mb-6 mt-auto">
          <button
  className="flex items-center justify-center px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
  onClick={() => handleNavigateToService(item.path)}
>
  Learn More
  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
</button>

          </div>
        </div>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>
  </div>
</div>


<div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-4 md:px-12 gap-10 pt-20 md:pt-0">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight mb-6">
            Make Your Business{" "}
            <span className="text-slate-400">Stand Out</span> with Our Digital
            Marketing Experts
          </h1>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
            We help brands thrive in the digital landscape through data-driven
            strategies and creative innovation.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full md:w-1/2 px-4 hidden md:block"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-400 to-primary-400 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Marketing Team"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </div>
      
    </div>
  );
};

export default Home;