import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
    features: string[];
    bgColor: string;
  };
  index: number;
}

const ServiceSection: React.FC<ServiceProps> = ({ service, index }) => {
  const isEven = index % 2 === 0;
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-16  md:py-24 ${isEven ? 'bg-white' : `bg-gradient-to-br ${service.bgColor}`}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16`}>
          {/* Image Side */}
          <motion.div 
            initial={{ x: isEven ? -50 : 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: isEven ? -50 : 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
  <img 
    src={service.image} 
    alt={service.title} 
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-indigo-600 opacity-30 mix-blend-multiply pointer-events-none" />
</div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ x: isEven ? 50 : -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: isEven ? 50 : -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <div className="flex flex-col items-start">
              
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="w-full">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              

            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;