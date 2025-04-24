import React from 'react';
import { motion } from 'framer-motion';


import Seo from "../assets/seo.jpeg"
import Fully from "../assets/🎮 Level Up Your Workspace_ AI Edition 2024.jpeg"
import More from "../assets/Pioneering Progress_ Navigating Digital Transformation Services.jpeg"
import Pedictive from "../assets/Play preview video.jpeg"
import AI from "../assets/🗣️ AI Voice_ Super Realistic!.jpeg"
import Human from "../assets/@parisisarobot ✶˖_°࿐.jpeg"
import Omni from "../assets/download (1).jpeg"

const roadmapItems = [
  {
    title: "Fully Autonomous & AI Guided",
    description: "Imagine a world where your marketing campaigns run themselves smart agents tracking performance, optimizing ads, adjusting strategies, and generating high converting content in real time. That's the future we're building at aieera.",
    image: Fully,
    
  },
  {
    title: "More Personalized Experiences",
    description: "No more generic ads or all in one campaign. Our AI systems will soon deliver custom made content to each individual customer based on their behaviour, interests, and real time engagements across every platform.",
    
    image: More,
    
  },
  {
    title: "Predictive Analytics That Act, Not Just Report",
    description: "We are guiding our AI agents to predict traffic trends, on time ranking drops before they happen, and automatically deploy corrective actions keeping you one step ahead of the competition.",
    
    image: Pedictive,
    
  },
  {
    title: "AI Monitoring & Instant Action",
    description: "The future of digital marketing is always on. While your business sleeps, our AI agents will be watching, analysing, and executing targeted marketing strategies so you never miss a growth opportunity.",
    
    image: AI,
    
  },
  {
    title: "Human Creativity, Turbocharged by AI",
    description: "Our goal isn't to replace human brilliance it's to blend it. We're building tools that free your team from repetitive tasks, allowing them to focus on strategy, innovation, and even selling",
    
    image: Human,
    
  },
  {
    title: "Omnichannel AI Integration",
    description: "Seamless integration across all platforms - from social media to search engines to email campaigns. Our AI will manage your entire digital presence with perfect harmony.",
    
    image: Omni,
    
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  right: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Future = () => {
  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-gradient-to-r from-purple-300 to-pink-300"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
          >
            The Future of
            <br />
            <motion.span 
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 bg-[length:200%_200%]"
            >
              AI Marketing
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-16"
          >
            At aieera, we don't just follow trends we set them. Our vision is to reshape how businesses approach SEO, advertising, and user's engagement through latest AI technologies.
          </motion.p>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="inline-block"
          >
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-medium shadow-lg">
              The Future is Intelligent
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Animated timeline */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gray-700 via-gray-500 to-gray-900 rounded-full"
          />
          
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? itemVariants : itemVariants.right}
              className="relative mb-24 last:mb-0"
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Content Card */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className={`relative rounded-2xl p-6 max-w-lg shadow-xl backdrop-blur-sm ${index % 2 === 0 ? 'mr-8' : 'ml-8'} bg-white/90`}
                  style={{
                    boxShadow: `0 10px 30px -5px rgba(0, 0, 0, 0.1)`
                  }}
                >
                  
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    <span className={`bg-clip-text text-transparent text-slate-700`}>
                      {item.title}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-justify mb-4">{item.description}</p>
                  
                  <motion.div
                    variants={imageVariants}
                    whileHover="hover"
                    className="mt-4 overflow-hidden rounded-lg shadow-md"
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Timeline dot */}
            
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-20 blur-xl"
        />
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 opacity-20 blur-xl"
        />
      </div>
    </div>
  );
};

export default Future;