import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as StaticIcon } from '../../assets/icons/undraw_static.svg';
import { ReactComponent as CreationIcon } from '../../assets/icons/undraw_creation.svg';
import { ReactComponent as BrowsingIcon } from '../../assets/icons/undraw_web.svg';
import './_servicesSection.scss';

//-----------------------------------------------------------------

export default function ServicesSection() {
    const { t } = useTranslation('serviceSection');

    return (
        <section className="services-section" id="services-section">
            <h2>{t('title')}</h2>
            <div className="services-wrapper">
                <div className="services-container">
                    <StaticIcon className="services-icon" />
                    <h3>{t('subtitles.fullstack')}</h3>
                    <ul>
                        <li>{t('Fullstack.1')}</li>
                        <li>{t('Fullstack.2')}</li>
                        <li>{t('Fullstack.3')}</li>
                    </ul>
                </div>
                <div className="services-container">
                    <CreationIcon className="services-icon" />
                    <h3>{t('subtitles.static-pages')}</h3>
                    <ul>
                        <li>{t('WebDev.1')}</li>
                        <li>{t('WebDev.2')}</li>
                        <li>{t('WebDev.3')}</li>
                        <li>{t('WebDev.4')}</li>
                    </ul>
                </div>
                <div className="services-container">
                    <BrowsingIcon className="services-icon" />
                    <h3>{t('subtitles.SEO')}</h3>
                    <ul>
                        <li>{t('SEOList.1')}</li>
                        <li>{t('SEOList.2')}</li>
                        <li>{t('SEOList.3')}</li>
                        <li>{t('SEOList.4')}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
