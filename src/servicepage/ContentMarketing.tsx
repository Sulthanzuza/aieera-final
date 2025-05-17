import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/content 1.webp'
import Img2 from '../assets/services/content2.webp'
import Img3 from '../assets/services/content3.webp'
import Img4 from '../assets/services/content4.webp'
import Img5 from '../assets/services/content5.webp'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import Main from '../assets/services/content main.webp'
import Bg from '../assets/services/contentbg.webp' 
const images = [Img1, Img2, Img4,Img3,Img5];
const Content = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedWords = [
    "creativity",
    "consistency",
    "scalability",
    "strategy",
    "engagement",
    "storytelling",
    "relevance",
    "insights",
    "speed",
    "impact"
  ];
  
  const features = [
    {
      title: "Build Authority & Trust",
      heading: "Be the expert they remember and the brand they choose.",
      description:
        "Creating high-value, informative content like blogs, whitepapers, guides, or videos demonstrates your expertise. When people repeatedly find useful, relevant information from your brand, they begin to see you as a credible authority. This trust influences buying decisions and fosters long-term customer loyalty. Trust builds relationships, and relationships build revenue."
    },
    {
      title: "Boost Organic Traffic & SEO",
      heading: "Drive more traffic without paying for every click.",
      description:
        "Search engines love fresh, relevant content. With the right keywords, structure, and strategy, your blog posts, landing pages, and other content can rank high in search results. This helps drive consistent, high-quality organic traffic to your website without constantly spending on ads. Over time, great content becomes a traffic magnet."
    },
    {
      title: "Increase Engagement & Retention",
      heading: "Keep your audience coming back for more.",
      description:
        "Content allows you to connect with your audience on a deeper level by answering their questions, solving their problems, and offering value at every touchpoint. Engaging formats like videos, infographics, interactive tools, or case studies keep people interested and encourage them to spend more time with your brand. The more they engage, the more they remember you."
    },
    {
      title: "Generate & Nurture Leads",
      heading: "Turn interest into action with content that converts.",
      description:
        "Great content attracts new visitors and encourages them to share their information in exchange for value, e.g., downloadable resources or webinars. After that, email campaigns, blog updates, and personalized content can nurture those leads through the sales funnel. Instead of pushing sales, you’re guiding the buyer with helpful information."
    },
    {
      title: "Cost Effective & Long Term Results",
      heading: "One investment. Endless returns.",
      description:
        "Unlike paid ads that stop delivering the moment you stop paying, content marketing keeps working long after it's published. One high-performing article or video can bring in traffic and leads for months, even years. It’s a smart, sustainable investment with compounding returns, especially when paired with SEO and distribution strategies."
    }
  ];
  

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
     <HelmetProvider>
              <Helmet>
              <title> Content Creation Agency Dubai | Performance Marketing Experts</title>
              <meta name="description" content="Create powerful content that converts. Our content creation agency in Dubai specializes in performance marketing to grow your brand faster and smarter." />
              <meta name="keywords" content="content creation agency dubai, performance marketing agency in dubai" />
              <meta property="og:title" content=" Content Creation Agency Dubai | Performance Marketing Experts" />
              <meta property="og:description" content="Create powerful content that converts. Our content creation agency in Dubai specializes in performance marketing to grow your brand faster and smarter." />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="aieera" />
              <meta name="robots" content="index, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="author" content="aieera" />
              <meta name="language" content="English" />
              
              
              <link rel="canonical" href={window.location.href} />
              </Helmet>
            </HelmetProvider>
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
              Intelligent Content, Maximum Reach

              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-4 md:mb-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                Content Marketing 
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                with AI tools is
                </h1>
                <AnimatedWords words={animatedWords} interval={3000} />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
               What if your content could attract, engage, and convert on repeat?
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Content Marketing?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A smart, sustainable strategy to grow your audience, authority, and revenue.</p>
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
                    <div className="relative bg-gray-400/10 p-8 rounded-2xl border border-white/10">
                      
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

export default Content;