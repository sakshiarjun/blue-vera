"use client";

import ThreeCan from "./ThreeCan";
import Particles from "./Particles";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";



export default function Hero() {

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(
  scrollYProgress,
  [0, 0.3],
  [0, -200]
  );
  const heroOpacity = useTransform(
  scrollYProgress,
  [0, 0.3], // Adjusted the range for smoother disappearance
  [1, 0]
  );

  return (
    <section 
        id="home"
        style={{ 
          position: "relative",
          height: "100vh",
          background: "radial-gradient(circle at top right, rgba(42,51,118,0.35), #050816 60%)",
          }}
      >
      <Particles />
      <ThreeCan />
      <motion.div
        style={{
          position: "absolute", // Changed from fixed to absolute to allow scrolling out of view
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          pointerEvents: "none",
          y: heroY,
          opacity: heroOpacity,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-nura-bold)",
            letterSpacing: "2px",
            color: "#fff",
          }}
        >
          RESET IN CHAOS
        </h1>
        <p
          style={{
            fontFamily: "var(--font-nura)",
            color: "#fff",
            letterSpacing: "2px",
          }}
        >
          Clarity is the new energy
        </p>
      </motion.div>

      
    </section>
  );
}