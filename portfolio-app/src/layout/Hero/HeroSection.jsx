import { useTranslation } from 'react-i18next';
import { DiGithubBadge } from 'react-icons/di';
import { BsLinkedin } from 'react-icons/bs';

import HeroPic from '../../assets/images/Hero.jpg';
import ImgContainer from '../../components/ImgContainer/ImgContainer';
import Button from '../../components/Button/Button';

import './_hero.scss';

//---------------------------------------------------------------------

export default function HeroSection() {
    const { t } = useTranslation('heroSection');

    return (
        <section className="heroSection" id="hero-section">
            <div className="about-container">
                <h2>{t('presentation')}</h2>
                <div className="paragraph-container">
                    <p>{t('summary.paragraph1')}</p>
                    <p>{t('summary.paragraph2')}</p>
                </div>
                <div className="btn-container">
                    {/* Button to download CV */}
                    <Button
                        href="/portfolio-app/src/downloads/HCMS Mixing Cheatsheet.pdf"
                        target="_blank"
                        download
                        variant="default"
                    >
                        {t('cta.cv')}
                    </Button>
                    <Button href="#contact-section">{t('cta.contact')}</Button>
                    <Button
                        href={process.env.REACT_APP_GITHUB_URL}
                        target="_blank"
                    >
                        {t('cta.github')}
                        <DiGithubBadge />
                    </Button>
                    <Button
                        href={process.env.REACT_APP_LINKEDIN_URL}
                        target="_blank"
                    >
                        {t('cta.linkedin')}
                        <BsLinkedin />
                    </Button>
                </div>
            </div>
            <ImgContainer
                src={HeroPic}
                alt={'open laptop and books on a table'}
                variant={'default'}
                width={'100%'}
                height={'800px'}
            />
        </section>
    );
}
