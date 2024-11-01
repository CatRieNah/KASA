import React, { useState } from 'react';

function Carousel({ pictures, }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        if (currentIndex < pictures.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(pictures.length - 1);
        }
    };

    return (
        <div className="carousel">
            <img src={pictures[currentIndex]} alt="Logement" className="carousel-image" />

            {pictures.length > 1 && (
                <div className="carousel-controls">
                    <button
                        aria-label="Previous image"
                        className="carousel-control carousel-control-prev"
                        onClick={prevImage}
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                        aria-label="Next image"
                        className="carousel-control carousel-control-next"
                        onClick={nextImage}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            )}
            <p className="carousel-counter">
                {currentIndex + 1} / {pictures.length}
            </p>
        </div>
    );
}

export default Carousel;