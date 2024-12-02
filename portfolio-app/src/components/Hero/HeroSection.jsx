import React from 'react';
import { useTranslation } from 'react-i18next';

import thomas from '../../images/tho.png';

import ImgContainer from '../ImgContainer/ImgContainer';
import Button from '../Button/Button';

import './_hero.scss';
//---------------------------------------------------------------------

function HeroSection() {

    const { t } = useTranslation('heroSection');

    return (
        <section className='heroSection'>
            <div className='resume-container'>
                <h2>{t('presentation')}</h2>
                <p>{t('summary')}</p>
                <Button
                    name={t('cta.cv')}
                    onClick={''}
                />
                <Button
                    name={t('cta.contact')}
                    onClick={''}
                />
            </div>
            <ImgContainer
                src={thomas}
                alt={''}
                size={''}
                variant={'round'}

            />
        </section>
    );

};

export default HeroSection;