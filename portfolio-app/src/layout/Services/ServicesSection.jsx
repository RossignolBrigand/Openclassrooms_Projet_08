import React from "react";
import { useTranslation } from "react-i18next";

import './_servicesSection.scss';

//-----------------------------------------------------------------

export default function ServicesSection() {

    const { t } = useTranslation('serviceSection')

    return (
        <section className="services-section" id='services-section'>
            <h2>{t('title')}</h2>
            <div className="services-wrapper">
                <div className="services-container">
                    <h3>SEO / Optimisations référencement / Audits accessibilité</h3>
                </div>
                <div className="services-container">
                    <h3>Création de sites web statiques ou d'applications web</h3>
                </div>
                <div className="services-container">
                    <h3>Trouver autre chose ou mieux arranger le truc</h3>
                </div>


            </div>
        </section>
    )
};
