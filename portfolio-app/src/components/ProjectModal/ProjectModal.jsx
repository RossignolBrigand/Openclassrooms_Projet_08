
import { FaTimes } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';

import './_projectModal.scss';
import TagSystem from "../TagSystem/TagSystem";

//-------------------------------------------------

export default function ProjectModal({ isOpen, project, closeModal }) {

    const { t } = useTranslation('modal')

    if (!project) return null;

    const { name, detailedDescription, website, codebase, image, imageAlt, tags } = project;

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
                    <FaTimes />
                </button>
                <div className='modal-content'>
                    <h2>{name}</h2>
                    <p>{detailedDescription}</p>
                    <TagSystem data={tags} />
                    <div className="modal-content__links">
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            {t('visitWebsite')}
                        </a>
                        <a href={codebase} target="_blank" rel="noopener noreferrer">
                            {t('visitCodebase')}
                        </a>
                    </div>
                    <div className='modal-content__image'>
                        <img src={image} alt={imageAlt} />
                    </div>
                </div>
            </div>
        </Modal>
    )
};
