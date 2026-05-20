"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, Canvas } from "@react-three/fiber";
import { Environment, useTexture, useGLTF, Center} from "@react-three/drei";


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
            <CanModel isOpen={false} />
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

function CanModel({
  isOpen,
}: {
  isOpen: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null!);

  // LOAD REAL GLB MODEL
  const { scene } = useGLTF("/models/can.glb");

  // LABEL TEXTURE
  const texture = useTexture(
    "/textures/can-simple-invert.png"
  );

  // TEXTURE SETTINGS
  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;

  texture.flipY = false;

  texture.colorSpace = THREE.SRGBColorSpace;

  texture.anisotropy = 16;

  texture.needsUpdate = true;

  // APPLY MATERIALS TO GLB
  scene.traverse((child: any) => {
    if (child.isMesh) {

      child.castShadow = true;
      child.receiveShadow = true;

      // BODY
      if (child.name === "Cube_1") {
        child.material =
          new THREE.MeshPhysicalMaterial({
            map: texture,

            metalness: 0.15,
            roughness: 0.18,

            clearcoat: 1,
            clearcoatRoughness: 0.08,

            envMapIntensity: 1.5,
          });
      }

      // LID + TAB
      if (child.name === "Cube") {
        child.material =
          new THREE.MeshPhysicalMaterial({
            color: "#d4d4d4",

            metalness: 1,
            roughness: 0.22,
          });
      }
    }
  });

  // ANIMATION
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // FLOAT
    groupRef.current.position.y =
      Math.sin(t * 1.2) * 0.08;

    // ROTATION
    groupRef.current.rotation.x =
      Math.sin(t * 0.7) * 0.12;

    groupRef.current.rotation.y =
      t * 0.4;

    groupRef.current.rotation.z =
      Math.cos(t * 0.5) * 0.08;

    // OPEN STATE EXTRA ROTATION
    if (isOpen) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive
          object={scene}
          scale={14}
        />
      </Center>
    </group>
  );
}