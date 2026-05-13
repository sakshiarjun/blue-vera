"use client";

import { motion } from "framer-motion";

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
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(42,51,118,0.6) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* SECOND GLOW */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "999px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
          right: "-100px",
          top: "20%",
        }}
      />

      {/* LIGHT SWEEP */}
      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          width: "30%",
          height: "200%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
          transform: "skewX(-20deg)",
          filter: "blur(20px)",
        }}
      />

      {/* PARTICLES */}
      <Particles />

      {/* GRAIN */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          mixBlendMode: "soft-light",
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
          pointerEvents: "none",
        }}
      />

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(5,8,22,0.75), rgba(5,8,22,0.95))",
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
        <ReflectionText>
          Hydration,
          <br />
          but make it a moment.
        </ReflectionText>

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
      </div>
    </section>
  );
}

/* =========================================
   REFLECTION TEXT
========================================= */

function ReflectionText({
  children,
}: {
  children: React.ReactNode;
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
        duration: 1.2,
      }}
      viewport={{
        once: true,
      }}
      whileHover="hover"
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <motion.h1
        style={{
          position: "relative",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          lineHeight: 1,
          letterSpacing: "-4px",
          fontWeight: 300,
          color: "#fffdef",
          overflow: "hidden",
        }}
      >
        {children}

        {/* LIGHT REFLECTION */}
        <motion.div
          variants={{
            hover: {
              x: ["-150%", "150%"],
            },
          }}
          transition={{
            duration: 1.4,
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
            pointerEvents: "none",
          }}
        />
      </motion.h1>
    </motion.div>
  );
}

/* =========================================
   PARTICLES
========================================= */

function Particles() {
  const particles = Array.from({ length: 25 });

  return (
    <div
      style={{
        position: "relative",
        inset: 0,
        overflow: "hidden",
      }}
    >
      {particles.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, -120],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3,
          }}
          style={{
            position: "relative",
            left: `${(i * 4) % 100}%`,
            bottom: "-20px",
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            borderRadius: "999px",
            background: "rgba(255,255,255,0.3)",
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}