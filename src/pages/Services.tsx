import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceSection from './ServiceSection';
import Seo from "../assets/seo.webp"
import Content from "../assets/content creation.webp"
import Strategy from "../assets/strategy.webp"
import Web from "../assets/we b design.webp"
import PPC from "../assets/services/Latest PPC Trends in 2022_ Need To Be Follow.webp"
import Smm from "../assets/smm.webp"
import Camp from "../assets/campaign.webp"
import Email from "../assets/email.webp"
import Webdev from "../assets/web development.webp"
import Geo from "../assets/geo.webp"
import Branding from "../assets/branding.webp"
import {Helmet } from 'react-helmet'
const serviceItems = [
  {

    title: "Generative Engine Optimization",
    description: "Future proof your content for the age of AI. Our GEO solutions help your brand thrive in conversations with AI assistants, chatbots, and generative search tools ensuring you're not just found, but favoured.",
    image: Geo,
    path: "/services/generative-engine-optimization",
    features: [
      "Content made for AI interactions and generative platforms",
      "Semantic structuring and context enriched formatting",
      "Increased visibility in AI made discovery engines",
      "Future looking SEO custom to language model algorithms"
    ],
    bgColor: "black"
  },
  {
    title: "AI Powered SEO",
    description: "Supercharge your search performance with intelligent optimization. Our AI driven SEO services go beyond traditional tactics analysing search trends, competitor moves, and user intent to deliver smarter strategies that boost rankings and drive meaningful traffic.",
    image: Seo,
    path: "/services/search-engine-optimization",
    features: [
      "Instant insights through live data analysis",
      "Smarter keyword targeting with pattern detection",
      "Predictive content strategies based on user behaviour",
      "Automated, insight rich reporting for continuous improvement"
    ],
    bgColor: "black"
  },
  {
    title: "Branding",
    description: "Your brand is the story people remember and the feeling they trust. We help shape brands that not only look great but mean something—brands that spark recognition, inspire loyalty, and lead with purpose. From strategy to storytelling to design, we make every element reflect your essence and connect with your audience.",
    image: Branding,
    path: "/services/branding",
    features: [
      "Strategic brand positioning and development",
      "Logo creation and cohesive visual identity systems",
      "Voice and messaging that reflect your unique personality",
      "Unified branding across every platform and touchpoint"
    ],
    bgColor: "black"
  },
  {
    title: "Web Development",
    description: "Establish a strong online presence with our expert web development services. We build fast, secure, and scalable websites that deliver seamless user experiences and exceptional SEO performance. Our solutions form the digital backbone of your brand supporting your marketing efforts and driving sustainable growth.",
    image: Webdev,
    path: "/services/web-development",
    features: [
      "Modern frontend frameworks (React, Vue, Angular)",
      "Scalable backend architectures",
      "Speed and efficiency improvements",
      "SEO friendly structure and execution"
    ],
    bgColor: "black"
  },
  {
    title: "Web Designing",
    description: "Improve your digital presence with our exceptional web design services. Our team creates visually stunning, intuitive interfaces that engage visitors, communicate your brand story, and guide users toward conversion with purposeful design elements.",
    image: Web,
    path: "/services/web-designing",
    features: [
      "User focused design approach",
      "Responsive design for all devices",
      "Brand aligned visual language",
      "Interfaces designed for maximum conversions"
    ],
    bgColor: "black"
  },
  {
    title: "AI-Powered PPC / Paid Ads",
    description: "Improve your advertising campaigns with our AI assisted PPC services. We use machine learning algorithms to optimize bidding strategies, target high intended audiences, and dynamically adjust ad content for maximum conversion rates and ROI.",
    image: PPC,
    path: "/services/paid-ads",
    features: [
      "Campaign automation with machine learning",
      "High effective A/B testing for continuous improvement",
      "Customer journey mapping for targeted messaging",
      "Live performance tracking and optimization"
    ],
    bgColor: "black"
  },
  {
    title: "Next Gen Social Media Marketing",
    description: "Revolutionize your social media presence with our AI powered strategies. Our tools analyse audience behaviour, trending content, and engagement patterns to create best custom social media campaigns that resonate with your target audience and help meaningful interactions.",
    image: Smm,
    path: "/services/socialmedia-marketing",
    features: [
      "Advanced audience segmentation and targeting",
      "Behavioural analysis for content optimization",
      "Custom audience building and expansion",
      "Look alike modelling for new audience discoveries"
    ],
    bgColor: "black"
  },
  {
    title: "Email Marketing Automation",
    description: "Take your email marketing to the next level with our AI assisted automation solutions. From personalized content creation to dynamic segmentation and optimal send times, our system ensures your messages reach the right audience at the right moment.",
    image: Email,
    path: "/services/email-automation",
    features: [
      "Content personalization at scale",
      "Behavioural action based campaigns",
      "Predictive analytics for peak send times",
      "Conversion path optimization"
    ],
    bgColor: "black"
  },
  {
    title: "Content Marketing with AI tools",
    description: "Upgrade your content strategy with our AI helping content marketing services. We combine creative expertise with data make insights to produce engaging, relevant content that attracts, engages, and converts your target audience while building brand authority.",
    image: Content,
    path: "/services/content-marketing",
    features: [
      "AI assisted content creation and optimization",
      "Topic and keyword opportunity identification",
      "Content performance prediction",
      "Automated content distribution"
    ],
    bgColor: "black"
  },
  {
    title: "AI Chatbots & Lead Generation",
    description: "Modernize your customer acquisition with intelligent chatbots that engage visitors 24/7. Our AI chatbots qualify leads, answer questions, and guide prospects through your sales funnel, ensuring no opportunity is missed while delivering personalized experiences.",
    image: Strategy,
    path: "/services/chat-bots",
    features: [
      "Natural language processing for human like conversations",
      "Intent recognition and contextual responses",
      "Seamless handoff to human agents when needed",
      "Continuous learning from interactions"
    ],
    bgColor: "black"
  },
  {
    title: "Customization & Strategy",
    description: "Get a custom marketing approach designed specifically for your business goals. Our strategic services combine industry expertise with AI powered insights to develop comprehensive marketing plans that align with your vision and deliver measurable results.",
    image: Camp,
    path: "/services/customization",
    features: [
      "Comprehensive competitive analysis",
      "Data made strategy development",
      "Custom KPI setting and tracking",
      "Ongoing configuration based on performance"
    ],
    bgColor: "black"
  }
]

