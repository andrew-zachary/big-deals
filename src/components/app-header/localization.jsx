import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {localizationChanged} from '../../store/slices/app';
import {resetAllProducts} from '../../store/slices/products';

const Localization = () => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const changeDirLang = () => {
        dispatch({type: resetAllProducts.type});
        const dir = document.documentElement.getAttribute('dir');
        if(dir==='rtl') {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
            dispatch({type: localizationChanged.type, payload:{lang:"en"}});
            i18n.changeLanguage('en');
        } else {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
            dispatch({type: localizationChanged.type, payload:{lang:"ar"}});
            i18n.changeLanguage('ar');
        }
    }
    return <li key="locals" onClick={()=>{changeDirLang()}}>
        <Link id="localization" className="text-capitalize text-decoration-none" to={"/"}>{t('nav.lang_btn')}</Link>
    </li>
};

export default Localization;