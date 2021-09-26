import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const {t} = useTranslation();
    return <section id="about-page" className="bd-page-center">
        <div className="w-100 bd-page-center_box bd-max-width-1200 ps-3 pe-3">
            <h1 className="text-capitalize">{t(`about.title`)}</h1>
            <h2 className="text-capitalize mt-3">{t(`about.sup-title`)}</h2>
        </div>
    </section>
};

export default AboutPage;