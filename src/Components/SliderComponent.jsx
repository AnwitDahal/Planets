import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-red">
      <Slider {...settings}>
        <div>
          <div className="h-64 flex justify-center items-center bg-blue-500 text-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">Slide 1</h3>
          </div>
        </div>
        <div>
          <div className="h-64 flex justify-center items-center bg-green-500 text-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">Slide 2</h3>
          </div>
        </div>
        <div>
          <div className="h-64 flex justify-center items-center bg-red-500 text-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">Slide 3</h3>
          </div>
        </div>
        <div>
          <div className="h-64 flex justify-center items-center bg-purple-500 text-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">Slide 4</h3>
          </div>
        </div>
        <div>
          <div className="h-64 flex justify-center items-center bg-yellow-500 text-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">Slide 5</h3>
          </div>
        </div>
        <div>
          <div className="h-64 flex justify-center items-center bg-indigo-500 text-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">Slide 6</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}
