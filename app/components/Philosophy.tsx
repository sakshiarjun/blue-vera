"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Philosophy() {
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
            rotate: [0, 2, 0, -2, 0],
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
          }}
        >
          <Image
            src="/textures/can-philosophy.png"
            alt="Blue Vera Can"
            width={320}
            height={560}
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
              maxWidth: "320px",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}