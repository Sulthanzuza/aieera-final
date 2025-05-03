import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface KeyFeatureSectionProps {
  features: Feature[];
  image: string;
  title: string;
}

const KeyFeatureSection: React.FC<KeyFeatureSectionProps> = ({ 
  features, 
  image ,
  title
}) => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <div className="mt-24 mb-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl lg:text-5xl font-bold mb-12 text-center"
      >
        {title}
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left side - Feature list */}
        <div className="flex-1 space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveFeature(index)}
              className="cursor-pointer group"
            >
              <div className="flex items-center justify-between py-4 border-b border-white/10">
                <h5 className="text-xl font-medium group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h5>
                <motion.div
                  animate={{ 
                    rotate: activeFeature === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-purple-500"
                >
                  <ChevronDown />
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeFeature === index ? 'auto' : 0,
                  opacity: activeFeature === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 pt-4 pb-2">
                  {feature.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Right side - Image */}
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="sticky top-24 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20" />
            
            {features.map((_, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/3] w-full"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeFeature === index ? 1 : 0,
                  scale: activeFeature === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                style={{ 
                  position: index === activeFeature ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  display: Math.abs(activeFeature - index) <= 1 ? 'block' : 'none'
                }}
              >
                <img 
                  src={image}
                  alt={features[index].title}
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyFeatureSection;