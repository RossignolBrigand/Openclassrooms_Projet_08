import './_imgContainer.scss'

//-----------------------------------------

function ImgContainer({ src, alt, size, variant, loading }) {

    return (
        <div className={`imgContainer--${size}${variant}`}>
            <img
                src={src}
                alt={alt}
                loading={loading}
            />

        </div>
    );

};

export default ImgContainer;