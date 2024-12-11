import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitch/LanguageSwitch";
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import './_header.scss'

export default function Header() {

    // Localisation
    const { t } = useTranslation('header');

    return (
        <header className={`header`}>
            <div className="header-title">
                <a
                    href="/Portfolio/home">
                    <h1>Thomas PINEAU - Portfolio</h1>
                </a>
            </div>
            <div className="header-content">
                <NavigationBar />
                <LanguageSwitcher />
            </div>
        </header>
    )
};