import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import BDFormInput from '../components/form/input.jsx';

import { apiStartCall } from '../store/actions.js';
import { login } from '../store/end-points/user.js';
import LoginSchema from '../validations/login-schema.js';

const LoginForm = ({setCurrentPage}) => {
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
            dispatch({type: apiStartCall.type, payload: login(null, null, null, values)});
        },
    });
    return <>
        <form onSubmit={loginForm.handleSubmit}>
            <BDFormInput id="email" name="email" type="text" label="email" value={loginForm.values.email} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} errors={loginForm.errors} touched={loginForm.touched} />
            <BDFormInput id="password" name="password" type="password" label="password" value={loginForm.values.password} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} errors={loginForm.errors} touched={loginForm.touched} />
            <button type='submit' className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] uppercase w-full' disabled={!loginForm.isValid}>sign in</button>
        </form>
        <button className='font-ssp font-regular text-4xl capitalize mb-12 mt-14' onClick={()=>setCurrentPage('register')}>sign up&nbsp;</button>
        <button className='font-ssp font-regular text-4xl capitalize mb-12 mt-14' onClick={()=>setCurrentPage('password')}>/&nbsp;forgot password</button>
    </>
};

export default LoginForm;