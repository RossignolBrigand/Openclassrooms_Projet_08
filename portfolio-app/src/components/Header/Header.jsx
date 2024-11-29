import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitch/LanguageSwitch";
import NavigationBar from '../NavigationBar/NavigationBar';

import './_header.scss'

function Header() {

    const { t } = useTranslation();

    return (
        <header>
            <div>
                <h1>Rossignol Brigand</h1>
                <h2>{t('welcome')}</h2>
            </div>
            <NavigationBar />

            <LanguageSwitcher />
        </header>
    );
};

export default Header;