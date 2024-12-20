import { useTranslation } from 'react-i18next';

import RatingBar from '../../components/RatingBar/RatingBar';

// Icons
import { FaFigma } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiGulp } from "react-icons/di";
import { DiNpm } from "react-icons/di";
import { ReactComponent as MiroIcon } from '../../assets/icons/miro-svgrepo-com.svg';
import { ReactComponent as PostmanIcon } from '../../assets/icons/postman-icon-svgrepo-com.svg';
import { ReactComponent as SwaggerIcon } from '../../assets/icons/swagger-svgrepo-com.svg';
import { ReactComponent as ExpressIcon } from '../../assets/icons/express-svgrepo-com.svg';

import './_skillsSection.scss';

//-------------------------------------------------------------

export default function SkillsSection() {
    const { t } = useTranslation('skillSection');

    return (
        <section className="skills-section" id="skills-section">
            <h2>{t('title')}</h2>
            <div className="skills-container">
                <div className="skills-block">
                    <ul className="skills-block__content--list">
                        <li>
                            <RatingBar label={'HTML'} rating={4} icon={<DiHtml5 className='svg__HTML' />} />
                        </li>
                        <li>
                            <RatingBar label={'CSS'} rating={4} icon={<DiCss3 className='svg__CSS' />} />
                        </li>
                        <li>
                            <RatingBar label={'Javascript'} rating={4} icon={<DiJsBadge className='svg__JS' />} />
                        </li>
                        <li>
                            <RatingBar label={'React'} rating={4} icon={<DiReact className='svg__React' />} />
                        </li>
                        <li>
                            <RatingBar label={'Sass'} rating={3} icon={<DiSass className='svg__Sass' />} />
                        </li>
                        <li>
                            <RatingBar label={'Node.js'} rating={3} icon={<DiNodejsSmall className='svg__Node' />} />
                        </li>
                        <li>
                            <RatingBar label={'Express'} rating={4} icon={<ExpressIcon className='svg__Express' />} />
                        </li>
                        <li>
                            <RatingBar label={'MongoDB'} rating={3} icon={<DiMongodb className='svg__Mongo' />} />
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
                            <li><FaFigma className='svg__Figma' /></li>
                            <li><DiGit className='svg__Git' /></li>
                            <li><DiGulp className='svg__Gulp' /></li>
                            <li><MiroIcon className='svg__Miro' /></li>
                            <li><PostmanIcon /></li>
                            <li><SwaggerIcon /></li>
                            <li><DiNpm /></li>
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

