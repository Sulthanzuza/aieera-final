import React, { useState, useEffect, useCallback } from "react";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";
import santaAnimation from "../assets/santa-sleigh.json";

// 1. Define the Shape of the Config
interface SantaConfig {
  isLeftToRight: boolean;
  top: string;
  duration: number;
  startPos: number;
  endPos: number;
  id: number;
}

export default function Santa() {
  // 2. Tell useState to expect SantaConfig or null
  const [config, setConfig] = useState<SantaConfig | null>(null);

  const generateFlightPath = useCallback(() => {
    const isLeftToRight = Math.random() > 0.5;
    const randomTop = Math.floor(Math.random() * 60) + 10;
    const duration = Math.floor(Math.random() * 5) + 10;

    // These values ensure he travels from the absolute edge to the other
    const screenWidth = window.innerWidth;
    const offset = 600; // Extra buffer so he is fully off-screen

    setConfig({
      isLeftToRight,
      top: `${randomTop}%`,
      duration,
      startPos: isLeftToRight ? -offset : screenWidth + offset,
      endPos: isLeftToRight ? screenWidth + offset : -offset,
      id: Math.random(),
    });
  }, []);

  useEffect(() => {
    generateFlightPath();
    window.addEventListener("resize", generateFlightPath);
    return () => window.removeEventListener("resize", generateFlightPath);
  }, [generateFlightPath]);

  // Safety check for TS
  if (!config) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        <motion.div
          key={config.id}
          initial={{ x: config.startPos }}
          animate={{ x: config.endPos }}
          transition={{ duration: config.duration, ease: "linear" }}
          onAnimationComplete={generateFlightPath}
          style={{
            position: "absolute",
            top: config.top,
            width: "clamp(250px, 30vw, 500px)", // Responsive size
            // Mirror logic: flips the div if traveling right-to-left
            transform: config.isLeftToRight ? "scaleX(1)" : "scaleX(-1)",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Lottie
            animationData={santaAnimation}
            loop={true}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}