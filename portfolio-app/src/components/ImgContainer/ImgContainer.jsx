import './_imgContainer.scss'

//-----------------------------------------

function ImgContainer({ src, alt, size, variant }) {

    return (
        <div className={`imgContainer--${size}${variant}`}>
            <img
                src={src}
                alt={alt}
            />
        </div>
    );

};

export default ImgContainer;