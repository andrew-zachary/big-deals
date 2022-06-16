import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import BDFormInput from '../components/form/input.jsx';

import { apiStartCall } from '../store/actions.js';
import { login } from '../store/end-points/user.js';
import LoginSchema from '../validations/login-schema.js';

const LoginForm = ({setCurrentPage}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useFormik({
        validateOnBlur: true,
        initialValues: {
            email: '',
            password: '',
        },
        validate:(values) => {
            let errors = {};
            const result = LoginSchema.validate(values,{abortEarly: false});
            if(result.error) {
                result.error.details.forEach(errorItem => {
                    errors[errorItem.context.label] = errorItem.message;
                });
            }
            return errors;
        },
        onSubmit: values => {
            dispatch({type: apiStartCall.type, payload: login(null, null, values)});
        },
    });
    return <div id='login-form' className='grid content-center px-8'>
        <form onSubmit={loginForm.handleSubmit}>
            <BDFormInput id="email" name="email" type="text" label="login.email.label" value={loginForm.values.email} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} errors={loginForm.errors} touched={loginForm.touched} />
            <BDFormInput id="password" name="password" type="password" label="login.password.label" value={loginForm.values.password} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} errors={loginForm.errors} touched={loginForm.touched} />
            <button type='submit' className='bd-font-compo font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] uppercase w-full' disabled={!loginForm.isValid}>{t('login.submit_btn')}</button>
        </form>
        <div id="login-form-options" className='bd-font-base'>
            <button className='font-regular text-4xl capitalize mb-12 mt-14' onClick={()=>setCurrentPage('register')}>{t('login.sign_up_btn')}</button>
            <span className='text-4xl px-2'>/</span>
            <button className='font-regular text-4xl capitalize mb-12 mt-14' onClick={()=>setCurrentPage('password')}>{t('login.forgot_password_btn')}</button>
        </div>
    </div>
};

export default LoginForm;