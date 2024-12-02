import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import './_navigationBar.scss';

function NavigationBar() {

    const { t } = useTranslation('header');

    return (
        <nav>
            <NavLink
                to="/home"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                {t('navigation.home')}
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                {t('navigation.about')}
            </NavLink>
            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                {t('navigation.blog')}
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                {t('navigation.contact')}
            </NavLink>
        </nav>
    );
};

export default NavigationBar;
