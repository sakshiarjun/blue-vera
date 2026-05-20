"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useTexture, useGLTF, Center } from "@react-three/drei";
import { motion, AnimatePresence, motionValue, useTransform, MotionValue } from "framer-motion";

import * as THREE from "three";
import { useRef, useState, useMemo, use } from "react";

/* ========================================
   CAN MODEL
======================================== */

function CanModel({
    progress, 
}: {
    progress: MotionValue<number>;
}) {
    const groupRef = useRef<THREE.Group>(null!);
    
    const { scene } = useGLTF("/models/can.glb");
    const texture = useTexture("/textures/can-simple-invert.png");

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
                        roughness: 0.4,
                        metalness: 0.8,
                        clearcoat: 1,
                        clearcoatRoughness: 0.2,
                        envMapIntensity: 1.5,
                    });
            }

            if (child.name === "Cube") {
                child.material =
                    new THREE.MeshPhysicalMaterial({
                        color: "#d4d4d4",
                        roughness: 0.6,
                        metalness: 0.2,
                        
                    });
            }
        }
    });

    /* ================================
     SECTION TRANSITIONS
  ================================= */
  const x = useTransform(progress, [0, 0.3, 0.65, 0.9], [0, 1.2, -1.4, -3]);
  const y = useTransform(
    progress,
    [0, 0.3, 0.65, 0.9],
    [0, 0.2, 0, -2]
  );

  const scale = useTransform(
    progress,
    [0, 0.3, 0.65, 0.9],
    [1.2, 1.05, 1.45, 0.8]
  );
  // HERO → CHAOS → SHOWCASE
  const rotateY = useTransform(
    progress,
    [0, 0.35, 0.65],
    [0, Math.PI * 0.6, 0]
  );

  const rotateX = useTransform(
    progress,
    [0, 0.5],
    [0.15, 0]
  );

  /* ================================
     FRAME LOOP
  ================================= */
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (!groupRef.current) return;

    // FLOAT
    groupRef.current.position.y =
      y.get() + Math.sin(t * 1.2) * 0.08;

    groupRef.current.position.x = x.get();

    // HERO CHAOS ROTATION
    groupRef.current.rotation.y =
      rotateY.get() + t * 0.25;

    groupRef.current.rotation.x =
      rotateX.get() + Math.sin(t * 0.6) * 0.08;

    groupRef.current.rotation.z =
      Math.cos(t * 0.5) * 0.04;
    groupRef.current.scale.setScalar(scale.get());
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive
          object={scene}
          scale={10}
        />
      </Center>
    </group>
  );
}

export default function GlobalCanScene({
    progress,
}: {
    progress: MotionValue<number>;
}) {
    /* ================================
     DYNAMIC LIGHTING
  ================================= */
  const ambientIntensity = useTransform(
    progress,
    [0, 0.4, 0.7],
    [0.3, 0.15, 0.6]
  );

  const keyLightIntensity = useTransform(
    progress,
    [0, 0.45, 0.7],
    [0.8, 0.5, 2.2]
  );

  const blueLightIntensity = useTransform(
    progress,
    [0, 0.4, 0.7],
    [1.5, 2.5, 0.4]
  );
  
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,

        zIndex: 5,

        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 4],
          fov: 30,
        }}
      >
        {/* CHAOS LIGHT */}
        <pointLight
          position={[-3, 1, 2]}
          intensity={blueLightIntensity.get()}
          color="#2a3376"
        />

        {/* CLEAN SHOWCASE LIGHT */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={keyLightIntensity.get()}
        />

        {/* AMBIENT */}
        <ambientLight
          intensity={ambientIntensity.get()}
        />

        {/* ENVIRONMENT */}
        <Environment preset="city" />

        <CanModel progress={progress} />
      </Canvas>
    </div>
  );
}