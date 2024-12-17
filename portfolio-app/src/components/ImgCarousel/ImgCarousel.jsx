import { useState, useEffect } from 'react';
import Button from '../Button/Button';

import './_imgCarousel.scss';

export default function ImgCarousel({ images }) {
    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
        setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1);
    };

    const previousImage = () => {
        setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1);
    };

    return (
        <div className="carousel-container">
            {images.length > 1 ? (
                <Button variant="btn-carousel" onClick={previousImage} />
            ) : null}
            <div className="carousel-images">
                {images.map((image, index) => (
                    <>
                        <img
                            key={index}
                            alt={image.alt}
                            src={image.url}
                            style={{
                                display:
                                    index === activeImage ? 'block' : 'none',
                            }}
                        />
                        {console.log(` Modal : ${image.url}`)}
                    </>
                ))}
            </div>
            {images.length > 1 ? (
                <Button variant="btn-carousel" onClick={nextImage} />
            ) : null}
        </div>
    );
}
