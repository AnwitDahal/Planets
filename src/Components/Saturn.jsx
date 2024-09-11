import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Saturn = () => {
  // Load textures for planet and ring
  let planetTexture = useTexture("./Images/8k_saturn.jpg");
  let ringTexture = useTexture("./Images/8k_saturn_ring_alpha.png"); // Ensure this is a transparent texture for the ring

  // Refs for planet and ring
  let planetRef = useRef();
  let ringRef = useRef();

  // Rotation animation for the planet
  useFrame((state, delta) => {
    planetRef.current.rotation.y += delta * 0.05;
    ringRef.current.rotation.x = Math.PI / 2; // Tilt the ring slightly
    ringRef.current.rotation.z += delta * 0.02; // Rotate the ring slowly
  });

  return (
    <>
      {/* Saturn Planet */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[2, 50, 50]} />
        <meshStandardMaterial map={planetTexture} roughness={0} />
      </mesh>

      {/* Saturn Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.5, 2, 64]} /> {/* Inner radius (2.5), outer radius (4) */}
        <meshBasicMaterial map={ringTexture} side={THREE.DoubleSide} transparent={true} />
      </mesh>
    </>
  );
};

export default Saturn;
