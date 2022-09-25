import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import BDFormInput from '../components/form/input.jsx';

import { apiStartCall } from '../store/actions.js';
import { resettingUserPassword } from '../store/end-points/user.js';

import { userLangPrefsUpdated } from '../store/slices/user.js';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const {t} = useTranslation();
    useEffect(()=> {
        dispatch(userLangPrefsUpdated(params.lang));
    }, []);
    const [btnTxt, setBtnTxt] = useState('reset_password.btns.reset_password');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const resettingPassword = () => {
        setPasswordError("");
        setConfirmPasswordError("");
        if(password.length === 0) {
            return setPasswordError(t('reset_password.password.errors.required'));
        }
        if(confirmPassword.length === 0) {
            return setConfirmPasswordError(t('reset_password.confirm_password.errors.required'));
        }
        if(password !== confirmPassword) {
            return setConfirmPasswordError(t('reset_password.confirm_password.errors.no_match'));
        }
        dispatch({type: apiStartCall.type, payload: resettingUserPassword({email: params.mail, date: params.date, token: params.token}, null, {newPassword: password})});
        setBtnTxt('reset_password.btns.continue');
    };
    return <div id="reset-password-page" className="h-full flex flex-col items-center justify-center">
        { 
            btnTxt !== 'reset_password.btns.continue' && <>
                <form action="#">
                    <BDFormInput id="password" name="password" type="password" label="reset_password.password.label" htmlInput={true} htmlInputErr={passwordError} value={password} onChange={(e)=>setPassword(e.target.value)} onBlur={null} errors={null} touched={null} />
                    <BDFormInput id="confirm_password" name="confirm_password" type="password" label="reset_password.confirm_password.label" htmlInput={true} htmlInputErr={confirmPasswordError} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} onBlur={null} errors={null} touched={null} />
                </form>
                <button type='button' className='bd-font-compo font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize mt-8' onClick={()=>resettingPassword()}>{t(btnTxt)}</button>
            </>
        }
        {
            btnTxt === 'reset_password.btns.continue' && <>
                <p className="bd-font-base px-4 text-4xl font-regular text-center capitalize">{t('reset_password.msg')}</p>
                <Link type='button' className='bd-font-compo font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize mt-8' to="/shopping">{t(btnTxt)}</Link>
            </>
        }
    </div>
}

ResetPassword.displayName = "Reset Password";

export default ResetPassword;