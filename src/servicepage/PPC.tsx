import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/ppc2.webp'
import Img2 from '../assets/services/ppc3.webp'
import Img3 from '../assets/services/ppcbg.webp'
import Img4 from '../assets/services/Latest PPC Trends in 2022_ Need To Be Follow.webp'
import Bg from '../assets/ppc.webp' 
import Main from '../assets/services/best digital marketing company in Chennai.webp'
import { Helmet,HelmetProvider } from 'react-helmet-async';




const images = [Img1, Img2, Img4,Img3];
const PaidAds = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedWords = [
    "performance",
    "precision",
    "ROI",
    "targeting",
    "optimization",
    "automation",
    "reach",
    "efficiency",
    "clicks",
    "conversions"
  ];
  
  const features = [
    {
      title: "Automated Campaign Management",
      heading: "Launch fast, optimize smarter, scale effortlessly with AI.",
      description:
        "Automated Campaign Management uses AI to launch, optimize, and scale marketing efforts. It sets up campaigns, targets the right audience, writes ad copy, and allocates budgets intelligently. In real-time, it adjusts bids, tests creatives, refines targeting, and improves content based on performance. As results grow, it scales successful strategies to new audiences or regions, maximizing ROI with minimal manual effort."
    },
    {
      title: "Smart A/B Testing",
      heading: "Test smarter, spend wiser, let AI pick the winners.",
      description:
        "Smart A/B Testing uses AI to automatically test and optimize ad variations (headlines, images, CTAs, and more) by tracking performance in real-time. It shifts budget to top-performing ads, cuts underperformers, and continuously learns what drives results. This speeds up decision-making, reduces wasted spend, and ensures every marketing dollar is used effectively."
    },
    {
      title: "Customer Journey Intelligence",
      heading: "See the whole journey, turn insights into action.",
      description:
        "Customer Journey Intelligence is the process of tracking, analyzing, and understanding every interaction a customer has with your brand before making a purchase. It provides a complete view of the path customers take from discovering your business to exploring your offerings and finally deciding to buy."
    },
    {
      title: "Real-Time Performance Insights",
      heading: "Smarter Decisions. Better ROI. Instantly.",
      description:
        "Unlock advanced data with immediate, actionable insights into your ad campaigns. Our advanced analytics platform monitors every click, impression, and conversion in real-time, giving you the clarity you need to make smarter decisions, faster. Identify high-performing channels, uncover underperforming segments, and adjust strategies instantly."
    }
  ];
  

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
     <HelmetProvider>
              <Helmet>
              <title>PPC Agency Dubai | Google Ads Management Experts</title>
              <meta name="description" content="Partner with a top PPC agency in Dubai. Expert Google Ads management and PPC services tailored to maximize your ROI and drive targeted traffic" />
              <meta name="keywords" content="ppc agency dubai, google ads agency in dubai, ppc management dubai" />
              <meta property="og:title" content="PPC Agency Dubai | Google Ads Management Experts" />
              <meta property="og:description" content="Partner with a top PPC agency in Dubai. Expert Google Ads management and PPC services tailored to maximize your ROI and drive targeted traffic" />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="aieera" />
              <meta name="robots" content="index, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="author" content="aieera" />
              <meta name="language" content="English" />
              
              
              <link rel="canonical" href={window.location.href} />
              </Helmet>
            </HelmetProvider>
            <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${Bg})` }}
        /> 
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1 text-center lg:text-left w-full lg:w-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full text-sm font-medium mb-4 md:mb-6"
              >
                Next gen Ad Engine
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-4 md:mb-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                AI-Powered 
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                PPC / Paid Ads is
                </h1>
                <AnimatedWords words={animatedWords} interval={3000} />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Would you rather manage ads manually or let AI find the highest converting audience for you ?
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex-1 relative w-full max-w-sm sm:max-w-md md:max-w-lg mt-6 lg:mt-0"
            >
              <div className="relative w-full aspect-square mx-auto">
                {/* Background gradient glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-stone-100 rounded-full blur-3xl opacity-20 animate-pulse" />
                
                <motion.div
                  className="relative z-10 w-full h-full rounded-2xl overflow-hidden"
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}  
                  animate={{ clipPath: 'inset(0 0 0% 0)' }}
                  transition={{
                    duration: 3.2,
                    delay: 0.7,
                    ease: [0.25, 1, 0.5, 1]
                  }}
                >
                  <img
                    src={Main}
                    alt="ai digital marketing"
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
  
      {/* Features Section */}
      <section ref={ref} className="py-20 ">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose AI Powered PPC?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Smarter ads. Better results. Powered by AI.
 <br />
 Let AI take the guesswork out of your campaigns. Boost ROI, eliminate ad spend waste, and unlock scalable growth with data driven precision.
 
            </p>
          </motion.div>
  
          <div className="mt-20 space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row items-center gap-12 relative"
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-stone-100 rounded-2xl blur-2xl opacity-20" />
                    <div className="relative bg-gray-900/30 p-8 rounded-2xl border border-white/10">
                    
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <h6 className="text-xl  mb-4">{feature.heading}</h6>
                      <p className="text-gray-300">{feature.description}</p>
                      
                    </div>
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
  src={images[index]}
  alt={feature.title}
  className="rounded-2xl shadow-2xl"
    loading="lazy"
/>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
  
};

export default PaidAds