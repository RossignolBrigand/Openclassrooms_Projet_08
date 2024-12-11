
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { SlNote } from "react-icons/sl";
import ContactForm from '../../components/ContactForm/ContactForm';
import Button from '../../components/Button/Button';

import './_contactSection.scss';
import { use } from 'react';


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
            <h2 className='contact-section__title' >CONTACT</h2>
            <div>
                <p> Voilà mon mail ! </p>
                <Button
                    onClick={copyToClipboard}
                >
                    {"thomas.pineau.webdev@protonmail.com"}
                    <SlNote />
                </Button>
                {isButtonClicked ? <span>Copié dans le presse-papier !</span> : null}
            </div>
            <p> Où si vous préférez un formulaire ! </p>
            <ContactForm />
        </section>
    )
};