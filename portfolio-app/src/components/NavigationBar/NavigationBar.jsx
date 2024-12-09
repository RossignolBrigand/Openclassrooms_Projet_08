import React from "react";
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

import './_navigationBar.scss';

//-----------------------------------------------------------

export default function NavigationBar() {

    const { t } = useTranslation('header');

    return (
        <nav>
            <HashLink
                smooth to="#skills-section"
                className="navLink--anchored">
                {t('navigation.skills')}
            </HashLink>
            <HashLink
                smooth to="#services-section"
                className="navLink--anchored"
            >
                {t('navigation.services')}
            </HashLink>
            <HashLink
                smooth to="#projects-section"
                className="navLink--anchored"
            >
                {t('navigation.projects')}
            </HashLink>
            <HashLink
                smooth to="#contact-section"
                className="navLink--anchored"
            >
                {t('navigation.contact')}
            </HashLink>
        </nav>
    );
};
