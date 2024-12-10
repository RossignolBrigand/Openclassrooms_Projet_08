import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ProfilePic from '../../assets/images/picography-autumn-leaves-ground.jpg';

import ImgContainer from '../../components/ImgContainer/ImgContainer';
import Button from '../../components/Button/Button';

import './_hero.scss';

//---------------------------------------------------------------------



function HeroSection() {

    const { t } = useTranslation('heroSection');

    return (
        <section className='heroSection' id='hero-section'>
            <div className='about-container'>
                <h2>{t('presentation')}</h2>
                <p>{t('summary')}</p>
                <div className='btn-container'>
                    {/* Button to download CV */}
                    <Button
                        href='/portfolio-app/src/downloads/HCMS Mixing Cheatsheet.pdf'
                        target='_blank'
                        download
                        variant='default'
                    >{t('cta.cv')}
                    </Button>
                    <Button
                        href='#contact-section'
                        onClick={''}
                    >{t('cta.contact')}</Button>
                    <Button
                        onClick={''}
                    >{"GitHub"}</Button>
                    <Button
                        onClick={''}
                    >{"Linkedin"}</Button>
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