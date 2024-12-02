import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitch/LanguageSwitch";
import NavigationBar from '../NavigationBar/NavigationBar';

import './_header.scss'

function Header() {

    const { t } = useTranslation('header');

    return (
        <header>
            <div>
                <h1>Portfolio</h1>
                <h2>{t('welcome')}</h2>
            </div>
            <NavigationBar />

            <LanguageSwitcher />
        </header>
    );
};

export default Header;