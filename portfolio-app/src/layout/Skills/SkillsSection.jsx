import { useTranslation } from 'react-i18next';

import ProgressBar from '../../components/ProgressBar/ProgressBar';
import RatingBar from '../../components/RatingBar/RatingBar';

import './_skillsSection.scss';

function SkillsSection() {
    const { t } = useTranslation('skillSection');

    return (
        <section className="skills-section" id="skills-section">
            <h2>{t('title')}</h2>
            <div className="skills-container">
                <div className="skills-block">
                    <h3 className="skills-block__title">
                        {t('block-titles.frontend')}
                    </h3>
                    <ul className="skills-block__content--list">
                        <li>
                            <RatingBar label={'HTML'} rating={4} />
                        </li>
                        <li>
                            <RatingBar label={'CSS'} rating={4} />
                        </li>
                        <li>
                            <RatingBar label={'Javascript'} rating={4} />
                        </li>
                        <li>
                            <RatingBar label={'React'} rating={4} />
                        </li>
                        <li>
                            <RatingBar label={'Sass'} rating={3} />
                        </li>
                    </ul>
                </div>
                <div className="skills-block">
                    <h3 className="skills-block__title">
                        {t('block-titles.backend')}
                    </h3>
                    <ul className="skills-block__content--list">
                        <li>
                            <RatingBar label={'Node.js'} rating={3} />
                        </li>
                        <li>
                            <RatingBar label={'Express'} rating={4} />
                        </li>
                        <li>
                            <RatingBar label={'MongoDB'} rating={3} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tools-container">
                <h3 className="tools-block__title">
                    {t('block-titles.tools&tech')}
                </h3>
                <div className="tools-block">
                    <div className="tools-block__content">
                        <h4>{t('applications.title')}</h4>
                        <ul className="tools-block__content--list">
                            <li>Figma</li>
                            <li>Git</li>
                            <li>Notion</li>
                            <li>Miro</li>
                            <li>Postman</li>
                            <li>Swagger</li>
                        </ul>
                    </div>
                    <div className="tools-block__content">
                        <h4>{t('dependencies.title')}</h4>
                        <ul className="tools-block__content--list">
                            <li>JSONWebToken</li>
                            <li>bCrypt</li>
                            <li>Multer</li>
                            <li>Sharp</li>
                            <li>Gulp</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="learning-container">
                <h4>{t('learning.title')}</h4>
                <ul>
                    <li>Python</li>
                    <li>Next.js</li>
                    <li>PHP/ MySQL</li>
                    <li>Debug / Testing</li>
                    <li>E-commerce</li>
                </ul>
            </div>
        </section>
    );
}

export default SkillsSection;
