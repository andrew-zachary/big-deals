import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import BDFormInput from '../components/form/input.jsx';

import { apiStartCall } from '../store/actions.js';
import { resettingUserPassword } from '../store/end-points/user.js';

const ResetPassword = () => {
    const dispatch = useDispatch();
    const [btnTxt, setBtnTxt] = useState("reset password");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const params = useParams();
    const resettingPassword = () => {
        setPasswordError("");
        setConfirmPasswordError("");
        if(password.length === 0) {
            return setPasswordError("password is required");
        }
        if(confirmPassword.length === 0) {
            return setConfirmPasswordError("please confirm the password");
        }
        if(password !== confirmPassword) {
            return setConfirmPasswordError("confirm password doesn't match");
        }
        dispatch({type: apiStartCall.type, payload: resettingUserPassword({email: params.mail, date: params.date, token: params.token}, null, {newPassword: password})});
        setBtnTxt("continue");
    };
    return <div id="reset-password-page" className="h-full flex flex-col items-center justify-center">
        { 
            btnTxt !== 'continue' && <>
                <form action="#">
                    <BDFormInput id="password" name="password" type="password" label="password" htmlInput={true} htmlInputErr={passwordError} value={password} onChange={(e)=>setPassword(e.target.value)} onBlur={null} errors={null} touched={null} />
                    <BDFormInput id="confirm_password" name="confirm_password" type="password" label="confirm password" htmlInput={true} htmlInputErr={confirmPasswordError} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} onBlur={null} errors={null} touched={null} />
                </form>
                <button type='button' className='font-ssp font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize mt-8' onClick={()=>resettingPassword()}>{btnTxt}</button>
            </>
        }
        {
            btnTxt === 'continue' && <>
                <p className="px-4 text-4xl font-mont font-regular text-center capitalize">you can now use your new password to sign in</p>
                <Link type='button' className='font-ssp font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] capitalize mt-8' to="/shopping">{btnTxt}</Link>
            </>
        }
    </div>
}

ResetPassword.displayName = "Reset Password";

export default ResetPassword;