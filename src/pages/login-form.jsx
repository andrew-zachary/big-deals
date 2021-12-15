import React from 'react';
import { useFormik } from 'formik';
import BDFormInput from '../components/form/input.jsx';
import LoginSchema from '../validations/login-schema.js';

const LoginForm = ({setCurrentForm}) => {
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
            alert(JSON.stringify(values, null, 2));
        },
    });
    return <>
        <div id="img-frame" className='inline-block rounded-full overflow-hidden border shadow-secondary border-primary'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvvbFRDiGafT0jv4FFSmirNyaLuQ_obm_P8JMel822HZeVWimCbRf8rh71cc&s" className='max-w-[11.5rem]' alt="" />
        </div>
        <form action="#" onSubmit={loginForm.handleSubmit}>
            <BDFormInput id="email" name="email" type="text" label="email" value={loginForm.values.email} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} errors={loginForm.errors} touched={loginForm.touched} />
            <BDFormInput id="password" name="password" type="password" label="password" value={loginForm.values.password} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} errors={loginForm.errors} touched={loginForm.touched} />
            <button type='submit' className='font-ssp font-regular text-4xl bg-primary shadow-secondary text-white px-8 py-4 rounded-[0.4rem] uppercase w-full' disabled={!loginForm.isValid}>sign in</button>
            <button className='font-ssp font-regular text-4xl capitalize mb-12 mt-14' onClick={()=>setCurrentForm('register')}>sign up&nbsp;</button>
            <button className='font-ssp font-regular text-4xl capitalize mb-12 mt-14' onClick={()=>setCurrentForm('forgot-password')}>/&nbsp;forgot password</button>
        </form>
    </>
};

export default LoginForm;