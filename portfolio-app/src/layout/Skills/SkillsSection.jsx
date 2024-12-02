import { useTranslation } from 'react-i18next';

import './_skillsSection.scss';

function SkillsSection() {

    const { t } = useTranslation('skillSection')

    return (
        <section className='skills-section'>
            <h2>SKILLS</h2>
            <hr />
            <p>{t('paragraph')}</p>
            <p>{t('paragraph')}</p>
            <p>{t('paragraph')}</p>
        </section>
    );

};

export default SkillsSection;