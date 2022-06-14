import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { userPrefsUpdated } from '../../store/slices/user.js';

const LangToggler = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const { lang, mode } = useSelector(state=>state.user.userInfo.appPreferences);
    const toggleLang = (currentLang) => {
        const toggleTo = currentLang === 'en'?'ar':'en';
        dispatch({type: userPrefsUpdated.type, payload: {data: {lang: toggleTo, mode}}});
    };
    return <div onClick={()=>toggleLang(lang)} id='lang-toggler' className='cursor-pointer'>{t('base.target')}</div>
};

LangToggler.displayName = 'language toggler';

export default LangToggler;