import React from "react";
import { useTranslation } from 'react-i18next';

import './_section.scss'

const SectionProps = {

}

export default function Section({ children, className, sectionId, label, translation }) {

    const { t } = useTranslation({ translation })

    return (
        <section className={className} id={sectionId}>
            <h2>{label}</h2>
            {children}
        </section>
    )
};