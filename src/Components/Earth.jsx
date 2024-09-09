import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Earth = () => {
  let tex = useTexture("./Images/8k_earth_daymap.jpg");
  let cloudTexture = useTexture("./Images/8k_earth_clouds.jpg");
  let planet = useRef();
  let cloudRef = useRef();
  useFrame((state, delta) => {
    planet.current.rotation.y += delta * 0.05;
    cloudRef.current.rotation.y += delta * 0.1;
  });

  return (
    <>
      <mesh ref={planet}>
        <sphereGeometry args={[2.2, 50, 50]} />
        <meshStandardMaterial map={tex} />
        {/* <meshBasicMaterial color={0xffff}/> */}
      </mesh>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[2.22, 50, 50]} /> {/* Slightly larger radius */}
        <meshStandardMaterial
          map={cloudTexture}
          transparent={true} // Make sure the clouds are transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending} // Adjust opacity as needed
        />
      </mesh>
    </>
  );
};

export default Earth;
