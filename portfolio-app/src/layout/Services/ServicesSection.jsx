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
                    <h3>SEO / Optimisations/ Audits</h3>
                    <ul>
                        <li>Réalisation d'audits performances et accessibilité</li>
                        <li>Optimisation des performances du chargment de votre site (Gestion des images et optimisation des scripts)</li>
                        <li>Optimisation de votre SEO et référencement local (Métadonnées et OpenGraph)</li>
                        <li>Optimisation de l'accessibilité de votre site (HTML sémantique / ARIA)</li>
                    </ul>
                </div>
                <div className="services-container">
                    <h3>Création de sites web statiques ou d'applications web</h3>
                    <ul>
                        <li>Création de sites statiques en HTML/ CSS garantis responsive.</li>
                        <li>Création d'applications web personnalisées selon vos besoins.</li>
                        <li>Création de sites à partir de CMS comme Wordpress.</li>
                        <li>Gestion de l'hébergement et de la sécurité.</li>
                    </ul>
                </div>
                <div className="services-container">
                    <h3>Création de systèmes fullstack</h3>
                    <ul>
                        <li>Gestion de projet depuis le frontend jusqu'au maintien de la base de données.</li>
                        <li>Construction de stacks MERN (MongoDb, Express, React, Node.js).</li>
                        <li>Gestion de la sécurité en suivant les recommendations de l'OWASP10.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
};
