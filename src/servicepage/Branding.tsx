import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Search, Code, ArrowRight, Activity } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/brandding1.jpg'
import Img2 from '../assets/services/branding2.webp'
import Img3 from '../assets/services/pexels-sliceisop-2460434.jpg'
import Img4 from '../assets/services/pexels-eva-bronzini-7661590.jpg'
import BG from '../assets/services/branding 1.jpg'
import Helmet from 'react-helmet'
const images = [Img1, Img2, Img4, Img3];

const Branding = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedWords = [
    "future",
    "innovation",
    "growth",
    "success",
    "excellence"
  ];

  const features = [
    {
      title: "Builds Trust and Credibility",
      heading: "Consistency Builds Confidence",
      description:
        "A well-defined brand helps establish trust with your audience. When your visuals, messaging, and tone are consistent across every touchpoint—from your website to social media—it shows professionalism.\n\nPeople are more likely to trust and engage with a brand that appears polished and cohesive."
    },
    {
      title: "Differentiates You from Competitors",
      heading: "Stand Out by Being Unmistakably You",
      description:
        "Branding allows you to highlight what makes you unique. In a crowded market, your brand identity sets you apart.\n\nIt’s not just your logo or tagline—it’s your story, your values, your mission, and how you communicate. A strong brand tells people why they should choose you over anyone else."
    },
    {
      title: "Creates Emotional Connection",
      heading: "Win Hearts, Not Just Wallets",
      description:
        "People connect with brands on an emotional level. Great branding goes beyond rational benefits; it evokes feelings—trust, excitement, comfort, or aspiration.\n\nThese emotional triggers drive loyalty and long-term engagement, turning casual customers into brand advocates."
    },
    {
      title: "Supports Marketing and Sales",
      heading: "A Strong Brand Supercharges Your Growth",
      description:
        "Your brand acts as the foundation for all marketing efforts. Every campaign—from digital ads to email newsletters—relies on a consistent and compelling brand voice.\n\nA unified brand message improves visibility, boosts conversions, and gives people a reason to care and act."
    }
  ];
  

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
        <Helmet>
              
              <title>Top Branding Agency in Dubai | Creative Branding Solutions</title>
              <meta name="description" content="Looking for the best branding agency in Dubai? Our creative agency delivers powerful branding strategies that elevate your business identity and market presence" />
              <meta name="keywords" content="branding agency dubai, creative agency dubai" />
              <meta property="og:title" content="Top Branding Agency in Dubai | Creative Branding Solutions" />
              <meta property="og:description" content="Looking for the best branding agency in Dubai? Our creative agency delivers powerful branding strategies that elevate your business identity and market presence" />
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
                  Branding
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
                "What if SEO could predict trends before they happen?"</motion.p>


            </div>

  <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="flex-1 relative"
    >
      <div className="relative w-full aspect-square max-w-lg mx-auto">
        {/* Background gradient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-stone-100 rounded-full blur-3xl opacity-20 animate-pulse" />
        
        {/* Container for the image with clip-path animation */}
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
            src={BG}
             loading="lazy"
            alt="AI Visualization"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Branding?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            In today’s crowded marketplace, branding is more than just a logo it’s the story, emotion, and experience behind your business. It shapes how people perceive you, influences their decisions, and plays a crucial role in your overall growth. Here’s why investing in branding is essential for long term success.</p>
          </motion.div>

          <div className="mt-20 space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row items-center gap-12 relative "
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-stone-100 rounded-2xl blur-2xl opacity-20" />
                    <div className="relative bg-gray-900/30 p-8 rounded-2xl border border-white/10 ">
                   
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

export default Branding;