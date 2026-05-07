"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function CanMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);

  const texture = useTexture("/textures/can-texture.png");

  // Fix orientation (VERY IMPORTANT)
  texture.wrapS = texture.wrapT= THREE.RepeatWrapping;
  //texture.repeat.x = -1; // Flip horizontally
  //texture.offset.x = 1; // Center the texture
  texture.repeat.set(1, 1);
  texture.rotation = Math.PI;
  texture.center.set(0.5, 0.5);
  texture.flipY = false;
  texture.needsUpdate = true;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    meshRef.current.rotation.y = t * 0.4;
    meshRef.current.position.y = Math.sin(t) * 0.1;
  });

  return (
    <group ref ={meshRef}>
        <mesh>
            <cylinderGeometry args={[1, 1, 3, 128]} />

            <meshPhysicalMaterial
                map={texture}        // 👈 THIS IS THE KEY
                metalness={0.5}
                roughness={0.25}
                clearcoat={1}
                clearcoatRoughness={0.1}
            />
        </mesh>

        {/* Top Lid */}
        <mesh position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[1, 64]} />
            <meshStandardMaterial attach="material" color="grey" metalness={1} roughness={0.3} />
        </mesh>

        {/* Bottom Lid */}
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[1, 64]} />
            <meshStandardMaterial attach="material" color="grey" metalness={1} roughness={0.3} />
        </mesh>
    </group>
  );
}

export default function ThreeCan() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        
        {/* Lighting */}
        <ambientLight intensity={0.2} />
        <spotLight position={[5, 10, 5]} intensity={1} angle={0.3} />
        {/* <directionalLight position={[5, 5, 5]} intensity={2} /> */}

        {/* HDR Environment (IMPORTANT for reflections) */}
        <Environment preset="city" />

        {/* Can */}
        <CanMesh />

        {/* Controls (disable zoom for production later) */}
        <OrbitControls enableZoom={false} />

      </Canvas>
    </div>
  );
}