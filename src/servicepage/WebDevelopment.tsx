import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LayoutDashboard, Zap, Server, TrendingUp,ArrowRight } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/web dev1.webp'
import Img2 from '../assets/services/webdev2.webp'
import Img3 from '../assets/services/webdev3.webp'
import Img4 from '../assets/services/web devbg.webp'
import BG from '../assets/services/web devbg.webp'
import Main from "../assets/web development.webp"
import Helmet from 'react-helmet'
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
      title: "Responsive Web Design",
      heading: "Flawless Performance Across All Devices",
      description:
        "In a mobile-driven world, your website must perform flawlessly across all devices. We design and develop responsive websites that automatically adapt to screen size and orientation, ensuring your visitors enjoy a seamless experience whether they’re on desktop, tablet, or mobile."
    },
    {
      title: "SEO & Performance Optimized",
      heading: "Every Line of Code is Core Web Vitals",
      description:
        "We build with speed, structure, and search visibility in mind right from the first line of code. No bloated themes. No unnecessary scripts. Just clean, efficient, and modern development that meets—and often exceeds—Google’s Core Web Vitals standards.\n\nOur sites load fast, interact smoothly, and maintain visual stability, delivering a better user experience while improving your SEO rankings."
    },
    {
      title: "Marketing First Architecture",
      heading: "Web Builds Structured to Drive Conversions, Not Just Look Pretty",
      description:
        "We design and develop websites with one goal in mind: growth. A beautiful website is great, but beauty without purpose doesn’t drive results.\n\nThat’s why every element we build—from layout to functionality—is grounded in proven marketing strategies that guide visitors toward conversion."
    },
    {
      title: "Modern Frontend Frameworks",
      heading: "React, Vue, or Angular — We Make It Fast, Fluid, and User Friendly",
      description:
        "We specialize in building snappy, responsive interfaces using today’s most powerful frontend frameworks.\n\nWhether you prefer React for its component-driven efficiency, Vue for its flexibility, or Angular for its enterprise-level structure, we deliver a seamless user experience tailored to your needs and stack."
    }
  ];
  
  

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <Helmet>
              
              <title>Web Development Company in UAE | Website Design Dubai </title>
              <meta name="description" content="Professional web development company in UAE offering website design and development services in Dubai. Build stunning, high-performing websites with us today" />
              <meta name="keywords" content="web development company in uae, website development company dubai, website design company dubai" />
              <meta property="og:title" content="Web Development Company in UAE | Website Design Dubai" />
              <meta property="og:description" content="Professional web development company in UAE offering website design and development services in Dubai. Build stunning, high-performing websites with us today" />
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
               Next gen Design Engine
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-4 md:mb-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                  Web Development
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
      <section ref={ref} className="py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why build with us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In today’s digital first world, your website is often the first interaction a customer has with your brand. At Aieera, we build powerful, elegant, and user-focused websites that elevate your brand and drive real results. Whether you're a startup or an established business, our web development solutions are designed to help you grow and scale online. </p>
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
  src={images[index]}
  alt={feature.title}
    loading="lazy"
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