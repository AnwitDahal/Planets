import React from 'react'
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Stars } from '@react-three/drei';
import './style.css'
import Mars from './Components/Mars';
import Earth from './Components/Earth';

const App = () => {
  return (
    <Canvas>
      <OrbitControls/>
      <Stars 
        radius={1}       // Radius of the sphere that holds the stars
        depth={100}         // Star field depth (for parallax effect)
        count={500}       // Number of stars
        factor={4}         // Star size factor
        saturation={0}     // Color saturation for stars
        fade={true}        // Enable fading of stars at the edges
      />
      <ambientLight/>
    <Earth/>
    {/* <Mars/> */}
    </Canvas>
    
  )
}

export default App