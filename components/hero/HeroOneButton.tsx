import React, { useState, useEffect } from 'react';

const HeroOneButton = ({ onToggleMode }) => {
  const [randomImage, setRandomImage] = useState<string>("");

  const imageUrls = [
    "images/self-pictures/icon-1.png",
    "images/self-pictures/icon-2.png",
    "images/self-pictures/icon-3.png",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    setRandomImage(imageUrls[randomIndex]);
  }, []);

  return (
    <header className="text-center">
      <button className="cursor-pointer" onClick={onToggleMode}>
        <div className="w-1/3 mx-auto">
          <img
            src={randomImage}
            alt="Random Icon"
            className="w-full hover:scale-110 active:scale-105 transform origin-center transition-transform"
          />
        </div>
      </button>
    </header>
  );
};

export default HeroOneButton;
