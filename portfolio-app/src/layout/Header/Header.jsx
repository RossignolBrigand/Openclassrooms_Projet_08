import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitch/LanguageSwitch";
import NavigationBar from '../../components/NavigationBar/NavigationBar';

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