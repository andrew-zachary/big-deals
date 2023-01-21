import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { resetDealsSearch } from '../../store/slices/deal.js';
import { resetProductsSearch } from '../../store/slices/product.js';

const AppPrefs = () => {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
    const { mode, lang } = useSelector(state=>state.user.userInfo.appPreferences);
    const htmlEle = document.querySelector('html');
    useEffect(()=> {
        i18n.changeLanguage(lang);
        htmlEle.setAttribute('dir', lang === 'en'?'ltr':'rtl');
        dispatch({type: resetDealsSearch.type});
        dispatch({type: resetProductsSearch.type});
    }, [lang]);
    useEffect(()=> {
        if(mode === 'dark') {
            htmlEle.classList.add('dark');
        } else if(mode === 'light') {
            htmlEle.classList.remove('dark');
        }
    }, [mode]);
    return <></>
};

AppPrefs.displayName = 'app prefs';

export default AppPrefs;