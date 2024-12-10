
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';

// The project data holds references for localization which are then used with react i18n to showcase the right lines. This enables use to decouple our data from the standard localization files
import ProjectsData from '../../data/projects.json';

import './_projectsContainer.scss';
//------------------------------------------------------------

export default function ProjectsContainer({ children }) {

    const { t } = useTranslation('projectSection');

    return (
        ProjectsData.map((project) => {

        })
    )

};