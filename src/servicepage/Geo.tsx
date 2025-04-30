import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, Database, LineChart, MessageSquare, Search, ArrowRight } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/geo1.jpeg'
import Img2 from '../assets/services/geo2.jpeg'
import Img3 from '../assets/services/geo3.jpeg'
import Img4 from '../assets/services/geo4.jpeg' 
import Helmet from 'react-helmet';
const images = [Img1, Img2, Img4,Img3];

const GEOService = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animatedWords = [
    "visibility",
    "authority",
    "automation",
    "strategy",
    "precision",
    "scalability",
    "reach",
    "momentum",
    "ranking",
    "dominance"
  ];

  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-First Optimization",
      description: "Structure your content to ensure it’s easily interpreted by AI assistants and large language models (LLMs)"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Structured Data Markup",
      description: "Use schema markup and metadata to structure your content, enabling AI systems to better interpret and display your information."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Semantic Content Tuning",
      description: "Define your language, tone, and phrasing to align with how NLP systems process and respond to queries."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Context-Aware LLM Optimization",
      description: "Make content with contextual understanding in mind so it resonates across various AI ecosystems."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      
      <Helmet>
              
              <title>Generative Engine Optimization Agency | Advanced GEO Services</title>
              <meta name="description" content="Boost your digital presence with our Generative Engine Optimization services. As a leading GEO agency, we drive smarter, faster, and more personalized online growth." />
              <meta name="keywords" content="Generative Engine Optimization Agency, generative engine optimization services" />
              <meta property="og:title" content="Generative Engine Optimization Agency | Advanced GEO Services" />
              <meta property="og:description" content="Boost your digital presence with our Generative Engine Optimization services. As a leading GEO agency, we drive smarter, faster, and more personalized online growth." />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="aieera" />
              <meta name="robots" content="index, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="author" content="aieera" />
              <meta name="language" content="English" />
              
              
              <link rel="canonical" href={window.location.href} />
            </Helmet> 
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
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Generative Engine
                </h1>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Optimization is
                </h1>
                <AnimatedWords words={animatedWords} interval={3000} />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl"
              >
                Traditional SEO alone won’t cut it success now depends on how well your content serves AI driven platforms.
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
            AI assistants like ChatGPT, Bard, and Copilot are becoming the new front door to the internet. To stay relevant, your content must not only rank on search engines but also be understood, selected, and surfaced by AI.

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
                     
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                      
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

export default GEOService;