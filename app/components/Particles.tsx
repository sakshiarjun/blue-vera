"use client";

import {
  motion,
} from "framer-motion";

import {
  useMemo,
} from "react";

/* =========================================
   PARTICLES COMPONENT
========================================= */


export default function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5,
      duration: 6 + Math.random() * 5,
      delay: Math.random() * 3,
      size: Math.random() * 3 + 1,
    }));
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: particle.opacity,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: -200,
            opacity: [particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
          style={{
            position: "absolute",
            width: "4px", // Increased particle size for prominence
            height: "4px", // Increased particle size for prominence
            borderRadius: "999px",
            background: "rgba(255,255,255,0.8)", // Made particles brighter
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}

