import { Sphere, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
//   let tex = useTexture("./Images/Figma basics.png");
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y+= delta;
  });
  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        
        <Sphere/>
        {/* <meshStandardMaterial side={THREE.DoubleSide} transparent  /> */}
      </mesh>
    </group>
  );
};

export default Scene;