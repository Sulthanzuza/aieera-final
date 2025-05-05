import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Brain, Database, LineChart, MessageSquare, Search, ArrowRight } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/geo1.webp'
import Img2 from '../assets/services/geo2.webp'
import Img3 from '../assets/services/geo3.webp'
import Img4 from '../assets/services/geo4.webp' 
import Img5 from '../assets/services/geo 5.webp'
import Helmet from 'react-helmet';
import bg from '../assets/pexels-pixabay-373543.webp'
import main from '../assets/pexels-tara-winstead-8386440.webp'
const images = [Img1, Img2, Img4,Img3, Img5];

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
      title: "Why Choose GEO?",
      heading: "Generative Engine Optimization is the Future",
      description:
        "Generative Engine Optimization (GEO) is the future of digital visibility. Unlike traditional SEO, which depends on keywords and backlinks, GEO is designed for AI-first search and recommendation systems such as ChatGPT, Perplexity, and Google's Search Generative Experience (SGE)."
    },
    {
      title: "AI First Content Structuring",
      heading: "Structure it for AI, and Let Relevance Lead the Way",
      description:
        "We design content that speaks AI natively—structured for how large language models ingest, interpret, and determine relevance. Our approach ensures that headlines, paragraphs, and lists are crafted not just for humans, but for machines that prioritize clarity, hierarchy, and semantic cues.\n\nWith GEO, your message becomes instantly digestible by AI systems, increasing visibility and improving how your content is surfaced in AI-generated responses."
    },
    {
      title: "Structured Data Markup",
      heading: "Talk to AI in Its Own Language",
      description:
        "We embed intelligent schema and rich metadata into your content so that AI systems can understand not just what your content says but what it means. From article and product schema to FAQ and how-to markup, our structured data approach makes your site machine-readable at every level.\n\nThis helps AI agents like ChatGPT or search engines like Google better represent and trust your content."
    },
    {
      title: "Semantic Content Tuning",
      heading: "Where Your Message Meets Machine Understanding",
      description:
        "Modern AI doesn’t just look for keywords—it searches for intent, context, and depth. Our semantic tuning process refines your content to align with how AI models process language.\n\nWe uncover the hidden meanings and nuances behind user queries, ensuring your messaging aligns perfectly with what people and machines are truly looking for."
    },
    {
      title: "Context Aware LLM Optimization",
      heading: "Keep the Context. Own the Conversation",
      description:
        "Generative AI platforms don’t interact in single queries—they maintain ongoing conversations. That’s why we optimize your content to remain contextually relevant throughout an evolving dialogue.\n\nWhether it’s the first question or the tenth follow-up, we make sure your content stays coherent, trusted, and at the forefront of AI-generated conversations across ChatGPT, Gemini, Claude, and beyond."
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
      
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${bg})` }}
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
                Next-Gen is GEO
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-4 md:mb-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                  Generative Engine
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                  Optimization is
                </h1>
                <AnimatedWords words={animatedWords} interval={3000} />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Is your SEO strategy ready for the generative era?
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
                    src={main}
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
      <section ref={ref} className="py-12 md:py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Why Choose GEO?</h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              AI assistants like ChatGPT, Bard, and Copilot are becoming the new front door to the internet. To stay relevant, your content must not only rank on search engines but also be understood, selected, and surfaced by AI.
            </p>
          </motion.div>

          <div className="mt-12 lg:mt-20 space-y-12 md:space-y-16 lg:space-y-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12 relative"
              >
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-stone-100 rounded-2xl blur-2xl opacity-20" />
                    <div className="relative bg-gray-900/30 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{feature.title}</h3>
                      <h6 className="text-lg md:text-xl mb-2 md:mb-4">{feature.heading}</h6>
                      <p className="text-sm md:text-base text-gray-300 whitespace-pre-line">{feature.description}</p>
                    </div>
                  </div>
                </div>
                <div className={`w-full lg:w-1/2 mt-6 lg:mt-0 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <img 
                    src={images[index]}
                    alt={feature.title}
                    className="rounded-2xl shadow-2xl w-full h-auto"
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

export default GEOService;