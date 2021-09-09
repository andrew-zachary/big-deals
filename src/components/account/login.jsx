import React, {useEffect} from 'react';
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

import { login } from "../../store/config/user";
import { apiCallStarted } from "../../store/actions/API.js";
import { currentErrorEnded } from "../../store/slices/app";
import UserValidation from "../../store/validators/user";

const Login = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const errorState = useSelector((state) => state.app.currentError);
    useEffect(()=>{
        if(errorState.receivedError) {
            dispatch({type:currentErrorEnded.type});
        }
    }, []);
    return (
        <div id="login-box" className="bd-white-box p-4">
            <h1 className="text-capitalize">{t('account.sing_in.title')}</h1>
            <h2 className="mt-3">{t('account.sing_in.dont_have_account')} - <Link to="/account/register" className="text-decoration-none"><span role="button" className="text-capitalize">{t('account.sing_in.sing_up')}</span></Link></h2>
            {
                errorState.receivedError && <div id="error-box" className="pt-3 pb-3 mt-3">
                    <p className="text-center text-capitalize d-flex flex-column w-100">
                        <i className="fas fa-exclamation-triangle"></i>
                        <span className="mt-3">{errorState.message}</span>
                    </p>
                </div>
            }
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validate={(values) => {
                    const errors = {};
                    const validationResult = UserValidation.tailor("login").validate(
                        values,{
                            abortEarly: false,
                        }
                    );
                    if (validationResult.error) {
                        validationResult.error.details.forEach((detail) => {
                        errors[detail.context.label] = detail.message;
                        });
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    dispatch({
                        type: apiCallStarted.type,
                        payload: login({ email: values.email, password: values.password }),
                    });
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <form className="pt-3" onSubmit={handleSubmit}>
                        <div className="form-group bd-form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="loginFormEmail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label htmlFor="loginFormEmail">{t('account.sing_in.form.email.label')}</label>
                            {errors.email && touched.email && (
                                <div className="invalid-feedback">{t(`account.sing_in.form.email.error.${errors.email}`)}</div>
                            )}
                        </div>
                        <div className="form-group bd-form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="loginFormPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label htmlFor="loginFormPassword">{t('account.sing_in.form.password.label')}</label>
                            {errors.password && touched.password && (
                                <div className="invalid-feedback">{t(`account.sing_in.form.password.error.${errors.password}`)}</div>
                            )}
                        </div>
                        <div
                            id="form-footer"
                            className="d-flex justify-content-between pt-4">
                            <button type="submit" className="btn bd-btn bd-primary-btn mt-5 w-100">{t('account.sing_in.btn')}</button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Login;