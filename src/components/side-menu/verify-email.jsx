import React from 'react';
import { FaExclamationTriangle, FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { apiStartCall } from '../../store/actions.js';
import { requestVerifyUserMail } from '../../store/end-points/user.js';

const VerifyEmail = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const {email} = useSelector(state => state.user.userInfo.authId);
    const requestMail = () => {
        dispatch({type: apiStartCall.type, payload: requestVerifyUserMail()});
    }
    return <div className="w-full flex justify-center text-4xl capitalize mt-10">
        {
            !email.verified && <div onClick={()=>requestMail()} className="cursor-pointer pb-2 flex border-b border-primary dark:border-primary-dark">
                <FaExclamationTriangle className="text-primary dark:text-white" />
                <h1 className="bd-unit bd-font-base">{t('verify_email.btns.verify_email')}</h1>
            </div>
        }
        {
            email.verified && <div className="pb-2 flex">
                <FaCheck className="text-primary dark:text-white" />
                <h1 className="bd-unit bd-font-base">{t('verify_email.btns.email_verified')}</h1>
            </div>
        }
    </div>
};

VerifyEmail.displayName = 'verify email';

export default VerifyEmail;