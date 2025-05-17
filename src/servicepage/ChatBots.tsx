import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedWords from '../components/AnimatedWords';
import {Helmet,HelmetProvider } from 'react-helmet-async';
import Img1 from '../assets/services/chatbot1.webp'
import Img2 from '../assets/services/chatbot2.webp'
import Img3 from '../assets/services/chatbot3.webp'
import Img4 from '../assets/services/lead.webp'
import Main from '../assets/services/chatbotmain.webp'
import Bg from '../assets/services/chatbotbg.webp' 
const images = [Img1, Img2, Img4,Img3];

const ChatBots = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedWords = [
    "engagement",
    "conversion",
    "automation",
    "leads",
    "interactions",
    "support",
    "personalization",
    "24/7",
    "qualification",
    "growth"
  ];
  

  const features = [
    {
      title: "24/7 Instant Customer Engagement",
      heading: "Never miss a lead even while you sleep.",
      description:
        "AI chatbots are available around the clock, ensuring your website or platform is always ready to engage. Whether a visitor has a question at 2 p.m. or 2 a.m., the chatbot responds instantly—answering FAQs, offering help, or guiding them toward the next step. This availability boosts customer satisfaction and captures leads even outside business hours."
    },
    {
      title: "Qualify Leads Automatically",
      heading: "Filter the noise and focus on ready-to-buy customers.",
      description:
        "Using predefined logic and AI-based decision trees, chatbots ask relevant questions to understand a user’s intent, budget, needs, and timeline. This data allows the system to qualify leads in real time and pass hot prospects directly to your sales team—saving valuable time and improving close rates."
    },
    {
      title: "Personalized Conversations at Scale",
      heading: "1-on-1 conversations delivered to thousands.",
      description:
        "AI chatbots use contextual data such as user behaviour, geolocation, past purchases, and time on site to craft tailored interactions. Each visitor feels seen and understood—even if there are hundreds of them online simultaneously. This level of personalization drives better engagement and brand affinity."
    },
    {
      title: "Increase Conversion Rates",
      heading: "From browsers to buyers instantly.",
      description:
        "Chatbots help remove friction at critical points in the customer journey. Whether it's providing quick answers, helping choose a product, or offering a limited-time deal, bots turn passive visitors into active buyers. Timely nudges and intelligent support increase both conversion and retention."
    }
  ];
  

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
     <HelmetProvider>
              <Helmet>
              <title>:Lead Generation Chatbots | Top Lead Generation Company Dubai</title>
              <meta name="description" content="Capture more leads with smart chatbots. As a leading lead generation company in Dubai, we help you automate, qualify, and grow your customer base efficiently." />
              <meta name="keywords" content="lead generation chatbots, lead generation companies in dubai" />
              <meta property="og:title" content=":Lead Generation Chatbots | Top Lead Generation Company Dubai" />
              <meta property="og:description" content="Capture more leads with smart chatbots. As a leading lead generation company in Dubai, we help you automate, qualify, and grow your customer base efficiently." />
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
              Conversational AI, Real-Time Leads

              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-4 md:mb-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                AI Chatbots
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                & Lead Generation is
                </h1>
                <AnimatedWords words={animatedWords} interval={3000} />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
               Are you capturing leads or losing them to silence?

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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose AI Chatbots & Lead Generation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect Smarter. Convert Faster. <br />
Smarter conversations, faster responses, and more qualified leads AI chatbots redefine how businesses connect and convert.
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

export default ChatBots;