import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {  BarChart2, RefreshCcw, Compass, ArrowRight,Activity } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/ppc2.jpeg'
import Img2 from '../assets/services/ppc3.jpeg'
import Img3 from '../assets/services/ppcbg.jpeg'
import Img4 from '../assets/services/geo4.jpeg'
import Bg from '../assets/ppc.jpeg' 
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
      icon: <RefreshCcw className="w-8 h-8" />,
      title: "Automated Campaign Management",
      description: "Launch, optimize, and scale campaigns with AI that continuously adapts in real-time.",
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Smart A/B Testing",
      description: "AI monitors test performance and shifts budget to winning ads without manual input.",
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Customer Journey Intelligence",
      description: "Track and understand every step your customer takes before they click ‘buy’.",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-Time Performance Insights",
      description: "Get instant, actionable insights to boost ROI and eliminate wasted ad spend.",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <div className="relative min-h-screen">
      <div
  className="absolute inset-0 bg-cover bg-center opacity-10"
  style={{ backgroundImage: `url(${Bg})` }}
/> <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/80 to-[#0A0A0A]" />
  
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
                Smarter Ad Campaigns
              </motion.div>
  
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                AI-Powered
                </h1>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                PPC / Paid Ads is
                </h1>
                <AnimatedWords words={animatedWords} interval={3000} />
              </motion.div>
  
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl"
              >
                "What if your ad budget could optimize itself in real time?"
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
                  src={Bg}
                  alt="AI Paid Ads"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose AI-Powered PPC?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Maximize ROI, reduce waste, and scale smarter. Our AI dynamically adapts to performance data and intent signals—no guesswork, just growth.
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

export default PaidAds