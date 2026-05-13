"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, Canvas } from "@react-three/fiber";
import { Environment, useTexture } from "@react-three/drei";


export default function MobileProductShowcase() {
  return (
    <section
      id="product"
      style={{
        minHeight: "100vh",
        background: "#000",
        padding: "120px 24px",
        color: "#fffdef",
        position: "relative", // Added for layering
      }}
    >
      {/* CAN BACKGROUND */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute", // Positioned in the background
          top: 0,
          left: 0,
          width: "100%", // Full width
          height: "100%", // Full height
          opacity: 0.3, // Low opacity for background effect
          zIndex: 1, // Lower z-index to stay behind
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
            <CanModel />
        </Canvas>
      </motion.div>

      {/* DETAILS OVERLAY */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%", // Full width overlay
          position: "relative", // Positioned above the background
          zIndex: 2, // Higher z-index to overlay
        }}
      >
        {[
          {
            title: "Sourced naturally",
            text: "Balanced minerals selected for clarity and refreshment.",
          },
          {
            title: "Preserved in aluminum",
            text: "Infinitely recyclable and designed for a cooler experience.",
          },
          {
            title: "Designed for clarity",
            text: "Hydration stripped of distraction and elevated through intention.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            style={{
              padding: "28px",
              borderRadius: "24px",
              background:
                "rgba(255,255,255,0.04)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 400,
                marginBottom: "12px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                opacity: 0.7,
                lineHeight: 1.7,
              }}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}



/* =========================================
   CAN MODEL
========================================= */

function CanModel() {
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