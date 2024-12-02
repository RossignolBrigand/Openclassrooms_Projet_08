import React from "react";
import { useTranslation } from 'react-i18next';

import './_homePage.scss'

function HomePage() {
    // Set up language translations
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <h1>HOME PAGE</h1>
            <h2>{t('home')}</h2>
        </div>
    )
};

export default HomePage;