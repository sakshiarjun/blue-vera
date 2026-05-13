"use client";

import { motion } from "framer-motion";

const details = [
  {
    title: "pH balanced",
    value: "7.1 – 7.9",
    description:
      "Balanced mineral composition designed for smooth, clean hydration.",
  },
  {
    title: "Mineral rich",
    value: "200 – 300 TDS",
    description:
      "Naturally occurring minerals including calcium, magnesium, and bicarbonates.",
  },
  {
    title: "Preserved purity",
    value: "Aluminum sealed",
    description:
      "Protected from light and external contamination through recyclable aluminum.",
  },
  {
    title: "Calcium",
    value: "31.3 – 51.2",
    description:
      "Essential minerals contributing to balance and composition.",
  },
];

export default function MobileDetails() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#fffdef",
        color: "#2a3376",
        overflow: "hidden",
        padding: "120px 24px",
      }}
    >
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
            fontSize: "26vw",
            fontWeight: 700,
            opacity: 0.03,
            letterSpacing: "-8px",
          }}
        >
          PURE
        </h1>
      </div>

      {/* GRAIN OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          mixBlendMode: "soft-light",
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
          pointerEvents: "none",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "420px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          style={{
            marginBottom: "60px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
              opacity: 0.5,
              marginBottom: "18px",
            }}
          >
            Nutritional Profile
          </p>

          <h1
            style={{
              fontSize: "clamp(2.8rem, 11vw, 4.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-4px",
              fontWeight: 300,
              marginBottom: "24px",
            }}
          >
            Designed
            <br />
            with clarity.
          </h1>

          <p
            style={{
              lineHeight: 1.8,
              opacity: 0.7,
              fontSize: "1rem",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            Naturally balanced hydration,
            preserved with intention.
          </p>
        </motion.div>

        {/* DETAIL CARDS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {details.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileTap={{
                scale: 0.98,
              }}
              style={{
                position: "relative",
                overflow: "hidden",
                padding: "28px",
                borderRadius: "28px",
                background:
                  "rgba(255,255,255,0.45)",
                border:
                  "1px solid rgba(42,51,118,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* LIGHT SWEEP */}
              <motion.div
                animate={{
                  x: ["-120%", "120%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "40%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  transform: "skewX(-20deg)",
                  pointerEvents: "none",
                  filter: "blur(10px)",
                }}
              />

              {/* TITLE */}
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  opacity: 0.5,
                  marginBottom: "16px",
                }}
              >
                {item.title}
              </p>

              {/* VALUE */}
              <h2
                style={{
                  fontSize: "2.4rem",
                  lineHeight: 1,
                  letterSpacing: "-3px",
                  fontWeight: 300,
                  marginBottom: "20px",
                }}
              >
                {item.value}
              </h2>

              {/* DESCRIPTION */}
              <p
                style={{
                  lineHeight: 1.8,
                  opacity: 0.7,
                  fontSize: "0.95rem",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}