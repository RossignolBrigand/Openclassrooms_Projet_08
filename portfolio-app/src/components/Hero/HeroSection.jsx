import React from 'react';
import { useTranslation } from 'react-i18next';

import './_hero.scss';
//---------------------------------------------------------------------

function HeroSection() {

    const { t } = useTranslation('heroSection');

    return (
        <section className='heroSection'>
            <h2>HEROSECTION</h2>
            <h2>{t('presentation')}</h2>
            <p>{t('summary')}</p>
        </section>
    );

};

export default HeroSection;