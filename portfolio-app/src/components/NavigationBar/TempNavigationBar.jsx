import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavigationBar() {

    const { t } = useTranslation();

    return (
        <nav>
            <NavLink
                to="/home"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                {t('navBar.home')}
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                {t('navBar.about')}
            </NavLink>
            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                {t('navBar.blog')}
            </NavLink>
        </nav>
    );
};

export default NavigationBar;
