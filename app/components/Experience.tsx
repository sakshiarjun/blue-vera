"use client";

import { motion } from "framer-motion";
import Particles from "./Particles";

export default function Experience() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "#050816",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      {/* PARTICLES */}
      <Particles />

      {/* BACKGROUND TYPOGRAPHY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <h1
          style={{
            fontSize: "18vw",
            fontWeight: 700,
            opacity: 0.02,
            letterSpacing: "-12px",
          }}
        >
          BLUEVERA
        </h1>
      </div>

      {/* MOVING GRADIENT BACKGROUND */}
      <motion.div
        animate={{
          x: ["-100vw", "100vw", "-50vw", "50vw", "0"], // Randomized movement
          y: ["-100vh", "100vh", "-50vh", "50vh", "0"],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(42,51,118,0.8) 0%, transparent 80%)", // Brighter
          filter: "blur(100px)",
          top: "10%",
          left: "20%",
        }}
      />

      <motion.div
        animate={{
          x: ["100vw", "-100vw", "50vw", "-50vw", "0"], // Randomized movement
          y: ["100vh", "-100vh", "50vh", "-50vh", "0"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 80%)", // Brighter
          filter: "blur(120px)",
          bottom: "15%",
          right: "10%",
        }}
      />

      <motion.div
        animate={{
          x: ["-50vw", "50vw", "0", "100vw", "-100vw"], // Randomized movement
          y: ["-50vh", "50vh", "0", "100vh", "-100vh"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 80%)", // Brighter
          filter: "blur(140px)",
          top: "30%",
          left: "50%",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "1200px",
        }}
      >
        {/* MAIN TEXT */}
        <motion.h1
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-4px",
            fontWeight: 300,
            color: "#fffdef",
            overflow: "hidden",
          }}
        >
          Hydration,
          <br />
          but make it a moment.
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 0.7,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
          style={{
            marginTop: "48px",
            color: "#fffdef",
            fontSize: "clamp(1rem, 2vw, 1.4rem)",
            lineHeight: 1.8,
            letterSpacing: "0.5px",
            fontWeight: 300,
          }}
        >
          The clearest moments
          <br />
          usually happen after midnight.
        </motion.p>

        {/* GLASS BUTTON */}
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => {
          window.location.href = "/product"; // Redirect to /product
        }}
        style={{
          padding: "1rem 3rem",
          borderRadius: "999px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          background: "rgba(255, 255, 255, 0.1)", // Glass effect
          backdropFilter: "blur(10px)", // Glass effect
          color: "#fffdef",
          fontSize: "1rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          marginTop: "5rem", // Add spacing
        }}
      >
        Experience Blue Vera
      </motion.button>

       

      </div>

      

      {/* BOTTOM CONTENT */}
      <div
        style={{
          position: "absolute",
          bottom: "10px", // Positioned slightly above the bottom divider
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "#fffdef",
          fontSize: "0.9rem",
          opacity: 0.7,
        }}
      >
        © 2026 BlueVera. All rights reserved.
      </div>

    </section>
  );
}
