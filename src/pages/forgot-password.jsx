import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import BDFormInput from '../components/form/input.jsx';

import { apiStartCall } from '../store/actions.js';
import { requestPasswordRestMail } from '../store/end-points/user.js';

const ForgotPassword = () => {
    const {t} = useTranslation();
    const [btnTxt, setBtnTxt] = useState("forgot_password.submit_btn");
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(null);
    const dispatch = useDispatch();
    const sendHandler = (input) => {
        setEmailErr(null);
        if(input.length === 0) {
            return setEmailErr('forgot_password.email.errors.required')
        }
        if(!input.toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            return setEmailErr('forgot_password.email.errors.email_not_valid');
        }
        dispatch({type: apiStartCall.type, payload: requestPasswordRestMail(null, null, {email: input})});
        setBtnTxt("forgot_password.email_was_sent");
    };
    return <div id="forgot-password" className='mt-[-9rem] h-full flex flex-col justify-center'>
        <div className='flex flex-col px-8'>
            <form action='#'>
                <BDFormInput id="email" name="email" type="email" label="forgot_password.email.label" htmlInput={true} htmlInputErr={emailErr} value={email} onChange={(e)=>setEmail(e.target.value)} onBlur={null} errors={null} touched={null} />
            </form>
            {
                btnTxt !== "forgot_password.submit_btn" && <p className="text-4xl font-mont font-regular px-4 capitalize">
                    {t(btnTxt)}
                </p>
            }
            {
                btnTxt === "forgot_password.submit_btn" && <div id="reset-ctrls" className='flex justify-between'>
                    <button className='font-ssp font-regular text-3xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize w-full' onClick={()=>sendHandler(email)}>{t(btnTxt)}</button>
                </div>
            }
        </div>
    </div>
};

ForgotPassword.displayName = 'forgot password';

export default ForgotPassword;