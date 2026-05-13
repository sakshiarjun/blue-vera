"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useTexture } from "@react-three/drei";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import * as THREE from "three";
import {
  useRef,
  useState,
} from "react";

/* =========================================
   MAIN COMPONENT
========================================= */

export default function DesktopProductShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="product"
      style={{
        minHeight: "100vh",
        background: "#000", // Changed background to black
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      {/* BACKGROUND TYPOGRAPHY */}
      <div
        style={{
          position: "absolute",
          fontSize: "20vw",
          fontWeight: 700,
          opacity: 0.03,
          color: "#fffdef",
          pointerEvents: "none",
          letterSpacing: "-12px",
          userSelect: "none",
        }}
      >
        BLUEVERA
      </div>

      {/* CONTENT */}
      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "80px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: 1,
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "clamp(4rem, 9vw, 9rem)",
              fontWeight: 300,
              color: "#fffdef",
              lineHeight: 0.9,
              letterSpacing: "-5px",
            }}
          >
            BLUE
            <br />
            VERA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ delay: 0.3 }}
            style={{
              marginTop: "32px",
              maxWidth: "400px",
              lineHeight: 1.6,
              color: "#fffdef",
            }}
          >
            Created for moments that demand clarity.
          </motion.p>
        </div>

        {/* CENTER CAN */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "500px",
            height: "700px",
            cursor: "pointer",
            scale: isOpen ? 1.15 : 1,
            transition: "0.6s ease",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
            {/* LIGHTING */}
            <ambientLight intensity={0.4} />

            <spotLight
              position={[5, 10, 5]}
              intensity={2}
              angle={0.3}
            />

            {/* REFLECTION ENVIRONMENT */}
            <Environment preset="warehouse" />

            {/* 3D CAN */}
            <CanModel isOpen={isOpen} />
          </Canvas>
        </motion.div>

        {/* SIDE PANEL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: 100,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{
                width: "350px",
                padding: "40px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                color: "#fffdef",
              }}
            >
              <p
                style={{
                  opacity: 0.6,
                  marginBottom: "50px",
                  fontSize: "14px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Product Philosophy
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "8px",
                      fontWeight: 400,
                    }}
                  >
                    Sourced naturally
                  </h3>

                  <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: "20px" }}>
                    Naturally balanced minerals 
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "8px",
                      fontWeight: 400,
                    }}
                  >
                    Preserved in aluminum
                  </h3>

                  <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: "20px" }}>
                    Infinitely recyclable packaging 
                  </p>
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "8px",
                      fontWeight: 400,
                    }}
                  >
                    Designed for clarity
                  </h3>

                  <p style={{ opacity: 0.7, lineHeight: 1.6, marginBottom: "20px" }}>
                    Hydration stripped of distraction.
                    Elevated through intention.
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                style={{
                  marginTop: "40px",
                  padding: "16px 28px",
                  background: "#fffdef",
                  color: "#2a3376",
                  border: "none",
                  borderRadius: "999px",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
                onClick={() => {
                  const detailsSection = document.getElementById("details");
                  if (detailsSection) {
                    detailsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                View Details
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* =========================================
   CAN MODEL
========================================= */

function CanModel({
  isOpen,
}: {
  isOpen: boolean;
}) {
  const meshRef = useRef<THREE.Group>(null!);

  const texture = useTexture(
    "/textures/can-texture.png"
  );

  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;
  texture.flipY = false;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // IDLE ROTATION
    meshRef.current.rotation.y = t * 0.4;

    // FLOATING
    meshRef.current.position.y =
      Math.sin(t) * 0.1;

    // CLICK ZOOM ROTATION
    if (isOpen) {
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={meshRef}>
      {/* BODY */}
      <mesh>
        <cylinderGeometry
          args={[0.6, 0.6, 2, 128, 1, true]} // Reduced top and bottom radius from 1 to 0.8
        />

        <meshPhysicalMaterial
          map={texture}
          metalness={0.9}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* TOP */}
      

      {/* BOTTOM */}
      

    </group>
  );
}