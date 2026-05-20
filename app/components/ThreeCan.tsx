"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useGLTF,
  useTexture,
  Center,
} from "@react-three/drei";

import * as THREE from "three";
import { useRef } from "react";

function CanModel() {
  const { scene } = useGLTF("/models/can.glb");

  const labelTexture = useTexture("/textures/can-simple-invert.png");

  const groupRef = useRef<THREE.Group>(null!);
  const targetRotation = useRef({
  x: 0,
  y: 0,
  z: 0,
  });
  const lastChange = useRef(0);

  // Fix texture orientation
  labelTexture.wrapS = THREE.RepeatWrapping;
  labelTexture.repeat.x = -1;
  labelTexture.offset.x = 1;
  labelTexture.flipY = false;
  labelTexture.colorSpace = THREE.SRGBColorSpace;
  labelTexture.anisotropy = 16;

  labelTexture.needsUpdate = true;  

useFrame((state) => {
  const t = state.clock.getElapsedTime();

  // Floating movement
  groupRef.current.position.y = Math.sin(t * 1.2) * 0.08;

  // Organic rotation
  groupRef.current.rotation.x =
    Math.sin(t * 0.7) * 0.25;

  groupRef.current.rotation.y =
    t * 0.4;

  groupRef.current.rotation.z =
    Math.cos(t * 0.5) * 0.18;
});

  
  // Traverse every mesh inside GLB
  scene.traverse((child: any) => {
  if (child.isMesh) {

    // BODY
    if (child.name === "Cube_1") {
      child.material = new THREE.MeshPhysicalMaterial({
        map: labelTexture,
        metalness: 0.15,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.5,
      });
    }

    // LID + TAB
    if (child.name === "Cube") {
      child.material = new THREE.MeshPhysicalMaterial({
        color: "#d4d4d4",
        metalness: 1,
        roughness: 0.22,
      });
    }
  }
});

  return (
    <group ref={groupRef}>
    <Center>
    <primitive
      object={scene}
      scale={12}
    />
    </Center>
    </group>
  );
}

export default function ThreeCan() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 30 }}>
        <ambientLight intensity={1} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
        />

        <Environment preset="city" />

        <CanModel />

        <OrbitControls enableZoom={false} enableRotate={true} enablePan={true} />
      </Canvas>
    </div>
  );
}