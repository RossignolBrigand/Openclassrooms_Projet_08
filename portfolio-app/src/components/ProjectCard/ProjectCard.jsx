
import TagSystem from '../TagSystem/TagSystem';
import './_projectCard.scss';

//------------------------------------------------------

export default function ProjectCard({ name, description, image, imageAlt, onClick, tags }) {

    return (
        <div className='card-wrapper' onClick={onClick}>
            {console.log(image)}
            {image ?
                < div className='card-image'>
                    <img src={image} alt={imageAlt}></img>
                </div> : null
            }

            <div className='card-content'>
                <h3>{name}</h3>
                <p>{description}</p>
                <TagSystem data={tags} />
            </div>
        </div >
    )
};
