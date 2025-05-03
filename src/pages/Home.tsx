import { React, useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, BarChart as ChartBar, Target } from 'lucide-react';
import { Bot, Megaphone, Zap, LineChart, SlidersHorizontal, Code, Pen, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet'; 
import 'swiper/css';
import BackgroundVideo from '../assets/1851190-uhd_3840_2160_25fps.mp4'
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
import { useNavigate, Link } from 'react-router-dom';
import GridMotion from '../components/GridMotion';

// Service items with added image URLs and slugs for navigation
const serviceItems = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Guided SEO",
    description: "Smarter search rankings, effortlessly.",
    path: "/services/seo-service", // Added path for navigation
    image: Seo,
    desc1:"Stay ahead of the competition with AI guided SEO that analyzes live trends, keywords, and competitor agendas to boost your search performance. Our digital marketing services learn in real time to improve market changes.",
    features: [
      "Live analysis of search trends",
      "Smart keyword suggestions using pattern recognitions",
      "AI powered content target strategy planning",
      "clear, actionable reports"
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
    description: "More clicks, less guesswork",
    path: "/services/paid-ads", // Added path for navigation
    image: PPC,
    desc1:"We specialized in digital marketing services that intelligently adjust ad bids and targeting for highest outcomes.",
    features: [
      "Fully Automated campaign management with machine learning",
      " Ongoing A/B testing that improves your ads on the run",
      "Smart customers targeting across the customer journey",
      "Live performance tracking and effectiv"
    ]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Next Gen Social Media Marketing",
    description: "Turn followers into fans",
    path: "/services/socialmedia-marketing", // Added path for navigation
    image: Smm,
    desc1:"Deliver the right content at the right time with strategies from our digital marketing services suite.",
    features: [
      "Acute audience targeting based on behavior and interests",
      "Content recommendations powered by engagement insights",
      "Tools to build and grow custom and look like audiences",
      "Deliver the right content at the right time with strategies from our digital marketing services suite."
    ]
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Automated Email Engagement",
    description: "Emails that feel personal sent automatically",
    path: "/services/email-automation", 
    image: Email,
    desc1:"Increase open rates and conversions using email automatize tools from our digital marketing services.",
    features: [
      "AI helping content creation that saves time",
      "Spot on topic and keyword suggestions",
      "Performance predictions before you publish",
      "Automated distribution to the right channels"
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
    description: "Create smarter content that gets results.",
    path: "/services/content-marketing", // Added path for navigation
    image: Content,
    desc1:"Create engaging blogs, articles, and multimedia content efficiently with latest AI make writing and design possibilities",
    features: [
      "AI helping content creation that saves time",
      "Spot on topic and keyword suggestions",
      "Performance predictions before you publish",
      "Automated distribution to the right channels"
    ]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "AI Chatbots & Lead Generation",
    description: "Instant connections, Instant leads",
    path: "/services/chat-bots", // Added path for navigation
    image: Camp,
    desc1:"Delivering and responding human like support and create leads at scale with smart AI chatbots that never rest",
    features: [
      "Deliver and respond human like supportive ",
      "Chatbots that understand context and intent",
      "Seamless handoff to your team when needed",
      "Bots that get better with every conversation"
    ]
  },
  {
    icon: <SlidersHorizontal className="w-8 h-8" />,
    title: "Customization & Strategy",
    description: "Marketing that's built around you",
    path: "/services/customization", // Added path for navigation
    image: Strategy,
    desc1:"Achieve better results with marketing strategies made by AI to match your goals and how your clients actually behave.",
    features: [
      "In depth competitor and market research",
      "Strategic marketing plans aligned with your goals",
      "Clear KPIs to measure success",
      "Ongoing fine tuning based on real results"
    ]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "A Strong foundation for your digital growth",
    path: "/services/web-development", // Added path for navigation
    image: Webdev,
    desc1:"From fast loading pages to scalable backends, we build websites that are beautiful, secure, and ready for anything effective for both users and search engines.",
    features: [
      "Built with modern tech (React, Vue, Angular)",
      "Secure and scalable backend architecture",
      "Speed and performance optimization",
      "Fully SEO friendly structure from the ground up"
    ]
  },
  {
    icon: <Pen className="w-8 h-8" />,
    title: "Web Designing",
    description: "Designs that captivate and convert.",
    path: "/services/web-designing", // Added path for navigation
    image: Web,
    desc1:"We make visually stunning, instinctual websites that reflect your brand's personality and guide users exactly where you want them to go.",
    features: [
      "latest, user first designs",
      "Responsive layouts that look great on any devices",
      "Visuals designs match your brand identity",
      "Designs that make action and more conversions"
    ]
  }
];

const items = [
  'AI Guided SEO',
  <div key='jsx-item-1'>Smarter search rankings, effortlessly.</div>,
  

  'AI-Powered PPC / Paid Ads',
  <div key='jsx-item-3'>More clicks, less guesswork.</div>,

  'Next Gen Social Media Marketing',
  <div key='jsx-item-4'>Turn followers into fans.</div>,

  'Automated Email Engagement',
  <div key='jsx-item-5'>Emails that feel personal sent automatically.</div>,

  'Generative Engine Optimization',
  <div key='jsx-item-2'>Optimize your content for the future of AI-driven discovery.</div>,

  'Branding',
  <div key='jsx-item-6'>Build a brand that speaks, resonates, and scales—powered by AI intelligence.</div>,

 
  'AI Chatbots & Lead Generation',
  <div key='jsx-item-8'>Instant connections, Instant leads.</div>,

  'Customization & Strategy',
  <div key='jsx-item-9'>Marketing that's built around you.</div>,

  'Web Development',
  <div key='jsx-item-10'>A Strong foundation for your digital growth.</div>,

  'Web Designing',
  <div key='jsx-item-11'>Designs that captivate and convert.</div>,

  'Generative Engine Optimization',
  <div key='jsx-item-12'>Optimize your content for the future of AI-driven discovery.</div>,

  'Automated Email Engagement',
  <div key='jsx-item-15'>Emails that feel personal sent automatically.</div>,

  'Content Marketing with AI tools',
  <div key='jsx-item-17'>Create smarter content that gets results.</div>,

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

  // Function to generate JSON-LD structured data
  const generateSchemaMarkup = () => {
    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "aieera",
      "description": "Explore the future of digital marketing with AI. We deliver powerful AI-driven strategies that boost engagement, conversions, and business growth.",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`, 
      "sameAs": [
        "https://www.facebook.com/aieerafm",
        "https://www.linkedin.com/company/aieera",
        "https://www.instagram.com/aieerafm"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971 545458167", 
        "contactType": "customer service",
        "email": "hello@aieera.com" 
      }
    };

    // Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Digital Marketing",
      "provider": {
        "@type": "Organization",
        "name": "aieera"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Digital Marketing Services",
        "itemListElement": serviceItems.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "url": `${window.location.origin}${service.path}`
          },
          "position": index + 1
        }))
      }
    };

    // WebPage schema
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "AI-Powered Digital Marketing Services | aieera",
      "description": "Explore the future of digital marketing with AI. We deliver powerful AI-driven strategies that boost engagement, conversions, and business growth.",
      "url": window.location.href,
      "mainEntity": {
        "@type": "WebSite",
        "name": "aieera - AI Digital Marketing Agency",
        "url": window.location.origin
      }
    };

    return [organizationSchema, serviceSchema, webPageSchema];
  };

  return (
    <div className="min-h-screen pt-16 relative">
      
      <Helmet>
        <title>AI Digital Marketing Solutions | Automate Online Growth with AI</title>
        <meta name="description" content="Explore the future of digital marketing with AI. We deliver powerful AI-driven strategies that boost engagement, conversions, and business growth." />
        <meta name="keywords" content="digital marketing with ai, ai digital marketing, ai for digital marketing, ai in digital marketing" />
        
        <meta property="og:title" content="AI Digital Marketing Solutions | Automate Online Growth with AI" />
        <meta property="og:description" content="Explore the future of digital marketing with AI. We deliver powerful AI-driven strategies that boost engagement, conversions, and business growth." />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="aieera" />
        
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="aieera" />
        <meta name="language" content="English" />
        
        <link rel="canonical" href={window.location.href} />
        
        <script type="application/ld+json">
          {JSON.stringify(generateSchemaMarkup())}
        </script>
      </Helmet>

     
      <div className="relative">
       
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src={BackgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

       
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
               Welcome to the 
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                ERA of Digital Marketing with <span className="animated-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-600 to-white">
                  AI
                </span>,
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Built for You
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-100 mb-12 max-w-5xl mx-auto" 
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


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">Services</span>
          </h2>
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
                  className="card-with-glazing w-[300px] md:w-[320px] lg:w-[350px] h-96 rounded-xl overflow-hidden bg-white shadow-5xl hover:shadow-2xl transition-all duration-500 group relative"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  {/* Microdata attributes for individual services */}
                  <meta itemProp="name" content={item.title} />
                  <meta itemProp="description" content={item.description} />
                  <meta itemProp="url" content={`${window.location.origin}${item.path}`} />
                  
                  {/* Background Image - Hidden by default, shown on hover */}
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      itemProp="image"
                    />
                    {/* Dark overlay to ensure text and button are visible over any image */}
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  </div>
                  
                  {/* Content visible when not hovered */}
                  <div className="p-6 flex flex-col justify-between h-full relative z-10 group-hover:opacity-0 transition-opacity duration-500">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" itemProp="name">{item.title}</h3>
                      <p className="text-gray-600 mb-4 font-bold" itemProp="description">{item.description}</p>
                      <p className="text-gray-600 mb-4">{item.desc1}</p>
                      
                      {/* Features with bullet points */}
                      <ul className="space-y-1" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalogItem">
                            <span className="text-gray-900 mr-2">•</span>
                            <span itemProp="itemOffered">{feature}</span>
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
                        className="relative flex items-center justify-center px-6 py-3 bg-gradient-to-r from-black via-gray-800 to-gray-500 hover:from-gray-900 hover:to-gray-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        onClick={() => handleNavigateToService(item.path)}
                        aria-label={`Learn more about ${item.title}`}
                      >
                        {/* Glossy overlay */}
                        <span className="absolute inset-0 bg-white opacity-5 rounded-xl pointer-events-none" />
                        
                        {/* Button text & icon */}
                        <span className="relative z-10 flex items-center">
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="relative w-full min-h-screen overflow-hidden" itemScope itemType="https://schema.org/Organization">
      
        <meta itemProp="name" content="aieera" />
        <meta itemProp="description" content="AI-powered digital marketing agency specializing in SEO, PPC, content marketing, and web development services." />
        <meta itemProp="url" content={window.location.origin} />
        
        
        

        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-4 md:px-12 gap-10 pt-20 md:pt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight mb-6" itemProp="slogan">
              Upgrade Your Brand with{" "}
              <span className="text-slate-400" itemProp="name">aieera</span> AI Automated Marketing
            </h2>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0" itemProp="description">
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
                  itemProp="image"
                />
              </div>
            </div>
          </motion.div>
        </div>

    
       
      </div>
    </div>
  );
};

export default Home;