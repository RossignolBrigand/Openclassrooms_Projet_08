import React from 'react';
import { useTranslation } from 'react-i18next';

import './languageSwitch.scss';

const LanguageSwitcher = () => {

    const { i18n } = useTranslation();

    return (
        <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
            <option value="en">English</option>
            <option value="fr">Français</option>
        </select>
    );
};

export default LanguageSwitcher;