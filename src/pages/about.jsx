import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation();
    return <section id="about-page" className="d-flex justify-content-center align-items-center p-3">
        <about-page_box>
            <h1 className="text-capitalize">{t(`about.title`)}</h1>
            <h2 className="text-capitalize mt-3">{t(`about.sup-title`)}</h2>
        </about-page_box>
    </section>
};

export default AboutPage;