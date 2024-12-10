
import './_projectCard.scss';

//------------------------------------------------------

export default function ProjectCard({ name, description, image, imageAlt, onClick }) {

    return (
        <div
            className='card-wrapper'
            onClick={onClick}
        >
            <div card-image>
                <img src={image} alt={imageAlt}></img>
            </div>
            <div className='card-content'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
};