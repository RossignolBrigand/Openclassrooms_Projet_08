import React from "react";
import { useTranslation } from "react-i18next";

import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer";

import './_projectsSection.scss';

//---------------------------------------------------------------------


export default function ProjectsSection() {

    const { t } = useTranslation('projectSection')

    return (
        <section className="projects-section" id='projects-section'>
            <div className="projects-section__title">
                <h2>{t('title')}</h2>
            </div>
            <ProjectsContainer />
        </section>
    );
}
