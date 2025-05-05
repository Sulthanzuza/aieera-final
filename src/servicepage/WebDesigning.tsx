import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Pen, LayoutTemplate, Eye, Code2, Sparkles ,ArrowRight } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/web des1.webp'
import Img2 from '../assets/services/geo2.webp'
import Img3 from '../assets/services/geo3.webp'
import Img4 from '../assets/services/geo4.webp' 
import BG from '../assets/services/webdesbg.webp'
import Main from "../assets/services/pexels-photo-4348404.webp"
const images = [Img1, Img2, Img4,Img3];
const Webdesign = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedWords = [
    "trust",
    "clarity",
    "ease",
    "speed",
    "professionalism",
    "navigation",
    "confidence",
    "accessibility",
    "responsiveness",
    "experience"
  ];
  
  
  const features = [
    {
      title: "Conversion Driven UI",
      heading: "Designs that Convert, Not Just Impress",
      description:
        "We don’t design for vanity—we design for action. Our user interfaces are crafted to guide visitors through a seamless journey from landing to conversion. Every element—from button placement and color psychology to layout hierarchy and micro-interactions—is intentionally built to increase conversions."
    },
    {
      title: "Made to Feel Effortless",
      heading: "UX Grounded in Human Behavior",
      description:
        "We design with empathy, usability, and natural flow at the core. By leveraging behavioral psychology and user research, we create intuitive paths aligned with how real people think, browse, and decide. Every touchpoint is thoughtfully structured to eliminate friction and enhance flow."
    },
    {
      title: "Responsive by Default",
      heading: "Flawless Experience on Any Device",
      description:
        "Responsiveness is never an afterthought—it’s built from the start. Using fluid grids, adaptive components, and mobile-first principles, we ensure your site looks and feels amazing on every screen size—smartphone, tablet, or desktop."
    },
    {
      title: "Built for Visual Impact",
      heading: "Motion, Color, and Typography That Captivate",
      description:
        "We blend bold aesthetics with strategic creativity to make your brand stand out. Through animation, color theory, and expressive typography, we craft an experience that resonates emotionally and visually—creating a lasting impression from the first glance."
    }
  ];
  
  

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${BG})` }}
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
                 Intelligent Web Design
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-4 md:mb-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                  Web Designing
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                 is
                </h1>
                <AnimatedWords words={animatedWords} interval={3000} />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
               What if your website actually drove sales, not just traffic?
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
                    alt="AI Visualization"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Do Users Stay Longer on Our Websites?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond aesthetics our designs are rooted in psychology, interactive, and clarity to convert casual visits into long connections. </p>
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
                      <h6 className="text-xl mb-4">{feature.heading}</h6>
                      <p className="text-gray-300">{feature.description}</p>
                      
                    </div>
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img
                    src={`https://images.pexels.com/photos/${3861958 + index}/pexels-photo-${3861958 + index}.jpeg`}
                    alt={feature.title}
                    className="rounded-2xl shadow-2xl"
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

export default Webdesign;