"use client";

import { motion } from "framer-motion";

export default function MobileFooter() {
  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        background: "#050816",
        color: "#fffdef",
        overflow: "hidden",
        padding: "100px 24px 40px",
        height: "100%",
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
            fontSize: "28vw",
            fontWeight: 700,
            opacity: 0.03,
            letterSpacing: "-8px",
          }}
        >
          BLUE
        </h1>
      </div>

      {/* GRAIN */}
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
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
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
            fontSize: "clamp(2.8rem, 12vw, 5rem)",
            fontWeight: 300,
            letterSpacing: "-4px",
            lineHeight: 0.9,
          }}
        >
          <p
              style={{
                fontSize: "0.9rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                opacity: 0.5,
                
              }}
            >
              Contact
            </p>
        </motion.h1>

        {/* CONTACT ITEMS */}
        <FooterItem
          label="Email"
          value="hello@bluevera.in"
        />

        <FooterItem
          label="Phone"
          value="+91 73000 04960"
        />

        <FooterItem
          label="Address"
          value={`173, 1st Floor,
          Madri Industrial Area,
          RIICO, Udaipur,
          Rajasthan 313003`}
        />

        {/* DIVIDER */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "rgba(255,255,255,0.08)",
            marginTop: "10px",
          }}
        />

        {/* BOTTOM */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            opacity: 0.45,
            fontSize: "0.85rem",
            letterSpacing: "1px",
          }}
        >
          <span>© 2026</span>

          <span>RESET IN CHAOS</span>
        </div>
      </div>
    </footer>
  );
}

/* =========================================
   FOOTER ITEM
========================================= */

function FooterItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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
      whileTap={{
        scale: 0.98,
      }}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "24px",
        borderRadius: "24px",
        background:
          "rgba(255,255,255,0.03)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
        marginBottom: "-10px",
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
          repeatDelay: 4,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          transform: "skewX(-20deg)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      {/* LABEL */}
      <p
        style={{
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "2px",
          opacity: 0.45,
          marginBottom: "2px",
        }}
      >
        {label}
      </p>

      {/* VALUE */}
      <p
        style={{
          lineHeight: 1.8,
          opacity: 0.85,
          whiteSpace: "pre-line",
          fontSize: "1rem",
          marginBottom: "-5px",
        }}
      >
        {value}
      </p>
    </motion.div>
  );
}