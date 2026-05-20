"use client";

import { motion } from "framer-motion";

const details = [
  {
    title: "pH balanced",
    value: "7.1 – 7.9",
    description:
      "Carefully balanced mineral composition designed for smooth, clean hydration.",
  },
  {
    title: "Mineral rich",
    value: "200 – 300 TDS",
    description:
      "Naturally occurring minerals including calcium, magnesium, potassium, and bicarbonates.",
  },
  {
    title: "Preserved purity",
    value: "Aluminum sealed",
    description:
      "Protected from light and external contamination through infinitely recyclable aluminum.",
  },
];

export default function DesktopDetails() {
  return (
    <section
      id="details"
      style={{
        minHeight: "100vh",
        background: "#fffdef",
        color: "#2a3376",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px",
      }}
    >
      {/* BACKGROUND WORD */}
      <div
        style={{
          position: "absolute",
          fontSize: "18vw",
          fontWeight: 700,
          opacity: 0.03,
          letterSpacing: "-10px",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        MINERALS
      </div>

      {/* CONTENT */}
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* HEADING */}
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
            marginBottom: "100px",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              opacity: 0.5,
              marginBottom: "24px",
            }}
          >
            Nutritional Profile
          </p>

          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-5px",
            }}
          >
            Designed with clarity.
          </h1>
        </motion.div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {details.map((item, index) => (
            <DetailCard
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   DETAIL CARD
========================================= */

function DetailCard({
  item,
}: {
  item: {
    title: string;
    value: string;
    description: string;
  };
}) {
  return (
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
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
      }}
      style={{
        position: "relative",
        border:
          "1px solid rgba(42,51,118,0.08)",
        background:
          "rgba(255,255,255,0.45)",
        backdropFilter: "blur(20px)",
        borderRadius: "28px",
        overflow: "hidden",
        padding: "40px",
        minHeight: "260px",
        cursor: "pointer",
      }}
    >
      {/* LIGHT SWEEP */}
      <motion.div
        initial={{
          x: "-120%",
        }}
        whileHover={{
          x: "120%",
        }}
        transition={{
          duration: 1.2,
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
        }}
      />

      {/* TITLE */}
      <p
        style={{
          fontSize: "0.9rem",
          textTransform: "uppercase",
          letterSpacing: "2px",
          opacity: 0.5,
          marginBottom: "20px",
        }}
      >
        {item.title}
      </p>

      {/* VALUE */}
      <h2
        style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 300,
          lineHeight: 1,
          letterSpacing: "-3px",
          marginBottom: "28px",
        }}
      >
        {item.value}
      </h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{
          opacity: 0.5,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        style={{
          lineHeight: 1.8,
          opacity: 0.65,
          fontSize: "0.95rem",
        }}
      >
        {item.description}
      </motion.p>
    </motion.div>
  );
}