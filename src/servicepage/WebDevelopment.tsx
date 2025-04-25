import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LayoutDashboard, Zap, Server, TrendingUp,ArrowRight } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/web dev1.jpg'
import Img2 from '../assets/services/webdev2.jpeg'
import Img3 from '../assets/services/webdev3.jpeg'
import Img4 from '../assets/services/web devbg.jpeg'
import BG from '../assets/services/web devbg.jpeg'
import Main from "../assets/web development.jpeg"
const images = [Img1, Img2, Img4, Img3];
const Webdev = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedWords = [
    
    "performance",
    "speed",
    "security",
    "reliability",
    "growth",
    "scalability",
    "stability",
    "accessibility",
    "integration",
    "results"
  ];
  
  const features = [
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Marketing-First Architecture",
      description: "Web builds structured to drive conversions, not just look pretty."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Modern Frontend Frameworks",
      description: "React, Vue, or Angular—whatever your stack, we make it fast, fluid, and user-friendly."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Scalable Backend Engineering",
      description: "Built on Node.js, Express, or Python to grow with your business."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO & Performance Optimized",
      description: "Every line of code is Core Web Vitals-ready and search-engine friendly by default."
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
          className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full text-sm font-medium mb-6"
              >
                Future-Ready Web Development
              </motion.div>
  
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Web Development
                </h1>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                   is
                </h1>
                <AnimatedWords words={animatedWords} interval={3000} />
              </motion.div>
  
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl"
              >
                "What if your website could *sell* before your sales team ever picked up the phone?"
              </motion.p>
            </div>
  
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex-1 relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse" />
                <img
                  src={Main}
                  alt="Web Development Illustration"
                  className="relative z-10 rounded-2xl object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
  
      {/* Features Section */}
      <section ref={ref} className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Build With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From conversion-focused landing pages to lightning-fast full-stack apps, our builds are made to perform—and scale.
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
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20" />
                    <div className="relative bg-gray-900 p-8 rounded-2xl border border-white/10">
                      <div className="text-purple-500 mb-6">{feature.icon}</div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                      <button className="mt-6 text-purple-400 flex items-center group">
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <img 
  src={images[index]}
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

export default Webdev;