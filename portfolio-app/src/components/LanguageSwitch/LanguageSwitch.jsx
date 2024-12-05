import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { languages } from '../../utils/i18nConfig';

import './languageSwitch.scss';

const LanguageSwitcher = () => {

    const { i18n } = useTranslation();
    const navigate = useNavigate();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('preferredLanguage');
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage); // Load saved language
        }
    }, [i18n]);

    return (
        <select
            className='translation-button'
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
        >
            {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}

        </select>
    );
};

export default LanguageSwitcher;