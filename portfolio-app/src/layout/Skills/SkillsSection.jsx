import { useTranslation } from 'react-i18next';

import './_skillsSection.scss';

function SkillsSection() {

    const { t } = useTranslation('skillSection')

    return (
        <section className='skills-section'>
            <h2>SKILLS</h2>
            <div className='skills-container'>
                <div className='skills-block'>
                    <h3 className='skills-block__title'>FRONTEND</h3>
                    <p className='skills-block__content'>{t('paragraph')}</p>
                    <ul className='skills-block__content--list'>
                        <li>list item 1</li>
                        <li>list item 2</li>
                        <li>list item 3</li>
                    </ul>
                </div>
                <div className='skills-block'>
                    <h3 className='skills-block__title'>BACKEND</h3>
                    <p className='skills-block__content'>{t('paragraph')}</p>
                    <ul className='skills-block__content--list'>
                        <li>list item 1</li>
                        <li>list item 2</li>
                        <li>list item 3</li>
                    </ul>
                </div>
                <div className='skills-block'>
                    <h3 className='skills-block__title'>PROJECT MANAGEMENT</h3>
                    <p className='skills-block__content'>{t('paragraph')}</p>
                    <ul className='skills-block__content--list'>
                        <li>list item 1</li>
                        <li>list item 2</li>
                        <li>list item 3</li>
                    </ul>
                </div>
            </div>

        </section >
    );

};

export default SkillsSection;