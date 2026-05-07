"use client";

import ThreeCan from "./ThreeCan";

export default function Hero() {
  return (
    <section 
        id="home"
        style={{ padding: 0 }}>
      <ThreeCan />

      <div
        style={{
          position: "absolute",
          textAlign: "center",
        }}
      >
        <h1>RESET IN CHAOS</h1>
        <p>Clarity is the new energy</p>
      </div>
    </section>
  );
}