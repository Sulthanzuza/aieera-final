import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedWordsProps {
  words: string[];
  interval?: number;
}

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ words, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className="h-16 sm:h-18 md:h-20 relative flex items-center justify-center lg:justify-start overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left"
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  </div>
  );
}

export default AnimatedWords;