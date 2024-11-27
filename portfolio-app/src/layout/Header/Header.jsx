import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitch/LanguageSwitch";

function Header() {

    const { t } = useTranslation();

    return (
        <header>
            <h1>Rossignol Brigand</h1>
            <h2>{t('welcome')}</h2>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
            </nav>
            <LanguageSwitcher />
            <button>Test</button>
        </header>
    );
};

export default Header;