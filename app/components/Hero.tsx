"use client";

import ThreeCan from "./ThreeCan";

export default function Hero() {
  return (
    <section 
        id="home"
        style={{ 
          padding: 0,
          background: "#090e25",
          }}>
      <ThreeCan />

      <div
        style={{
          position: "absolute",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-nura-bold)",
            letterSpacing: "2px",
            color: "#fff",
          }}
        >
          RESET IN CHAOS
        </h1>
        <p
          style={{
            fontFamily: "var(--font-nura)",
            color: "#fff",
            letterSpacing: "2px",
          }}
        >
          Clarity is the new energy
        </p>
      </div>
    </section>
  );
}