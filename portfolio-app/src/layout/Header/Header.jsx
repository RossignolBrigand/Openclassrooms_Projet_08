import { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from '../../components/LanguageSwitch/LanguageSwitch';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

import './_header.scss';

export default function Header() {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState('');

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, []);

    return (
        <header className={`header`} ref={headerRef}>
            <div className="header-title">
                <a href=".">
                    <h1>Thomas PINEAU</h1>
                </a>
            </div>
            <div className="header-content">
                <NavigationBar headerHeight={headerHeight} />
                <LanguageSwitcher />
            </div>
        </header>
    );
}
