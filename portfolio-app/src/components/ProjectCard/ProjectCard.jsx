import PropTypes from 'prop-types';

import TagSystem from '../TagSystem/TagSystem';

import './_projectCard.scss';

//------------------------------------------------------

export default function ProjectCard({ name, description, imageUrlCropped, imageAlt, onClick, tags}) {

    return (
        <div className='card-wrapper' onClick={onClick}>
            {imageUrlCropped ?
                < div className='card-image'>
                    <img src={imageUrlCropped} alt={imageAlt}></img>
                </div> : <p>Loading...</p>
            }
            <div className='card-content'>
                <h3>{name}</h3>
                <p>{description}</p>
                <TagSystem data={tags} />
            </div>
        </div >
    )
};

ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    onClick: PropTypes.func,
    tags: PropTypes.array,
}