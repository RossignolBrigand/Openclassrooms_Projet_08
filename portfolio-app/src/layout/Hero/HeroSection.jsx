import React from 'react';
import { useTranslation } from 'react-i18next';

import ProfilePic from '../../images/tho.png';

import ImgContainer from '../../components/ImgContainer/ImgContainer';
import Button from '../../components/Button/Button';

import './_hero.scss';
//---------------------------------------------------------------------

function HeroSection() {

    const { t } = useTranslation('heroSection');

    return (
        <section className='heroSection'>
            <div className='resume-container'>
                <h2>{t('presentation')}</h2>
                <p>{t('summary')}</p>
                <div className='btn-container'>
                    <Button
                        label={t('cta.cv')}
                        onClick={''}
                    />
                    <Button
                        label={t('cta.contact')}
                        onClick={''}
                    />
                    <Button
                        label={t('cta.github')}
                        onClick={''}
                    />
                </div>
            </div>
            <ImgContainer
                src={ProfilePic}
                alt={''}
                size={''}
                variant={'round'}
            />
        </section>
    );

};

export default HeroSection;