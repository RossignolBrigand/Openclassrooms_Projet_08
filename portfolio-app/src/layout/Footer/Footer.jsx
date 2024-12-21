import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../components/LanguageSwitch/LanguageSwitch';

import './_footer.scss';

export default function Footer() {
    const { t } = useTranslation('footer');

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-links">
                        <a href="#hero-section">{t('links.about')}</a>
                        <a href="#projects-section">{t('links.projects')}</a>
                        <a href="#contact-section">{t('links.contact')}</a>
                    </div>
                    <div className="footer-socials">
                        <a
                            href={process.env.REACT_APP_LINKEDIN_URL}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={process.env.REACT_APP_GITHUB_URL}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            GitHub
                        </a>
                    </div>
                    <div className="footer-params">
                        <LanguageSwitcher />
                    </div>
                </div>
                <div className="footer-cta">
                    <p>{t('cta.question')}</p>
                    <a href="#contact-section">{t('cta.btn')}</a>
                </div>
                <div className="footer-bottom">
                    <p>{t('build')}</p>
                    <p>{t('copyright')}</p>
                </div>
            </div>
        </footer>
    );
}
