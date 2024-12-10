import { useTranslation } from 'react-i18next';

import { DiDatabase } from "react-icons/di";
import ProgressBar from '../../components/ProgressBar/ProgressBar';

import './_skillsSection.scss';

function SkillsSection() {

    const { t } = useTranslation('skillSection')

    return (
        <section className='skills-section' id='skills-section'>
            <h2>{t('title')}</h2>
            <div className='skills-container'>
                <div className='skills-block' >
                    <h3 className='skills-block__title'>FRONTEND <DiDatabase /></h3>
                    <ul className='skills-block__content--list'>
                        <li><ProgressBar label={"HTML5"} rating={90} color={"blue"} /></li>
                        <li><ProgressBar label={"CSS"} rating={80} color={"orange"} /></li>
                        <li><ProgressBar label={"JavaScript"} rating={60} color={"yellow"} /></li>
                        <li><ProgressBar label={"React"} rating={60} color={"teal"} /></li>
                        <li><ProgressBar label={"Sass"} rating={60} color={"pink"} /></li>

                    </ul>
                </div>
                <div className='skills-block'>
                    <h3 className='skills-block__title'>BACKEND</h3>
                    <ul className='skills-block__content--list'>
                        <li><ProgressBar label={"Node.js"} rating={40} color={"green"} /></li>
                        <li><ProgressBar label={"Express"} rating={50} color={"teal"} /></li>
                        <li><ProgressBar label={"Mongo.db"} rating={50} color={"green"} /></li>
                    </ul>
                </div>
            </div>
            <div className='tools-block'>
                <h3 className='tools-block__title'>PROJECT MANAGEMENT & TOOLS</h3>
                <div className='tools-block__content'>
                    <ul className='tools-block__content--list'>
                        <li>Figma</li>
                        <li>Git</li>
                        <li>Notion</li>
                        <li>Miro</li>
                        <li>Postman</li>
                        <li>Swagger</li>
                    </ul>
                </div>
                <div className='tools-block__content'>
                    <h4>Technologies and dependencies I use : </h4>
                    <ul className='tools-block__content--list'>
                        <li>JSONWebToken</li>
                        <li>bCrypt</li>
                        <li>Multer</li>
                        <li>Sharp</li>
                        <li>Gulp</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div>
                <p>Je travaille actuellement sur ces compétences : / Skills i am currently learning : </p>
                <ul>
                    <li>Python</li>
                    <li>Next.js</li>
                    <li>PHP/ MySQL</li>
                    <li>Debug / Testing</li>
                    <li>E-commerce</li>
                </ul>

            </div>
        </section >
    );

};

export default SkillsSection;