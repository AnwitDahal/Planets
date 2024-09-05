import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Expo, Power1, Quint } from 'gsap';

const MathUtils = {
  lerp: (a, b, n) => (1 - n) * a + n * b,
  distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
};

const MainLanding = () => {
  const contentRef = useRef(null);
  const imagesRef = useRef([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cacheMousePos, setCacheMousePos] = useState({ x: 0, y: 0 });
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [imgPosition, setImgPosition] = useState(0);
  const [zIndexVal, setZIndexVal] = useState(1);
  const threshold = 100;

  // Get mouse position
  useEffect(() => {
    const getMousePos = (ev) => {
      setMousePos({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', getMousePos);
    return () => window.removeEventListener('mousemove', getMousePos);
  }, []);

  const getMouseDistance = () => {
    return MathUtils.distance(mousePos.x, mousePos.y, lastMousePos.x, lastMousePos.y);
  };

  const showNextImage = (img, index) => {
    const rect = img.getBoundingClientRect();
    gsap.killTweensOf(img);

    gsap.timeline()
      .set(img, {
        opacity: 0,
        scale: 0.8,
        zIndex: zIndexVal,
        x: cacheMousePos.x - rect.width / 2,
        y: cacheMousePos.y - rect.height / 2,
      })
      .to(img, {
        duration: 0.9,
        ease: Expo.easeOut,
        opacity: 1,
        scale: 1,
        x: mousePos.x - rect.width / 2,
        y: mousePos.y - rect.height / 2,
      })
      .to(img, {
        duration: 1.2,
        ease: Power1.easeOut,
        opacity: 0,
      }, 0.4)
      .to(img, {
        duration: 1.2,
        ease: Quint.easeOut,
        scale: 0.5,
      }, 0.4);
  };

  useEffect(() => {
    const render = () => {
      let distance = getMouseDistance();
      setCacheMousePos({
        x: MathUtils.lerp(cacheMousePos.x || mousePos.x, mousePos.x, 0.1),
        y: MathUtils.lerp(cacheMousePos.y || mousePos.y, mousePos.y, 0.1),
      });

      if (distance > threshold) {
        const imgIndex = imgPosition;
        const img = imagesRef.current[imgIndex];
        showNextImage(img, imgIndex);

        setZIndexVal(zIndexVal + 1);
        setImgPosition((imgPosition + 1) % imagesRef.current.length);
        setLastMousePos(mousePos);
      }

      requestAnimationFrame(render);
    };

    render();
  }, [mousePos, cacheMousePos, lastMousePos, imgPosition, zIndexVal]);

  return (
    <section>
      <div className="content h-72 relative flex justify-center items-center" ref={contentRef}>
        {['image_1.jpeg', 'image_2.jpeg', 'image_3.jpeg', 'image_4.jpeg', 'image_5.jpeg'].map((src, idx) => (
          <img
            key={src}
            ref={(el) => imagesRef.current[idx] = el}
            src={`/images/${src}`}
            alt={`image${idx + 1}`}
            className="content_img imageset absolute w-full h-full object-cover"
          />
        ))}
        <h3 className="content_title">ranlus</h3>
      </div>
    </section>
  );
};

export default MainLanding;
