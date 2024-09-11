import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Neptune = () => {
  let tex = useTexture("./Images/2k_neptune.jpg");
  let planet = useRef();
  let cloudRef = useRef();
  useFrame((state, delta) => {
    planet.current.rotation.y += delta * 0.05;
  });

  return (
    <>
      <mesh ref={planet}>
        <sphereGeometry args={[2, 50, 50]} />
        <meshStandardMaterial map={tex} roughness={0} />
        {/* <meshBasicMaterial color={0xffff}/> */}
      </mesh>
    </>
  );
};

export default Neptune;
