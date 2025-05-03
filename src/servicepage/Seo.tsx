import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Search, Code, ArrowRight,Activity } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import BG from "../assets/services/seo1.jpeg"
import Img1 from '../assets/services/seo2.jpeg'
import Img2 from '../assets/services/seo3.jpeg'
import Img3 from '../assets/services/seo1.jpeg'
import Img4 from '../assets/services/seo4.jpeg' 
import Seo from '../assets/seo.jpeg'
import Helmet from 'react-helmet'
const images = [Img1, Img2, Img4,Img3];
const SEOService = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedWords = [
    "visibility",
    "ranking",
    "traffic",
    "relevance",
    "optimization",
    "authority",
    "organic",
    "keywords",
    "discovery",
    "growth"
  ];
  
  const features = [
    {
      title: "Predictive SEO Analysis",
      heading: "Rank Before the Rush",
      description:
        "Predictive SEO analysis uses AI and data modeling to forecast what users will search for before they search for it. We analyze emerging trends, keyword trajectories, and shifting user intent to identify opportunities ahead of the curve.\n\nThis means you can create content that ranks first when the trend breaks—not after it’s already saturated. It’s proactive SEO that keeps you in front, always."
    },
    {
      title: "On-Page SEO",
      heading: "Optimize with Foresight, Not Hindsight",
      description:
        "On-page SEO is about optimizing your content for both users and search engines. It ensures that every page is clear, relevant, and aligned with evolving search intent.\n\nAt aieera, we offer in-depth keyword research with predictive forecasting, SEO-friendly content creation and topic clustering, optimized meta titles, descriptions, and headers, and strategic internal linking to build page authority. We also include image optimization using proper alt tags."
    },
    {
      title: "Off-Page SEO",
      heading: "Build Authority Before the Spotlight Hits",
      description:
        "Off-page SEO focuses on building your site’s reputation and digital authority. It’s about trust, relevance, and visibility beyond your own domain.\n\nOur services include smart backlink building from authoritative, relevant sources, AI-assisted outreach to rising influencers, social signal and engagement tracking, and promotion on trending content platforms to keep your brand top-of-mind across the web."
    },
    {
      title: "Technical SEO",
      heading: "Strong Foundations. Seamless Performance.",
      description:
        "Technical SEO forms the foundation of your website’s performance, security, and indexability. We deliver predictive site health monitoring and performance audits to catch issues before they arise.\n\nOur services include mobile optimization, responsive design improvements, structured data implementation, and real-time page speed enhancements for a smooth, high-performing user experience."
    },
    {
      title: "Local SEO",
      heading: "Be Found Before They Ask",
      description:
        "Local SEO converts high-intent traffic into real-world action by enhancing your visibility in map results, voice searches, and nearby queries.\n\nWe provide comprehensive Google Business Profile optimization, local keyword targeting with area-specific trend forecasting, and predictive analysis of local events and seasonal behaviors. Our services include online reputation management, review response strategies, and citation building to ensure your brand stands out in local searches."
    }
  ];
  

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
           <Helmet>
              
              <title>SEO Agency in Dubai | Boost Rankings with AI SEO Tools</title>
              <meta name="description" content="Maximize your visibility with our Dubai-based SEO agency. We combine AI SEO tools with proven strategies to rank higher and grow your online presence" />
              <meta name="keywords" content="seo dubai, seo with ai, ai tools for seo, seo ai tools, seo agency in dubai, search engine optimization agency" />
              <meta property="og:title" content="SEO Agency in Dubai | Boost Rankings with AI SEO Tools" />
              <meta property="og:description" content="Maximize your visibility with our Dubai-based SEO agency. We combine AI SEO tools with proven strategies to rank higher and grow your online presence" />
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
                  Search Engine
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
             What if your SEO strategy could predict trends before they happen?
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
                  src={Seo}
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
      <section ref={ref} className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Predictive SEO?</h2>
            <h6 className="text-4xl lg:text-2xl mb-6">Be visible. Be trusted. Be chosen</h6>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At aieera, we don’t just optimize websites we empower them to anticipate.
Our AI-driven predictive SEO uses advanced algorithms, search data modelling, and machine learning to identify emerging keywords, rising topics, and shifting user intent before they peak. This means your content gets positioned before your competitors even notice the trend.

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
                    <div className="relative bg-gray-900/30 p-8 rounded-2xl border border-white/10">
                     
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <h6 className="text-2xl mb-4">{feature.heading}</h6>
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

export default SEOService;