"use client";

import { motion } from "framer-motion";
import { useState } from "react";
//import { supabase } from "@/lib/supabase";

export default function ResetClub() {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  /*async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    setErrorMessage("");

     const { error } = await supabase
       .from("reset_club_emails")
       .insert([
         {
           email,
          },
      ]);

    setLoading(false);

    if (error) {
      // Duplicate email
      if (
        error.message.includes("duplicate")
      ) {
        setErrorMessage(
          "You're already part of the club."
        );
      } else {
        setErrorMessage(
          "Something went wrong."
        );
      }

      return;
    }

    setSuccess(true);

    setEmail("");
  }*/

    async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    setErrorMessage("");

    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 1500);
  }

  return (
    <section
      style={{
        position: "relative",

        minHeight: "100vh",

        overflow: "hidden",

        background:
          "radial-gradient(circle at top right, rgba(42,51,118,0.28), #02050f 70%)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        padding: "6rem 8vw",
      }}
    >
      {/* ====================================== */}
      {/* BACKGROUND TYPOGRAPHY */}
      {/* ====================================== */}

      <div
        style={{
          position: "absolute",
          inset: 0,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          pointerEvents: "none",

          userSelect: "none",

          zIndex: 0,
        }}
      >
        <h1
          style={{

            fontSize: "18vw",

            lineHeight: 0.85,

            textAlign: "center",

            color:
              "rgba(255,255,255,0.03)",

            letterSpacing: "0.08em",
          }}
        >
          COMING
          <br />
          SOON
        </h1>
      </div>

      {/* ====================================== */}
      {/* ATMOSPHERIC GLOW */}
      {/* ====================================== */}

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

          background:
            "rgba(42,51,118,0.24)",

          filter: "blur(140px)",

          top: "-10%",
          right: "-10%",

          zIndex: 0,
        }}
      />

      {/* ====================================== */}
      {/* CONTENT */}
      {/* ====================================== */}

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
          position: "relative",

          zIndex: 5,

          width: "100%",
          maxWidth: "720px",

          textAlign: "center",
        }}
      >
        {/* TITLE */}

        <h2
          style={{
            fontSize:
              "clamp(3rem, 8vw, 7rem)",

            lineHeight: 0.9,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: "2rem",
            fontWeight: 350,
            textTransform: "uppercase",
          }}
        >
          Join The
          <br />
          Reset Club
        </h2>

        {/* SUBTEXT */}

        <p
          style={{

            fontSize: "1.05rem",

            lineHeight: 1.9,

            color:
              "rgba(255,255,255,0.72)",

            maxWidth: "520px",

            margin:
              "0 auto 4rem auto",
          }}
        >
          For those choosing clarity
          over chaos.
        </p>

        {/* ====================================== */}
        {/* FORM */}
        {/* ====================================== */}

        {!success ? (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",

              width: "100%",
              maxWidth: "520px",

              margin: "0 auto",
            }}
          >
            {/* INPUT */}

            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              style={{
                width: "100%",

                padding:
                  "1.3rem 1.5rem",

                borderRadius: "999px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background:
                  "rgba(255,255,255,0.04)",

                backdropFilter:
                  "blur(12px)",

                color: "white",

                fontSize: "1rem",

                outline: "none",

                transition:
                  "all 0.3s ease",
              }}
            />

            {/* BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              type="submit"
              disabled={loading}
              style={{
                padding:
                  "1.2rem 2.5rem",

                borderRadius: "999px",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                background: "white",

                color: "#02050f",


                fontSize: "0.95rem",

                letterSpacing: "0.18em",

                textTransform:
                  "uppercase",

                cursor: "pointer",

                transition:
                  "all 0.3s ease",

                boxShadow:
                  "0 10px 40px rgba(255,255,255,0.08)",
              }}
            >
              {loading
                ? "Requesting..."
                : "Request Access"}
            </motion.button>

            {/* ERROR */}

            {errorMessage && (
              <p
                style={{
                  color:
                    "rgba(255,255,255,0.55)",

                  fontSize: "0.95rem",

                  marginTop: "1rem",
                }}
              >
                {errorMessage}
              </p>
            )}
          </form>
        ) : (
          /* SUCCESS STATE */
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <h3
              style={{
                fontSize:
                  "clamp(2rem, 5vw, 4rem)",

                color: "white",
                textTransform: "uppercase",
                fontWeight: 350,
                marginBottom: "1rem",
              }}
            >
              Welcome to clarity.
            </h3>

            <p
              style={{
                color:
                  "rgba(255,255,255,0.65)",

                fontSize: "1rem",
              }}
            >
              Your access request has
              been received.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* ====================================== */}
      {/* BOTTOM FADE */}
      {/* ====================================== */}

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