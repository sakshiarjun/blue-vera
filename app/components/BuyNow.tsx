"use client";

import { motion } from "framer-motion";
import ThreeCan from "./ThreeCan";

export default function BuyNow() {
  return (
    <section
      id="buy-now"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background:
          "radial-gradient(circle at center, rgba(42,51,118,0.6), #050816 70%)", // Updated background to align with the rest of the app

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        padding: "6rem 8vw",
      }}
    >
      {/* ========================================= */}
      {/* BACKGROUND TYPOGRAPHY */}
      {/* ========================================= */}

      <div
        style={{
          position: "absolute",
          inset: 0,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          pointerEvents: "none",

          zIndex: 0,
        }}
      >
        <h1
          style={{
            fontSize: "18vw",
            lineHeight: 0.85,
            color: "rgba(255,255,255,0.03)",
            textAlign: "center",
            userSelect: "none",
            opacity: 0.3,
          }}
        >
          BLUEVERA
        </h1>
      </div>

      {/* ========================================= */}
      {/* ATMOSPHERIC GLOW */}
      {/* ========================================= */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",

          width: "45vw",
          height: "45vw",

          borderRadius: "50%",

          background: "rgba(42,51,118,0.25)",

          filter: "blur(140px)",

          right: "-10%",
          top: "-10%",

          zIndex: 0,
        }}
      />

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <div
        style={{
          position: "relative",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "4rem",
          zIndex: 5,
        }}
      >
        {/* ===================================== */}
        {/* LEFT CONTENT */}
        {/* ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          style={{
            maxWidth: "520px",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              letterSpacing: "0.4em",
              color: "rgba(255,255,255,0.45)",
              marginBottom: "2rem",
            }}
          >
            BLUE VERA
          </p>

          <h2
            style={{
              fontSize: "clamp(3rem, 6vw, 6rem)",
              lineHeight: 0.9,
              color: "white",
              marginBottom: "2rem",
            }}
          >
            Reset In Chaos
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.72)",
              marginBottom: "3rem",
              maxWidth: "420px",
            }}
          >
            Natural mineral water preserved in infinitely
            recyclable aluminum. Created for moments that
            demand clarity.
          </p>

          {/* PRICE */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",

              marginBottom: "3rem",
            }}
          >
            <span
              style={{
                fontSize: "2rem",

                color: "white",
              }}
            >
              ₹100
            </span>

            <span
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.95rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginLeft: "2rem",
              }}
            >
              330ML
            </span>
          </div>

          {/* BUY BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.98,
            }}
            style={{
              padding: "1rem 2.8rem",

              borderRadius: "999px",

              border: "1px solid rgba(255,255,255,0.12)",

              background: "white",

              color: "#02050f",
              fontSize: "0.95rem",

              letterSpacing: "0.18em",

              textTransform: "uppercase",

              cursor: "pointer",

              transition: "all 0.3s ease",

              boxShadow:
                "0 10px 40px rgba(255,255,255,0.08)",
            }}
          >
            place order
          </motion.button>
        </motion.div>

        {/* ===================================== */}
        {/* RIGHT CONTENT */}
        {/* ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          style={{
            position: "relative",

            width: "100%",
            height: "85vh",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Reflection streak */}
          <div
            style={{
              position: "absolute",

              width: "180px",
              height: "70%",

              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)",

              filter: "blur(35px)",

              left: "50%",
              transform: "translateX(-50%)",

              zIndex: 0,
            }}
          />

          {/* CAN */}
          <ThreeCan />
          
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM FADE */}
      {/* ========================================= */}

      <div
        style={{
          position: "absolute",
          bottom: 0,

          width: "100%",
          height: "18vh",

          background:
            "linear-gradient(to bottom, transparent, #02050f)",

          pointerEvents: "none",

          zIndex: 10,
        }}
      />
    </section>
  );
}