const Services = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="in-h-screen pt-16 bg-black overflow-hidden">
     <Helmet>
              
              <title>Digital Marketing Services Tailored for Growth | AI-Powered Campaigns</title>
              <meta name="description" content="Get expert digital marketing services using advanced AI tools. From SEO to social media, we create customized campaigns that drive measurable results." />
              <meta name="keywords" content="digital marketing services" />
              <meta property="og:title" content="Digital Marketing Services Tailored for Growth | AI-Powered Campaigns" />
              <meta property="og:description" content="Get expert digital marketing services using advanced AI tools. From SEO to social media, we create customized campaigns that drive measurable results." />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="aieera" />
              <meta name="robots" content="index, follow" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta name="author" content="aieera" />
              <meta name="language" content="English" />
              
              
              <link rel="canonical" href={window.location.href} />
            </Helmet> 
                 <div id="services" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how our specialized services can help you achieve your business goals through innovative, data-driven approaches.
            </p>
          </motion.div>
        </div>

        {/* Service Items */}
        {serviceItems.map((service, index) => (
          <div key={index} className="mb-8">
            <ServiceSection service={service} index={index} />
            <div className="mt-6 text-center">
            <Link
      to={service.path}
      className=" relative inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-gray-400 to-silver-400 text-gray-100 font-semibold shadow-[0_0_8px_2px_rgba(255,255,255,0.4)] hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.6)] transition-all duration-300 group"
    >
      Learn More
      <svg
        className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </Link>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;