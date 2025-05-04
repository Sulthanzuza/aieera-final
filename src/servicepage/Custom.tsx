import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Search, Code, ArrowRight,Activity } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/custom1.jpeg'
import Img2 from '../assets/services/custom main.jpeg'
import Img3 from '../assets/services/custom3.jpeg'
import Img4 from '../assets/services/custom4.jpeg'
import Main from '../assets/services/custommain.jpeg'
import Img5 from '../assets/services/custom5.jpeg'
import Img6 from '../assets/services/custom6.jpeg'
import Bg from '../assets/services/custombg.jpeg' 
import Helmet from 'react-helmet'
const images = [Img1, Img2, Img4,Img3,Img6,Img5];

const Customization = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedWords = [
    "personalization",
    "precision",
    "strategy",
    "insight",
    "tailored",
    "optimization",
    "alignment",
    "scalability",
    "focus",
    "efficiency"
  ];
  
  const features = [
    {
      title: "Tailored Solutions for Unique Goals",
      heading: "Your business isn’t generic, your strategy shouldn’t be either.",
      description:
        "Every brand has different goals, audiences, and challenges. Customization allows your strategies—whether for marketing, UX, or product delivery—to align specifically with what matters most to your business. This ensures higher relevance, better performance, and more efficient resource use."
    },
    {
      title: "Competitive Advantage Through Personalization",
      heading: "Stand out by being made-to-fit",
      description:
        "Customized strategies help you break through the noise and differentiate from competitors. By aligning your message, offerings, and touchpoints with your unique audience, you create a stronger connection that generic approaches simply can’t match."
    },
    {
      title: "Better ROI from Strategic Precision",
      heading: "Invest smarter with results that reflect your reality.",
      description:
        "A well-defined strategy ensures that every move is intentional and optimized for return. Whether it’s choosing the right platforms, timing, content formats, or offers, a customized approach reduces guesswork, eliminates waste, and drives measurable ROI."
    },
    {
      title: "Agility & Scalability Built In",
      heading: "Grow fast and smart with adaptable strategies.",
      description:
        "Custom strategies are designed with your specific growth trajectory in mind. They can scale and evolve as your business does, enabling you to pivot quickly in response to market changes or internal shifts without starting from scratch."
    },
    {
      title: "Customer Centric Experience",
      heading: "Built around them, delivered by you.",
      description:
        "When your strategy is built on real customer insights, behaviour data, and personalization, every touchpoint becomes more relevant and engaging. This leads to better customer satisfaction, higher retention, and stronger brand loyalty."
    },
    {
      title: "Data made Decision Making",
      heading: "Less guesswork. More growth.",
      description:
        "Custom strategies leverage your unique performance data to make informed decisions. By analysing what works and what doesn’t for your specific audience and business context, you stay ahead with continuous optimization and clear direction."
    }
  ];
  

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <Helmet>
              
              <title>Personalized Digital Marketing Strategies | Custom Growth Solutions</title>
              <meta name="description" content="Unlock your brand’s full potential with personalized digital marketing strategies. Customized solutions designed to drive measurable growth and success" />
              <meta name="keywords" content="personalized digital marketing" />
              <meta property="og:title" content="Personalized Digital Marketing Strategies | Custom Growth Solutions" />
              <meta property="og:description" content="Unlock your brand’s full potential with personalized digital marketing strategies. Customized solutions designed to drive measurable growth and success" />
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
      <div
  className="absolute inset-0 bg-cover bg-center opacity-10"
  style={{ backgroundImage: `url(${Bg})` }}
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
                Next-Gen SEO Solution
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Customization
                </h1>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                & Strategy is
                </h1>
                <AnimatedWords words={animatedWords} interval={3000} />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl"
              >
             "What if SEO could predict trends before they happen?"</motion.p>
              

            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex-1 relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-stone-100 rounded-full blur-3xl opacity-20 animate-pulse" />
                <img 
                  src={Main}
                    loading="lazy"
                  alt="AI Visualization"
                  className="relative z-10 rounded-2xl object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section ref={ref} className="py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Customization & Strategy?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Because all in one solutions don’t work in a world where every business and every customer are different. </p>
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
                    <div className="relative bg-gray-900 p-8 rounded-2xl border border-white/10">
                     
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

export default Customization;