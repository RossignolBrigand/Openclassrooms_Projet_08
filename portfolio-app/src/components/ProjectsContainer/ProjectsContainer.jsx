
import { useTranslation } from 'react-i18next';
import './_projectsContainer.scss';
import ProjectsData from '../../data/projects.json';
//------------------------------------------------------------

export default function ProjectsContainer({ children }) {

    const { t } = useTranslation('projectSection');

    return (
        ProjectsData.map((project) => {

        })
    )

};