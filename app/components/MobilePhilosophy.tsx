"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MobilePhilosophy() {
  return (
    <section
      id="philosophy"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#fffdef",
        color: "#2a3376",
        overflow: "hidden",
        padding: "120px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
            fontSize: "32vw",
            fontWeight: 700,
            opacity: 0.03,
            letterSpacing: "-8px",
          }}
        >
          VERA
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* FLOATING GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: "10%",
            width: "260px",
            height: "260px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(42,51,118,0.12), transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* CAN */}
        <motion.div
          animate={{
            y: [0, -14, 0],
            rotate: [0, 1.5, 0, -1.5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "relative",
            marginBottom: "48px",
          }}
        >
          {/* LIGHT SWEEP */}
          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "40%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
              transform: "skewX(-20deg)",
              zIndex: 2,
              filter: "blur(10px)",
            }}
          />

          <Image
            src="/textures/can-philosophy.png"
            alt="Blue Vera Can"
            width={260}
            height={520}
            priority
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "260px",
              objectFit: "contain",
              position: "relative",
              zIndex: 1,
            }}
          />
        </motion.div>

        {/* PHILOSOPHY TEXT */}
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
            marginBottom: "48px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem, 10vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-3px",
              marginBottom: "16px",
            }}
          >
            No sugar.
          </h1>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 10vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-3px",
              opacity: 0.8,
              marginBottom: "16px",
            }}
          >
            No noise.
          </h1>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 10vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-3px",
            }}
          >
            Just clarity.
          </h1>
        </motion.div>

        {/* SUPPORTING TEXT */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 0.7,
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
            lineHeight: 1.9,
            fontSize: "1rem",
            maxWidth: "320px",
          }}
        >
          Hydration designed with intention —
          stripped of distraction and elevated
          through clarity.
        </motion.p>
      </div>
    </section>
  );
}