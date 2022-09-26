import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { apiStartCall } from '../store/actions.js';
import { verifyUserMail } from '../store/end-points/user.js';

const MailVerify = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const {verified} = useSelector(state=>state.user.userInfo.authId.email);
    const {t} = useTranslation();
    useEffect(()=>{
        dispatch({type: apiStartCall.type, payload: verifyUserMail(params, null, null)});
    }, []);
    return <div id="verify-mail-page" className="h-full flex flex-col items-center justify-center">
        <h1 className='bd-font-compo p-2 leading-tight text-5xl capitalize font-regular text-center'>{verified?t('verify_email.success'):t('verify_email.fail')}</h1>
        <Link className='bd-font-compo font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize mt-8' to="/shopping" path="shopping">{t('verify_email.btns.continue')}</Link>
    </div>
};

MailVerify.displayName = 'mail verify page';

export default MailVerify;