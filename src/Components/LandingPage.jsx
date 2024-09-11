import React, { useRef } from "react";
import Slider from "react-slick";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import Saturn from "./Saturn";
import Uranus from "./Uranus";
import Jupiter from "./Jupiter";
import Neptune from "./Neptune";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const sliderRef = useRef(null); // Reference to the slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ref: sliderRef,
  };

  // Function to navigate to a specific slide
  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="landing-page h-screen w-screen flex flex-col justify-between  bg-[url('./Images/Helo.jpg')]">
      <div className="flex-grow">
        <Slider {...settings}>
          {/* Slide 1: Mercury */}
          <div className="h-screen w-screen relative ">
            <Canvas className="absolute inset-0">
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <Mercury />
            </Canvas>
          </div>

          {/* Slide 2: Venus */}
          <div className="h-screen w-screen relative ">
            <Canvas className="absolute inset-0">
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <Venus />
            </Canvas>
          </div>

          {/* Slide 3: Earth */}
          <div className="h-screen w-screen relative ">
            <Canvas className="absolute inset-0">
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <Earth />
            </Canvas>
          </div>

          {/* Slide 4: Mars */}
          <div className="h-screen w-screen relative ">
            <Canvas className="absolute inset-0">
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <Mars />
            </Canvas>
          </div>

          {/* Slide 5: Jupiter */}
          <div className="h-screen w-screen relative ">
            <Canvas className="absolute inset-0">
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <Jupiter />
            </Canvas>
          </div>

          {/* Slide 6: Saturn */}
          <div className="h-screen w-screen relative">
            <Canvas className="absolute inset-0">
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <Saturn />
            </Canvas>
          </div>

          {/* Slide 7: Uranus */}
          <div className="h-screen w-screen relative ">
            <Canvas className="absolute inset-0">
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <Uranus />
            </Canvas>
          </div>

          {/* Slide 8: Neptune */}
          <div className="h-screen w-screen relative ">
            <Canvas className="absolute inset-0">
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <Neptune />
            </Canvas>
          </div>
        </Slider>
      </div>

      {/* Footer with Planet Buttons */}
      <footer className="bg-gray-900 text-white py-4 text-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => goToSlide(0)}
        >
          Mercury
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => goToSlide(1)}
        >
          Venus
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => goToSlide(2)}
        >
          Earth
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => goToSlide(3)}
        >
          Mars
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => goToSlide(4)}
        >
          Jupiter
        </button>
        <button
          className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => goToSlide(5)}
        >
          Saturn
        </button>
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => goToSlide(6)}
        >
          Uranus
        </button>
        <button
          className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
          onClick={() => goToSlide(7)}
        >
          Neptune
        </button>
      </footer>
    </div>
  );
};

export default LandingPage;
