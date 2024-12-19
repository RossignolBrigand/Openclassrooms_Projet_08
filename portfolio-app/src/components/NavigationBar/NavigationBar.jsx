import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

import './_navigationBar.scss';

//-----------------------------------------------------------

export default function NavigationBar({ headerHeight }) {
    const { t } = useTranslation('header');

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = -headerHeight - 20;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null,
            threshold: 0.40,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Update the active section based on observer id
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <nav>
            <HashLink
                smooth
                to="#skills-section"
                className={
                    activeSection === 'skills-section'
                        ? 'navlink active'
                        : 'navlink'
                }
                aria-current={
                    activeSection === 'skills-section' ? 'true' : undefined
                }
                scroll={(el) => scrollWithOffset(el)}
            >
                {t('navigation.skills')}
            </HashLink>
            <HashLink
                smooth
                to="#services-section"
                className={
                    activeSection === 'services-section'
                        ? ' navlink active'
                        : 'navlink'
                }
                aria-current={
                    activeSection === 'services-section' ? 'true' : undefined
                }
                scroll={(el) => scrollWithOffset(el)}
            >
                {t('navigation.services')}
            </HashLink>
            <HashLink
                smooth
                to="#projects-section"
                className={
                    activeSection === 'projects-section'
                        ? 'navlink active'
                        : 'navlink'
                }
                aria-current={
                    activeSection === 'projects-section' ? 'true' : undefined
                }
                scroll={(el) => scrollWithOffset(el)}
            >
                {t('navigation.projects')}
            </HashLink>
            <HashLink
                smooth
                to="#contact-section"
                className={
                    activeSection === 'contact-section'
                        ? 'navlink active'
                        : 'navlink'
                }
                aria-current={
                    activeSection === 'contact-section' ? 'true' : undefined
                }
                scroll={(el) => scrollWithOffset(el)}
            >
                {t('navigation.contact')}
            </HashLink>
        </nav>
    );
}
