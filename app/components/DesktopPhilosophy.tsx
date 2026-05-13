"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/textures/can-philosophy.png",
  "/textures/can-mobile.png",
  "/textures/can-glow.png",
];

export default function Philosophy() {
    const [index, setIndex] = useState(0);

  // AUTO CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
        id="philosophy"
      style={{
        background: "var(--beige)",
        color: "var(--blue)",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      {/* Background Word */}
      <div
        style={{
          position: "absolute",
          fontSize: "18vw",
          fontWeight: 700,
          opacity: 0.03,
          letterSpacing: "-10px",
          pointerEvents: "none",
        }}
      >
        CLARITY
      </div>

      {/* Content */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "80px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            minWidth: "300px"
          }}
        >
          <motion.h1
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1,
              fontFamily: "var(--font-heading)",
            }}
          >
            No sugar.
          </motion.h1>

          <motion.h1
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1,
              marginLeft: "60px",
            }}
          >
            No noise.
          </motion.h1>

          <motion.h1
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            Just clarity.
          </motion.h1>

          {/* Supporting Text */}
          <p
            style={{
              marginTop: "40px",
              maxWidth: "400px",
              opacity: 0.7,
              lineHeight: 1.6,
            }}
          >
            Hydration designed with intention —
            stripped of distraction, elevated through clarity.
          </p>
        </div>

        {/* Separator */}
        <div
          className="philosophy-separator"
          style={{
            width: "1px",
            height: "400px",
            background: "rgba(42, 51, 118, 0.1)",
          }}
        />

        {/* RIGHT SIDE */}
        <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        minHeight: "700px",
      }}
    >
      {/* GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(42,51,118,0.15), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* IMAGE CROSSFADE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.04,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
          }}
        >
          <Image
            src={images[index]}
            alt="Blue Vera Can"
            width={320}
            height={560}
            priority
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
              maxWidth: "320px",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
      </div>
    </section>
  );
}