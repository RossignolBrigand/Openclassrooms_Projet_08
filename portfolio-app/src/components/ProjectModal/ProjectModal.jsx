
import Modal from 'react-modal';

import './_projectModal.scss';

//-------------------------------------------------

export default function ProjectModal({ isOpen, project, closeModal }) {

    if (!project) return null;

    const { name, description, detailedDescription, website, codebase, image, tags } = project;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel='Project Details'
            overlayClassName="modal-overlay"
            className={"modal-overlay"}
        >
            <div className='modal-wrapper'>
                <button className="close-button" onClick={closeModal}>
                    &times;-
                </button>
                <h2>{name}</h2>
                <p>{detailedDescription}</p>
                <div className="links">
                    <a href={website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                    </a>
                    <a href={codebase} target="_blank" rel="noopener noreferrer">
                        View Codebase
                    </a>
                </div>
            </div>
        </Modal>
    )
};