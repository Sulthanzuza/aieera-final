import { React, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {  ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Helmet,HelmetProvider } from 'react-helmet-async';
import BackgroundVideo from "../components/BackgroundVideo";
import 'swiper/css';
import BackgroundVide from '../assets/1851190-uhd_3840_2160_25fps.mp4'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import teamwork from '../assets/pexels-photo-7688336.webp'
import Seo from "../assets/seo.webp"
import BgPoster from '../assets/1851190-uhd_3840_2160_25fps-0.webp'
import Content from "../assets/content creation.webp"
import Strategy from "../assets/strategy.webp"
import Web from "../assets/we b design.webp"
import PPC from "../assets/ppc.webp"
import Smm from "../assets/smm.webp"
import Camp from "../assets/campaign.webp"
import Email from "../assets/email.webp"
import Webdev from "../assets/web development.webp"
import Geo from "../assets/geo.webp"
import Branding from "../assets/branding1.webp"
import { useNavigate} from 'react-router-dom';
import team from "../assets/AdobeStock_854517591_Preview (1).webp"


// Service items with added image URLs and slugs for navigation
const serviceItems = [
  {
    title: "AI Powered SEO",
    description: "Smarter search rankings, effortlessly.",
    path: "/services/search-engine-optimization", // Added path for navigation
    image: Seo,
    desc1: "Stay ahead of the competition with AI guided SEO that analyzes live trends, keywords, and competitor agendas to boost your search performance. Our digital marketing services learn in real time to improve market changes.",
    features: [
      "Live analysis of search trends",
      "Smart keyword suggestions using pattern recognitions",
      "AI powered content target strategy planning",
      "clear, actionable reports"
    ]
  },
  {

    title: "Generative Engine Optimization",
    description: " Smarter strategies. Faster growth",
    path: "/services/generative-engine-optimization",
    desc1:" It accelerates growth by continuously learning, adapting, and effective performance in live.",
    image: Geo,
    features: [
      "AI driven search data campaign adjustments in real time",
      " Predictive content and keyword suggestions",
      " Auto optimization of ads, SEO, and emails based on live data",
      "Increased ROI through adaptive learning models"
    ]
  },
  {

    title: "AI-Powered PPC / Paid Ads",
    description: "More clicks, less guesswork",
    path: "/services/paid-ads", // Added path for navigation
    image: PPC,
    desc1: "We specialized in digital marketing services that intelligently adjust ad bids and targeting for highest outcomes.",
    features: [
      "Fully Automated campaign management with machine learning",
      " Ongoing A/B testing that improves your ads on the run",
      "Smart customers targeting across the customer journey",
      "Live performance tracking and effectiv"
    ]
  },
  {

    title: "Next Gen Social Media Marketing",
    description: "Turn followers into fans",
    path: "/services/socialmedia-marketing", // Added path for navigation
    image: Smm,
    desc1: "Deliver the right content at the right time with strategies from our digital marketing services suite.",
    features: [
      "Acute audience targeting based on behavior and interests",
      "Content recommendations powered by engagement insights",
      "Tools to build and grow custom and look like audiences",
      "Deliver the right content at the right time with strategies from our digital marketing services suite."
    ]
  },
  {
 
    title: "Email Marketing Automation",
    description: "Emails that feel personal sent automatically",
    path: "/services/email-automation",
    image: Email,
    desc1: "Increase open rates and conversions using email automatize tools from our digital marketing services.",
    features: [
      "AI helping content creation that saves time",
      "Spot on topic and keyword suggestions",
      "Performance predictions before you publish",
      "Automated distribution to the right channels"
    ]
  },
  {

    title: "Branding",
    description: "Build a brand they remember and trust",
    path: "/services/branding", 
    desc1:"A strong brand earns trust, stands out from competitors, and keeps customers coming back.",
    image: Branding,
    features: [
      "Brand identity development (logos, colours, typography)",
      "Brand voice and messaging guidelines",
      "Market positioning and storytelling",
      " Visual and verbal consistency across all channels"
    ]
  },
  {
 
    title: "Content Marketing with AI tools",
    description: "Create smarter content that gets results.",
    path: "/services/content-marketing", // Added path for navigation
    image: Content,
    desc1: "Create engaging blogs, articles, and multimedia content efficiently with latest AI make writing and design possibilities",
    features: [
      "AI helping content creation that saves time",
      "Spot on topic and keyword suggestions",
      "Performance predictions before you publish",
      "Automated distribution to the right channels"
    ]
  },
  {
    
    title: "AI Chatbots & Lead Generation",
    description: "Instant connections, Instant leads",
    path: "/services/chat-bots", // Added path for navigation
    image: Camp,
    desc1: "Delivering and responding human like support and create leads at scale with smart AI chatbots that never rest",
    features: [
      "Deliver and respond human like supportive ",
      "Chatbots that understand context and intent",
      "Seamless handoff to your team when needed",
      "Bots that get better with every conversation"
    ]
  },
  {
  
    title: "Customization & Strategy",
    description: "Marketing that's built around you",
    path: "/services/customization", // Added path for navigation
    image: Strategy,
    desc1: "Achieve better results with marketing strategies made by AI to match your goals and how your clients actually behave.",
    features: [
      "In depth competitor and market research",
      "Strategic marketing plans aligned with your goals",
      "Clear KPIs to measure success",
      "Ongoing fine tuning based on real results"
    ]
  },
  {

    title: "Web Development",
    description: "A Strong foundation for your digital growth",
    path: "/services/web-development", // Added path for navigation
    image: Webdev,
    desc1: "From fast loading pages to scalable backends, we build websites that are beautiful, secure, and ready for anything effective for both users and search engines.",
    features: [
      "Built with modern tech (React, Vue, Angular)",
      "Secure and scalable backend architecture",
      "Speed and performance optimization",
      "Fully SEO friendly structure from the ground up"
    ]
  },
  {

    title: "Web Designing",
    description: "Designs that captivate and convert.",
    path: "/services/web-designing", 
    image: Web,
    desc1: "We make visually stunning, instinctual websites that reflect your brand's personality and guide users exactly where you want them to go.",
    features: [
      "latest, user first designs",
      "Responsive layouts that look great on any devices",
      "Visuals designs match your brand identity",
      "Designs that make action and more conversions"
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

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

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
      "url": currentUrl,
      "mainEntity": {
        "@type": "WebSite",
        "name": "aieera - AI Digital Marketing Agency",
        "url": window.location.origin
      }
    };

    return [organizationSchema, serviceSchema, webPageSchema];
  };

  return (
    <div className="min-h-screen pt-16 bg-black">

      <HelmetProvider>
        <Helmet>
        <title>AI Digital Marketing Solutions | Automate Online Growth with AI</title>
        <meta name="description" content="Explore the future of digital marketing with AI. We deliver powerful AI-driven strategies that boost engagement, conversions, and business growth." />
        <meta name="keywords" content="digital marketing with ai, ai digital marketing, ai for digital marketing, ai in digital marketing" />

        <meta property="og:title" content="AI Digital Marketing Solutions | Automate Online Growth with AI" />
        <meta property="og:description" content="Explore the future of digital marketing with AI. We deliver powerful AI-driven strategies that boost engagement, conversions, and business growth." />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        
        <meta property="og:site_name" content="aieera" />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="aieera" />
        <meta name="language" content="English" />

        <link rel="canonical" href={currentUrl} />

        <script type="application/ld+json">
          {JSON.stringify(generateSchemaMarkup())}
        </script>
        </Helmet>
      </HelmetProvider>


      <div className="relative">

        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <BackgroundVideo
  videoSrc={BackgroundVide}
  posterSrc={BgPoster}
  className="min-h-screen"
/>

          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Welcome to the
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                ERA of Digital Marketing with <span className="animated-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-silver to-gray-300">
                  AI
                </span>,
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Built for You
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-gray-300 mb-12 max-w-5xl mx-auto"
            >
              Harness the complete power of your brand through AI digital marketing. Achieve results through intelligent automation, precision-targeted campaigns, and real-time data insights designed for your success
            </motion.p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px 2px rgba(192, 192, 192, 0.7), 0 0 30px 5px rgba(192, 192, 192, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full text-lg font-semibold transition-all duration-300 border border-gray-400 shadow-lg group overflow-hidden"
              onClick={() => navigate('/services')}
            >
              {/* Silver glow overlay */}
              <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full pointer-events-none">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 to-gray-100 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-gray-300 to-silver opacity-30 blur-sm group-hover:opacity-60 group-hover:blur-md transition-all duration-300"></div>
              </div>

              {/* Button text */}
              <span className="relative z-10 bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-100 group-hover:to-white transition-all duration-300">
                Get Started
              </span>
            </motion.button>
          </motion.div>
        </div>

      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-black">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-100">Services</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto"
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
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white p-3 rounded-full transition-colors duration-300 shadow-md border border-gray-700"
                onClick={() => swiperRef.current.swiper.slidePrev()}
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right arrow */}
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white p-3 rounded-full transition-colors duration-300 shadow-md border border-gray-700"
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
                  className="card-with-glazing w-[300px] md:w-[320px] lg:w-[350px] h-96 rounded-xl overflow-hidden bg-black shadow-5xl hover:shadow-2xl transition-all duration-500 group relative border border-gray-800"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  {/* Microdata attributes for individual services */}
                  <meta itemProp="name" content={item.title} />
                  <meta itemProp=" text-justify description" content={item.description} />
                  <meta itemProp="url" content={`${window.location.origin}${item.path}`} />

                  {/* Background Image - Hidden by default, shown on hover */}
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      itemProp="image"
                      loading="lazy"
                    />
                    {/* Dark overlay to ensure text and button are visible over any image */}
                    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                  </div>

                  {/* Content visible when not hovered */}
                  <div className="p-6 flex flex-col justify-between h-full relative z-10 group-hover:opacity-0 transition-opacity duration-500">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-200 mb-2" itemProp="name">{item.title}</h3>
                      <p className="text-gray-400 mb-4 font-bold" itemProp="description">{item.description}</p>
                      <p className="text-gray-400 mb-4">{item.desc1}</p>

                      {/* Features with bullet points */}
                      <ul className="space-y-1" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start" itemProp="itemListElement" itemScope itemType="https://schema.org/OfferCatalogItem">
                            <span className="text-gray-400 mr-2">•</span>
                            <span itemProp="itemOffered">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Hover Content - Title and Learn More Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 p-6">
                    <h3 className="text-2xl font-bold text-gray-100 mb-auto mt-6">{item.title}</h3>

                    <div className="mb-6 mt-auto">
                      <button
                        className="relative flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-600"
                        onClick={() => handleNavigateToService(item.path)}
                        aria-label={`Learn more about ${item.title}`}
                      >
                        {/* Glossy overlay */}
                        <span className="absolute inset-0 bg-white opacity-10 rounded-xl pointer-events-none" />

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

      <div className=" w-full min-h-screen overflow-hidden bg-black" itemScope itemType="https://schema.org/Organization">

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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight mb-6" itemProp="slogan">
              Upgrade Your Brand with{" "}
              <span className="text-gray-400" itemProp="name">aieera</span> AI Automated Marketing
            </h2>

            <p className="text-gray-300 text-base text-justify sm:text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0" itemProp="description">
              Our team drives growth through targeted research data data effective strategies, creative innovation, and a deep understanding of the brand marketing.
            </p>
          </motion.div>

         
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 px-4"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <img
                src={teamwork}
                alt="Digital Marketing Team"
                className="w-full h-auto opacity-90"
                itemProp="image"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
        </div>

      </div>
      <div className=" w-full min-h-screen overflow-hidden bg-black" itemScope itemType="https://schema.org/Organization">

<div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-4 md:px-12 gap-10 pt-20 md:pt-0">



 
<motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 px-4"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <img
                src={team}
                alt="Digital Marketing Team"
                className="w-full h-auto opacity-90"
                itemProp="image"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="w-full md:w-1/2 text-center md:text-left"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 leading-tight mb-6" itemProp="slogan">
    Shaping Tomorrow’s Brands Today
    </h2>

    <p className="text-gray-300 text-base text-justify sm:text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0" itemProp="description">
    Choosing aieera means more than just hiring a marketing team it's about partnering with a team that lives and breathes innovation, purpose, and results. We foster a culture rooted in happiness, dedication, and shared success where every milestone we reach with you is a victory for us all.
Our passionate team doesn’t just show up to work they show up with AI assisted tools, creative ideas, collaborative energy, and big dreams. In our world, innovation isn’t just welcomed t’s cherished, nurtured, and turned into results. With aieera, you’re not only keeping up with the future of marketing, you're helping to shape it.

    </p>
  </motion.div>
</div>

</div>
    </div>
  );
};

export default Home;