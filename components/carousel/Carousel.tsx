import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
  imageAlts: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images, imageAlts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const prevSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
      setFadeOut(false);
    }, 700); // Transition duration, adjust as needed
  };

  const nextSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setFadeOut(false);
    }, 700); // Transition duration, adjust as needed
  };

  useEffect(() => {
    const currentImage = images[currentSlide];
    let intervalTime = 5000;

    if (currentImage.endsWith('.gif')) {
      intervalTime = 15000;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentSlide, images]);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ? 'block' : 'hidden'
            } duration-700 ease-in-out transition-opacity`}
            data-carousel-item
            style={{
              opacity: currentSlide === index && !fadeOut ? 1 : 0,
            }}
          >
            <img
              src={image}
              className="absolute block w-full h-full object-cover rounded-lg"
              alt={imageAlts[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
