
import { FaTimes } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import Modal from 'react-modal';

import TagSystem from "../TagSystem/TagSystem";

import './_projectModal.scss';

//-------------------------------------------------

export default function ProjectModal({ isOpen, project, closeModal }) {

    const { t } = useTranslation('modal')

    if (!project) return null;

    const { name, detailedDescription, website, codebase, imageUrl, imageAlt, tags } = project;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel='Project Details'
            overlayClassName="modal-overlay"
            className={"modal-projects"}
        >
            <div className='modal-wrapper'>
                <button className="close-button" onClick={closeModal}>
                    <FaTimes />
                </button>
                <div className='modal-content'>
                    <div className="modal-content__text">
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
                    </div>
                    <div className='modal-content__image'>
                        {imageUrl ?
                            <img src={process.env.PUBLIC_URL + imageUrl} alt={imageAlt} /> : <p>Loading...</p>
                        }
                    </div>
                </div>
            </div>
        </Modal>
    )
};
