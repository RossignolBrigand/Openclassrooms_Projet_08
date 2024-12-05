import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitch/LanguageSwitch";
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import './_header.scss'

export default function Header() {

    // Localisation
    const { t } = useTranslation('header');


    // Navbar movement gimmick
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? "vertical" : ""}`}>
            <div className="header-title">
                <h1>Rossignol Brigand - Portfolio</h1>
                <h2>{t('welcome')}</h2>
            </div>
            <div className="header-content">
                <NavigationBar />
                <LanguageSwitcher />
            </div>
        </header>
    )
};