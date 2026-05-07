"use client";

import { motion, useScroll, useTransform, useMotionTemplate} from "framer-motion";
import { useRef, useMemo } from "react";

const lines = [
  "Too much noise.",
  "Too many things demanding attention.",
  "Too much chaos disguised as energy.",
  "Clarity became rare.",
  "So we created something intentional.",
  "Hydration. Without distraction.",
];

export default function ChaosTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // Adjusted offset to trigger lines instantly
  });

  // Background transition
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const blurAmount = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "200vh",
        background: "#1a1f4d",
      }}
    >
      {/* Sticky Container */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1f4d",
        }}
      >
        {/* Grain Overlay */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            opacity: bgOpacity,
            filter: blurAmount,
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
            mixBlendMode: "soft-light",
            pointerEvents: "none",
          }}
        />

        {/* Floating Particles */}
        <Particles />

        {/* Text Stack */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            padding: "0 40px",
          }}
        >
          {lines.map((line, index) => (
            <AnimatedLine
              key={index}
              line={line}
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   INDIVIDUAL LINE ANIMATION
========================= */

function AnimatedLine({
  line,
  index,
  progress,
}: {
  line: string;
  index: number;
  progress: any;
}) {
  const start = index * 0.15; // Increased spacing between lines for better readability
  const end = start + 0.25; // Extended duration to ensure lines remain visible longer

  const opacity = useTransform(
    progress,
    [start, start + 0.04, end],
    [0, 1, 0]
  );

  const y = useTransform(progress, [start, end], [80, -80]);

  const blur = useTransform(progress, [start, start + 0.04], [20, 0]);

  const scale = useTransform(progress, [start, end], [0.95, 1]);

  const blurFilter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      style={{
        position: "relative",
        left: 0,
        right: 0,
        width: "100%",
        textAlign: "center",
        opacity,
        y,
        scale,
        filter: blurFilter,
      }}
    >
      <h1
        style={{
          fontSize: index === lines.length - 1
            ? "clamp(3rem, 8vw, 6rem)"
            : "clamp(2rem, 5vw, 4rem)",          
          fontWeight: index === 5 ? 700 : 300, // Make "Hydration. Without Distraction" bold
          lineHeight: 1.1,
          letterSpacing: "-2px",
          color: "#fffdef",
          whiteSpace: "normal", // Allow text to wrap to the next line
        }}
      >
        {line}
      </h1>
    </motion.div>
  );
}

/* =========================
   PARTICLES
========================= */

function Particles() {
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