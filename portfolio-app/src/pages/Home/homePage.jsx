import React from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../../components/LanguageSwitch/LanguageSwitch";

function HomePage() {
    // Set up language translations
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <h2>{t('home')}</h2>
        </div>
    )
};

export default HomePage;