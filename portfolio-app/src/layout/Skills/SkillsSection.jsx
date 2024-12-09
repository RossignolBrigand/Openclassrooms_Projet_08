import { useTranslation } from 'react-i18next';



import ProgressBar from '../../components/ProgressBar/ProgressBar';

import './_skillsSection.scss';

function SkillsSection() {

    const { t } = useTranslation('skillSection')

    return (
        <section className='skills-section' id='skills-section'>
            <h2>{t('title')}</h2>
            <p>Je maîtrise les compétences suivantes : </p>
            <div className='skills-container'>
                < div className='skills-block' >
                    <h3 className='skills-block__title'>FRONTEND</h3>
                    <ul className='skills-block__content--list'>
                        <li><ProgressBar label={"HTML"} rating={"90"} color={"blue"} /></li>
                        <li><ProgressBar label={"CSS"} rating={"80"} color={"orange"} /></li>
                        <li><ProgressBar label={"JS"} rating={"60"} color={"yellow"} /></li>
                        <li><ProgressBar label={"Sass"} rating={"60"} color={"pink"} /></li>
                        <li><ProgressBar label={"React"} rating={"60"} color={"teal"} /></li>
                    </ul>
                </div >
                <div className='skills-block'>
                    <h3 className='skills-block__title'>BACKEND</h3>
                    <ul className='skills-block__content--list'>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <br />
                        <li>JSONWebToken</li>
                        <li>bCrypt</li>
                        <li>Multer</li>
                        <li>Sharp</li>

                    </ul>
                </div>
                <div className='skills-block'>
                    <h3 className='skills-block__title'>PROJECT MANAGEMENT & TOOLS</h3>
                    <ul className='skills-block__content--list'>
                        <li>Figma</li>
                        <li>Git</li>
                        <li>Notion</li>
                        <li>Miro</li>
                        <li>Postman</li>
                        <li>Swagger</li>
                    </ul>
                </div>
            </div>
            <div>
                <p>Je travaille actuellement sur ces compétences : / Skills i am currently learning : </p>

                <ul>
                    <li>Python</li>
                    <li>Next.js</li>
                    <li>Debug / Testing</li>
                    <li>E-commerce</li>
                </ul>

            </div>
        </section >
    );

};

export default SkillsSection;