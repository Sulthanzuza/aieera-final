import React from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Brain, 
  Bot, 
  Megaphone, 
  Target, 
  Zap, 
  LineChart, 
  SlidersHorizontal, 
  Code, 
  Pen,
  ChevronDown
} from 'lucide-react';
import ServiceSection from './ServiceSection';
import Seo from "../assets/seo.jpeg"
import Content from "../assets/content creation.jpeg"
import Strategy from "../assets/strategy.jpeg"
import Web from "../assets/we b design.jpeg"
import PPC from "../assets/ppc.jpeg"
import Smm from "../assets/smm.jpeg"
import Camp from "../assets/campaign.jpeg"
import Email from "../assets/email.jpeg"
import Webdev from "../assets/web development.jpeg"
import Geo from "../assets/geo.jpeg"
import Branding from "../assets/branding.jpeg"

const serviceItems = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "Generative Engine Optimization",
    description: "Optimize your content for the future of AI-driven discovery. Our GEO services ensure your brand and messaging are fine-tuned for AI chatbots, language models, and generative search systems—making your content more discoverable, contextual, and valuable in AI interactions.",
    image:Geo ,
    path:"/services/geo-service",
    features: [
      "Optimized content for AI chatbots and assistants",
    "Structured data and context-rich formatting",
    "Enhanced discoverability in generative search engines",
    "Future-proof SEO aligned with AI language models"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI-Powered SEO",
    description: "Leverage the power of artificial intelligence to optimize your website for search engines. Our AI-powered SEO services analyze search patterns, competitor strategies, and user behavior to deliver targeted optimizations that drive organic traffic and improve rankings.",
    image: Seo,
    path:"/services/seo-service",
    features: [
      "Real-time data processing",
      "Pattern recognition for keyword optimization",
      "Predictive modeling for content strategy",
      "Automated reporting with actionable insights"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "Branding",
    description: "Your brand is more than just a logo—it's the emotional connection people have with your business. We help you build a brand that resonates deeply with your audience and stands the test of time. From defining your unique voice and visual identity to crafting consistent messaging across platforms, our branding services are designed to position you as a leader in your industry. Whether you're launching a new venture or rebranding an existing one, we develop powerful narratives and cohesive visuals that spark recognition and loyalty.",
    image: Branding,
    path:"/services/branding",
    features: [
      "Brand strategy & positioning",
      "Logo design & visual identity systems",
      "Tone of voice & messaging frameworks",
      "Consistent cross-platform branding assets"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  },  
  {
    icon: <Code className="w-12 h-12" />,
    title: "Web Development",
    description: "Create a powerful online presence with our cutting-edge web development services. We build fast, secure, and scalable websites optimized for both users and search engines, ensuring your digital foundation supports all your marketing efforts.",
    image: Webdev,
    path:"/services/web-development",
    features: [
      "Modern frontend frameworks (React, Vue, Angular)",
      "Scalable backend architectures",
      "Performance optimization",
      "SEO-friendly structure and implementation"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  },
  {
    icon: <Pen className="w-12 h-12" />,
    title: "Web Designing",
    description: "Transform your digital presence with our exceptional web design services. Our team creates visually stunning, intuitive interfaces that engage visitors, communicate your brand story, and guide users toward conversion with purposeful design elements.",
    image: Web,
    path:"/services/web-designing",
    features: [
      "User-centered design approach",
      "Responsive design for all devices",
      "Brand-aligned visual language",
      "Conversion-optimized interfaces"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  },
  {
    icon: <Bot className="w-12 h-12" />,
    title: "AI-Powered PPC / Paid Ads",
    description: "Transform your advertising campaigns with our AI-driven PPC services. We use machine learning algorithms to optimize bidding strategies, target high-intent audiences, and dynamically adjust ad content for maximum conversion rates and ROI.",
    image: PPC,
    path:"/services/paid-ads",
    features: [
      "Campaign automation with machine learning",
      "Dynamic A/B testing for continuous improvement",
      "Customer journey mapping for targeted messaging",
      "Real-time performance tracking and optimization"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: "AI Social Media Marketing",
    description: "Revolutionize your social media presence with our AI-powered strategies. Our tools analyze audience behavior, trending content, and engagement patterns to create tailored social media campaigns that resonate with your target audience and drive meaningful interactions.",
    image: Smm,
    path:"/services/socialmedia-marketing",
    features: [
      "Advanced audience segmentation and targeting",
      "Behavioral analysis for content optimization",
      "Custom audience building and expansion",
      "Look-alike modeling for new audience discovery"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  },
  {
    icon: <Megaphone className="w-12 h-12" />,
    title: "Email Marketing Automation",
    description: "Take your email marketing to the next level with our AI-powered automation solutions. From personalized content creation to dynamic segmentation and optimal send times, our system ensures your messages reach the right audience at the right moment.",
    image: Email,
    path:"/services/email-automation",
    features: [
      "Content personalization at scale",
      "Behavioral trigger-based campaigns",
      "Predictive analytics for optimal send times",
      "Conversion path optimization"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  },
  {
    icon: <LineChart className="w-12 h-12" />,
    title: "Content Marketing with AI tools",
    description: "Elevate your content strategy with our AI-enhanced content marketing services. We combine creative expertise with data-driven insights to produce engaging, relevant content that attracts, engages, and converts your target audience while building brand authority.",
    image: Content,
    path:"/services/content-marketing",
    features: [
      "AI-assisted content creation and optimization",
      "Topic and keyword opportunity identification",
      "Content performance prediction",
      "Automated content distribution"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "AI Chatbots & Lead Generation",
    description: "Revolutionize your customer acquisition with intelligent chatbots that engage visitors 24/7. Our AI chatbots qualify leads, answer questions, and guide prospects through your sales funnel, ensuring no opportunity is missed while delivering personalized experiences.",
    image: Strategy,
    path:"/services/chat-bots",
    features: [
      "Natural language processing for human-like conversations",
      "Intent recognition and contextual responses",
      "Seamless handoff to human agents when needed",
      "Continuous learning from interactions"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  },
  {
    icon: <SlidersHorizontal className="w-12 h-12" />,
    title: "Customization & Strategy",
    description: "Get a tailored marketing approach designed specifically for your business goals. Our strategic services combine industry expertise with AI-powered insights to develop comprehensive marketing plans that align with your vision and deliver measurable results.",
    image: Camp,
    path:"/services/customization",
    features: [
      "Comprehensive competitive analysis",
      "Data-driven strategy development",
      "Custom KPI setting and tracking",
      "Ongoing optimization based on performance"
    ],
    bgColor: "from-zinc-50 to-stone-50"
  }
];

const Services = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className="in-h-screen pt-16 relative overflow-hidden">
      <div id="services" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
    className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:from-purple-700 hover:to-pink-600 transition-all duration-300 group"
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