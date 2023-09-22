import React,{useState} from "react";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div>
        <div>
          <button onClick={goToPreviousImage}>Left</button>
          <img src={images[currentIndex]} alt="Carousel" />
          <button onClick={goToNextImage}>Right</button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;