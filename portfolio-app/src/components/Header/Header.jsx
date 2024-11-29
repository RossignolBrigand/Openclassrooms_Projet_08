import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitch/LanguageSwitch";
import NavigationBar from '../NavigationBar/NavigationBar';

import './_header.scss'

function Header() {

    const { t } = useTranslation();

    return (
        <header>
            <h1>Rossignol Brigand</h1>
            <h2>{t('welcome')}</h2>
            <NavigationBar />
            <LanguageSwitcher />
            <button>Test</button>
        </header>
    );
};

export default Header;