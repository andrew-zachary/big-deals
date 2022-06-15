import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import SimpleBar from 'simplebar-react';
import { useTranslation } from 'react-i18next';

import BDFormInput from '../components/form/input.jsx';
import AvatarManager from '../components/form/avatar-manager.jsx';

import { apiStartCall } from '../store/actions.js';
import { register } from '../store/end-points/user.js';
import RegisterSchema from '../validations/register-schema.js';

const RegisterForm = ({setCurrentPage}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {avatar} = useSelector(state=>state.user.userInfo.authId);
    const registerForm = useFormik({
        validateOnBlur: true,
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validate:(values) => {
            let errors = {};
            const result = RegisterSchema.validate(values,{abortEarly: false});
            if(result.error) {
                result.error.details.forEach(errorItem => {
                    errors[errorItem.context.label] = errorItem.message;
                });
            }
            return errors;
        },
        onSubmit: values => {
            let registerData = {};
            if(avatar.includes('base64')) {
                registerData = { avatar, ...values }; 
            } else {
                registerData = { ...values };
            }
            dispatch({type: apiStartCall.type, payload: register(null, null, registerData)});
        },
    });
    return <SimpleBar>
        <form onSubmit={registerForm.handleSubmit} className='px-8'>
            <AvatarManager avatar={avatar} />
            <BDFormInput id="firstName" name="firstName" type="text" label={t('register.f_name.label')} value={registerForm.values.firstName} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} errors={registerForm.errors} touched={registerForm.touched} />
            <BDFormInput id="lastName" name="lastName" type="text" label={t('register.l_name.label')} value={registerForm.values.lastName} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} errors={registerForm.errors} touched={registerForm.touched} />
            <BDFormInput id="email" name="email" type="text" label={t('register.email.label')} value={registerForm.values.email} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} errors={registerForm.errors} touched={registerForm.touched} />
            <BDFormInput id="password" name="password" type="password" label={t('register.password.label')} value={registerForm.values.password} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} errors={registerForm.errors} touched={registerForm.touched} />
            <BDFormInput id="password_confirm" name="passwordConfirm" type="password" label={t('register.password_confirm.label')} value={registerForm.values.passwordConfirm} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} errors={registerForm.errors} touched={registerForm.touched} />
            <button type='submit' className='font-ssp font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] uppercase w-full' disabled={!registerForm.isValid}>{t('register.submit_btn')}</button>
        </form>
        <button className='font-ssp font-regular text-4xl mb-12 mt-14' onClick={()=>setCurrentPage('user')}>{t('register.have_account')}</button>
    </SimpleBar>
};

export default RegisterForm;