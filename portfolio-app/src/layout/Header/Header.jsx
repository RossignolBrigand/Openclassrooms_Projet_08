import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitch/LanguageSwitch";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

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