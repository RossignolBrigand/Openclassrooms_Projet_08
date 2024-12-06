import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

import './_navigationBar.scss';

function NavigationBar() {

    const { t } = useTranslation('header');

    return (
        <nav>
            <HashLink
                smooth to="#skills-section"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                {t('navigation.skills')}
            </HashLink>
            <HashLink
                smooth to="#services-section"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                {t('navigation.services')}
            </HashLink>
            <HashLink
                smooth to="#projects-section"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                {t('navigation.projects')}
            </HashLink>
            <HashLink
                smooth to="#contact-section"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                {t('navigation.contact')}
            </HashLink>
        </nav>
    );
};

export default NavigationBar;
