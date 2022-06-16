import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import BDFormInput from '../components/form/input.jsx';

import changePasswordSchema from '../validations/change-password-schema.js';
import { apiStartCall } from '../store/actions.js';
import { changePassword } from '../store/end-points/user';

const ChangePasswordForm = () => {
    const dispatch = useDispatch();
    const form = useFormik({
        validateOnBlur: true,
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        },
        validate:(values) => {
            let errors = {};
            const result = changePasswordSchema.validate(values,{abortEarly: false});
            if(result.error) {
                result.error.details.forEach(errorItem => {
                    errors[errorItem.context.label] = errorItem.message;
                });
            }
            return errors;
        },
        onSubmit: values => {
            dispatch({type: apiStartCall.type, payload: changePassword(null, null, {oldPassword:values.oldPassword, newPassword:values.newPassword})});
        },
    });
    return <section id='change-password' className='p-4 w-full max-w-screen-sm mx-auto'>
        <h1 className='text-5xl capitalize'>change password</h1>
        <form onSubmit={form.handleSubmit} action="#">
            <BDFormInput id="oldPassword" name="oldPassword" type="password" label="old password" value={form.values.oldPassword} onChange={form.handleChange} onBlur={form.handleBlur} errors={form.errors} touched={form.touched} />
            <BDFormInput id="newPassword" name="newPassword" type="password" label="new Password" value={form.values.newPassword} onChange={form.handleChange} onBlur={form.handleBlur} errors={form.errors} touched={form.touched} />
            <BDFormInput id="confirmNewPassword" name="confirmNewPassword" type="password" label="confirm new password" value={form.values.confirmNewPassword} onChange={form.handleChange} onBlur={form.handleBlur} errors={form.errors} touched={form.touched} />
            <button type='submit' className='font-regular text-4xl bg-primary dark:bg-primary-dark shadow-secondary text-white px-8 py-4 rounded-[0.4rem] uppercase w-full' disabled={!form.isValid}>change password</button>
        </form>
    </section>
};

ChangePasswordForm.displayName = "change password form";

export default ChangePasswordForm;