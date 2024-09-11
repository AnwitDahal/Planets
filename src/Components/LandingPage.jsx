import React from 'react'
import { Canvas } from "@react-three/fiber";

import { OrbitControls, Stars } from '@react-three/drei';
import './style.css'
import Mars from './Mars';
import Earth from './Earth';
import Mercury from './Mercury';
import Saturn from './Saturn';
import Venus from './Venus';
import Jupiter from './Jupiter';
import Neptune from './Neptune';
import Uranus from './Uranus';

const LandingPage = () => {
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
      <Mercury/>
      {/* <Venus/> */}
    {/* <Earth/> */}
    {/* <Mars/> */}
    {/* <Jupiter/> */}
    {/* <Saturn/> */}
    {/* <Uranus/> */}
    {/* <Neptune/> */}
    </Canvas>
    
  )
}

export default LandingPage