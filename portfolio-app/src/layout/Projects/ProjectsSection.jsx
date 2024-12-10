import React from "react";

import ProjectsContainer from "../../components/ProjectsContainer/ProjectsContainer";

import './_projectsSection.scss';

//---------------------------------------------------------------------

export default function ProjectsSection() {
    return (
        <div className="projects-section" id='projects-section'>
            <div className="projects-section__title">
                <h2>PROJECTS</h2>
            </div>
            <div className="projects-wrapper">
                <ProjectsContainer />
            </div>
        </div>
    );
}