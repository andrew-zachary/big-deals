import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HomePage = () => {
  const {t} = useTranslation();
  return (
    <div id="home-page" className="text-center">
      <h1 className="text-capitalize mb-3">{t('home.title.top')}</h1>
      <h3>{t('home.title.mid')}</h3>
      <Link to="/products" className="bd-btn bd-primary-btn mt-3">{t('home.check_new_deals_btn')}</Link>
    </div>
  );
};

export default HomePage;