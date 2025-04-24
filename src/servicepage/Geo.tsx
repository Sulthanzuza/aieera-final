import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, Database, LineChart, MessageSquare, Search, ArrowRight } from 'lucide-react';

const GEOService = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-First Optimization",
      description: "Structure content for optimal interpretation by AI assistants and language models."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Structured Data Markup",
      description: "Enhanced data organization for better AI comprehension and visibility."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Semantic Content Tuning",
      description: "Fine-tune your content for natural language processing systems."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Context-Aware LLM Optimization",
      description: "Optimize for contextual understanding across AI platforms."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Hero Section with Animated Background */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg')] bg-cover bg-center opacity-10" />
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
                Next-Gen SEO Solution
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
              >
                Generative Engine
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                  Optimization
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl"
              >
                Traditional SEO is no longer enough. Enter the era of Generative Engine Optimization—where we optimize for AI assistants, not just search engines.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center group">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors">
                  Learn More
                </button>
              </motion.div>
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
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                  alt="AI Visualization"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose GEO?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI tools are becoming the primary gateway for information discovery. Make sure your content stands out in this new era.
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

export default GEOService;