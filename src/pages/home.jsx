import React from "react";
import {useTranslation} from "react-i18next";

const HomePage = () => {
  const {t} = useTranslation();
  return (
    <section id="home-page" className="text-center bd-page-center">
      <div className="w-100 bd-page-center_box">
        <h1 className="text-capitalize">{t('home.title.top')}</h1>
        <h3>{t('home.title.mid')}</h3>
      </div>
    </section>
  );
};

export default HomePage;