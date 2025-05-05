import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Search, Code, ArrowRight,Activity } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';
import Img1 from '../assets/services/email3.webp'
import Img2 from '../assets/services/email2.webp'
import Img3 from '../assets/services/email1.webp'
import Img4 from '../assets/services/img4.webp'
import Main from '../assets/services/emailmain.webp'
import Helmet from 'react-helmet'
import Bg from '../assets/services/emailbg.webp' 
const images = [Img1, Img2, Img4,Img3];
const EmailAuto = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const animatedWords = [
    "timing",
    "conversion",
    "personalization",
    "engagement",
    "segmentation",
    "retention",
    "scalability",
    "nurturing",
    "deliverability"
  ];
  
  const features = [
    {
      title: "Smart Audience Segmentation & Targeting",
      heading: "Smarter Segments. Better Results",
      description:
        "Our AI engine automatically analyzes customer data such as demographics, behaviors, and purchase history to segment your audience into highly targeted groups. This ensures your emails are always relevant and timely, increasing engagement and reducing unsubscribe rates. Say goodbye to one-size-fits-all campaigns."
    },
    {
      title: "Personalized Email Content with AI",
      heading: "Boost Engagement with Content That Connects",
      description:
        "No more generic emails. Our system crafts personalized content for each recipient, learning from their preferences, past interactions, and interests. From subject lines to product recommendations, every element is tailored to lead to higher open rates, click-throughs, and conversions."
    },
    {
      title: "Optimized Send Times for Better Open Rates",
      heading: "Send at the Right Time, Every Time",
      description:
        "Timing matters. Our platform uses machine learning to analyze when each contact is most likely to check their inbox and schedules sends accordingly. This ensures your emails land at the perfect time, increasing visibility and engagement."
    },
    {
      title: "Live Performance Analytics",
      heading: "See What Works. Fix What Doesn’t Live",
      description:
        "Gain deep insights into how your campaigns are performing. Our real-time dashboard tracks opens, clicks, conversions, and more, allowing you to make data-driven decisions on the fly. Easily A/B test content, monitor trends, and continuously optimize your strategy."
    }
  ];
  
  

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
     <Helmet>
              
              <title>Email Marketing Services in Dubai | Boost Customer Engagement</title>
              <meta name="description" content="Enhance your outreach with professional email marketing services in Dubai. We create personalized campaigns that increase engagement and drive conversions." />
              <meta name="keywords" content="email marketing services in dubai" />
              <meta property="og:title" content="Email Marketing Services in Dubai | Boost Customer Engagement" />
              <meta property="og:description" content="Enhance your outreach with professional email marketing services in Dubai. We create personalized campaigns that increase engagement and drive conversions." />
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
            Intelligent Email Workflows
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-4 md:mb-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                Email Marketing 
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center lg:text-left">
                Automation is
                </h1>
                <AnimatedWords words={animatedWords} interval={3000} />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
              What if your emails could convert while you sleep? 
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Email Marketing Automation?            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engage smarter, automate, personalize, and convert. <br />
Email automation streamlines your communication by sending the right message to the right person at the right time without manual effort. It nurtures leads, boosts engagement.
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

export default EmailAuto;