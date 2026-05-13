"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        background: "#050816",
        color: "#fffdef",
        overflow: "hidden",
        padding: "120px 40px 40px",
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
            fontSize: "18vw",
            fontWeight: 700,
            opacity: 0.03,
            letterSpacing: "-12px",
          }}
        >
          BLUEVERA
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

      {/* MAIN CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* TOP */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "80px",
            flexWrap: "wrap",
            marginBottom: "120px",
          }}
        >
          {/* LEFT */}
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
              flex: 1,
              minWidth: "320px",
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
              Contact
            </p>

            <h1
              style={{
                fontSize: "clamp(3rem, 7vw, 7rem)",
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: "-5px",
                marginBottom: "32px",
              }}
            >
              Experience
              <br />
              clarity.
            </h1>

            <p
              style={{
                maxWidth: "420px",
                lineHeight: 1.8,
                opacity: 0.7,
                fontSize: "1rem",
              }}
            >
              Created for moments that demand
              intention, balance, and clarity.
            </p>
          </motion.div>

          {/* RIGHT */}
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
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            style={{
              flex: 1,
              minWidth: "320px",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            {/* EMAIL */}
            <FooterItem
              label="Email"
              value="hello@bluevera.in"
            />

            {/* PHONE */}
            <FooterItem
              label="Phone"
              value="+91 73000 04960"
            />

            {/* ADDRESS */}
            <FooterItem
              label="Registered Office"
              value={`173, 1st Floor,
Madri Industrial Area,
RIICO, Udaipur,
Rajasthan 313003`}
            />

            {/* MANUFACTURER */}
            <FooterItem
              label="Manufactured By"
              value={`Panchgavya Food & Beverages Pvt. Ltd.
Himachal Pradesh`}
            />
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background:
              "rgba(255,255,255,0.08)",
            marginBottom: "32px",
          }}
        />

        {/* BOTTOM */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p
            style={{
              opacity: 0.5,
              fontSize: "0.9rem",
              letterSpacing: "1px",
            }}
          >
            © 2026 Blue Vera
          </p>

          <p
            style={{
              opacity: 0.5,
              fontSize: "0.9rem",
              letterSpacing: "1px",
            }}
          >
            RESET IN CHAOS
          </p>
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
      whileHover={{
        x: 8,
      }}
      transition={{
        duration: 0.3,
      }}
      style={{
        position: "relative",
      }}
    >
      {/* LABEL */}
      <p
        style={{
          fontSize: "0.8rem",
          textTransform: "uppercase",
          letterSpacing: "2px",
          opacity: 0.45,
          marginBottom: "10px",
        }}
      >
        {label}
      </p>

      {/* VALUE */}
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: 1.8,
          opacity: 0.85,
          whiteSpace: "pre-line",
        }}
      >
        {value}
      </p>

      {/* HOVER LINE */}
      <motion.div
        initial={{
          width: 0,
        }}
        whileHover={{
          width: "100%",
        }}
        transition={{
          duration: 0.4,
        }}
        style={{
          height: "1px",
          background:
            "rgba(255,255,255,0.2)",
          marginTop: "10px",
        }}
      />
    </motion.div>
  );
}