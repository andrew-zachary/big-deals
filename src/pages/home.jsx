import React from "react";
import {useTranslation} from "react-i18next";

const HomePage = () => {
  const {t} = useTranslation();
  return (
    <div id="home-page" className="text-center">
      <h1 className="text-capitalize">{t('home.title.top')}</h1>
      <h3>{t('home.title.mid')}</h3>
    </div>
  );
};

export default HomePage;