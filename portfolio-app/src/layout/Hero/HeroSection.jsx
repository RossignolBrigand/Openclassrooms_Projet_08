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
                        label={t('cta.cv')}
                        href='/portfolio-app/src/downloads/HCMS Mixing Cheatsheet.pdf'
                        target='_blank'
                        download
                        variant='default'
                    />
                    <Button
                        label={t('cta.contact')}
                        onClick={''}
                    />
                    <Button
                        label={"Github"}
                        onClick={''}
                    />
                    <Button
                        label={"Linkedin"}
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