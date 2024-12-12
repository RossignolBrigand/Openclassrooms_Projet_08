import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DiGithubBadge } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";

import ProfilePic from '../../assets/images/Profile.png';

import ImgContainer from '../../components/ImgContainer/ImgContainer';
import Button from '../../components/Button/Button';

import './_hero.scss';

//---------------------------------------------------------------------



function HeroSection() {

    const { t } = useTranslation('heroSection');

    const goToGithub = () => {
        window.location.href = process.env.REACT_APP_GITHUB_LINK
    }
    const goToLinkedin = () => {
        window.location.href = process.env.REACT_APP_LINKEDIN_LINK
    }

    return (
        <section className='heroSection' id='hero-section'>
            <div className='about-container'>
                <h2>{t('presentation')}</h2>
                <p>{t('summary.paragraph1')}</p>
                <p>{t('summary.paragraph2')}</p>
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
                    >{t('cta.contact')}</Button>
                    <Button
                        onClick={goToGithub}
                    >
                        {t('cta.github')}
                        <DiGithubBadge />
                    </Button>
                    <Button
                        onClick={goToLinkedin}
                    >
                        {t('cta.linkedin')}
                        <BsLinkedin />
                    </Button>
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