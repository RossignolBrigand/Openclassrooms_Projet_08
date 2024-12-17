
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { SlNote } from "react-icons/sl";
import ContactForm from '../../components/ContactForm/ContactForm';
import Button from '../../components/Button/Button';

import './_contactSection.scss';

//-----------------------------------------

export default function ContactSection() {

    const [isButtonClicked, setButtonClicked] = useState(false);

    const { t } = useTranslation('contactSection')

    const copyToClipboard = () => {
        const copyText = 'thomas.pineau.webdev@protonmail.com'
        navigator.clipboard.writeText(copyText);
        setButtonClicked(true);
        setTimeout(() => setButtonClicked(false), 2000);
    }

    return (
        <section className='contact-section' id='contact-section' >
            <h2 className='contact-section__title' >{t('title')}</h2>
            <div>
                <h3>{t('mailBark')}</h3>
                <Button
                    onClick={copyToClipboard}
                >
                    {"thomas.pineau.webdev@protonmail.com"}
                    <SlNote />
                </Button>
                {isButtonClicked ? <span>{t('clipboard')}</span> : null}
            </div>
            <h3>{t('formBark')}</h3>
            <ContactForm />
        </section>
    )
};