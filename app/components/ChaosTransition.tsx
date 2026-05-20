"use client";

import { motion, useScroll, useTransform, useMotionTemplate} from "framer-motion";
import { useRef, useMemo } from "react";
import Particles from "./Particles";

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
        background: "#090e25",
      }}
    >
      {/* Sticky Container */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "120vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#090e25",
          marginTop: "-50vh", // Start with the section hidden and slide up
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
          fontWeight: index === 5 ? 800 : 300, // Make "Hydration. Without Distraction" bold
          lineHeight: 1,
          letterSpacing: "-1px",
          color: "#fffdef",
          whiteSpace: "normal", // Allow text to wrap to the next line
          marginTop: index === 0 ? "50px" : "20px", // Add more spacing before the first line
          //fontFamily: "var(--font-nura-thin)", // Use the bold font for all lines for consistency
          
        }}
      >
        {line}
      </h1>
    </motion.div>
  );
}

