import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Search, Code, ArrowRight,Activity } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/smm1.webp'
import Img2 from '../assets/services/smm2.webp'
import Img3 from '../assets/services/smm3.webp'
import Img4 from '../assets/services/Social Media Management Strategies.webp'
import Helmet from 'react-helmet'
import Main from '../assets/services/ssmmain.webp'
import Bg from '../assets/services/ssmbg.webp' 
const images = [Img1, Img2, Img4,Img3];
const SMM = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedWords = [
    "engagement",
    "reach",
    "growth",
    "consistency",
    "content",
    "branding",
    "influence",
    "community",
    "visibility",
    "momentum"
  ];
  
  const features = [
    {
      title: "Wider Reach",
      heading: "Connect with the World",
      description:
        "Platforms like Facebook, Instagram, LinkedIn, and TikTok host billions of users daily. Whether you're aiming globally or targeting a niche demographic, social media gives you unmatched power to reach the right people at the right time—helping you build brand awareness and stay competitive in a digital-first world."
    },
    {
      title: "Targeted Advertising",
      heading: "Reach Who Matters Most",
      description:
        "Social platforms offer advanced targeting tools that let you reach people based on age, location, interests, behaviors, and more. This precision ensures your content connects with those most likely to engage, improving campaign performance and maximizing ROI by cutting wasteful ad spend."
    },
    {
      title: "Boosts Website Traffic and SEO",
      heading: "Turn Shares into Searches",
      description:
        "By sharing direct links to your site, social media channels become a consistent traffic source. Increased engagement through likes, shares, and comments also enhances your visibility, contributing to higher SEO rankings and more backlinks—fueling both brand discovery and organic growth."
    },
    {
      title: "Brand Awareness & Loyalty",
      heading: "Familiar Faces Build Trusted Brands",
      description:
        "Frequent, value-driven posts build brand recognition, while meaningful engagement shows you care. By responding to comments and feedback, you create emotional connections that foster loyalty—turning followers into advocates and customers into community members."
    }
  ];
  

  

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <Helmet>
              
              <title>Social Media Marketing Agency Dubai | SMM Company UAE </title>
              <meta name="description" content=" Leading social media management company in Dubai. Grow your brand online with powerful strategies crafted by a top social media marketing agency" />
              <meta name="keywords" content="social media management company dubai, social media marketing agency dubai " />
              <meta property="og:title" content="Social Media Marketing Agency Dubai | SMM Company UAE" />
              <meta property="og:description" content=" Leading social media management company in Dubai. Grow your brand online with powerful strategies crafted by a top social media marketing agency" />
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
                  Social Media 
                </h1>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Marketing is
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Social Media Marketing?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Social media marketing is essential for modern businesses and brands because it offers unique advantages that traditional marketing channels can't match.</p>
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
   loading="lazy"
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

export default SMM;