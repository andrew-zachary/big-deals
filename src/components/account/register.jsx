import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { register } from "../../store/config/user";
import { apiCallStarted } from "../../store/actions/API.js";

import UserValidation from "../../store/validators/user";

import RegisterInterestsList from "./register-interests-list.jsx";

export default () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const errorState = useSelector((state) => state.app.currentError);
  return (
    <div id="register-box" className="bd-white-box p-4 mt-6">
        <h1 className="text-capitalize">{t('account.sign_up.title')}</h1>
        <div
            id="error-box"
            style={{ display: errorState.receivedError ? "block" : "none" }}>
            <p className="text-center text-capitalize d-flex flex-column w-100">
            <i className="fas fa-exclamation-triangle"></i>
            <span className="mt-3">{errorState.err}</span>
            </p>
        </div>
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                confirm_password: "",
                role: "",
                interests: [],
            }}
            validate={(values) => {
                const errors = {};
                const validationResult = UserValidation.tailor("register").validate( values, {
                    abortEarly: false,
                });
                if (validationResult.error) {
                    validationResult.error.details.forEach((detail) => {
                        errors[detail.context.label] = detail.message;
                    });
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                dispatch({ type: apiCallStarted.type,
                    payload: register({
                        name: values.name,
                        email: values.email,
                        password: values.password,
                        role: values.role,
                    })
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
                                type="text"
                                className="form-control"
                                name="name"
                                id="registerFormName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label htmlFor="registerFormName" className="text-capitalize">{t('account.sign_up.form.name.label')}</label>
                            {errors.name && touched.name && (
                                <div className="invalid-feedback">{t(`account.sign_up.form.name.error.${errors.name}`)}</div>
                            )}
                        </div>
                        <div className="form-group bd-form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="registerFormEmail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label htmlFor="registerFormEmail" className="text-capitalize">{t('account.sign_up.form.email.label')}</label>
                            {errors.email && touched.email && (
                                <div className="invalid-feedback">{t(`account.sign_up.form.email.error.${errors.email}`)}</div>
                            )}
                        </div>
                        <div className="form-group bd-form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                id="registerFormPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label htmlFor="registerFormPassword" className="text-capitalize">{t('account.sign_up.form.password.label')}</label>
                            {errors.password && touched.password && (
                                <div className="invalid-feedback">{t(`account.sign_up.form.password.error.${errors.password}`)}</div>
                            )}
                        </div>
                        <div className="form-group bd-form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="confirm_password"
                                id="registerFormConfirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirm_password}
                            />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label htmlFor="registerFormConfirmPassword" className="text-capitalize">{t('account.sign_up.form.confirm_password.label')}</label>
                            {errors.confirm_password && touched.confirm_password && (
                                <div className="invalid-feedback">
                                    {t(`account.sign_up.form.confirm_password.error.${errors.confirm_password}`)}
                                </div>
                            )}
                        </div>
                        <div className="form-check mt-5 bd-radio-btn">
                            <label className="form-check-label" htmlFor="registerFormRole1">
                                <input
                                    type="radio"
                                    className="form-control"
                                    name="role"
                                    id="registerFormRole1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="buyer"
                                />
                                <div role="button" className="checkmark"></div>
                                <span className="text-capitalize">{t(`account.sign_up.form.gender.male`)}</span>
                            </label>
                        </div>
                        <div className="form-check mt-5 bd-radio-btn">
                            <label className="form-check-label" htmlFor="registerFormRole2">
                                <input
                                    type="radio"
                                    className="form-control"
                                    name="role"
                                    id="registerFormRole2"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value="seller"
                                />
                                <div role="button" className="checkmark"></div>
                                <span className="text-capitalize">{t(`account.sign_up.form.gender.female`)}</span>
                            </label>
                        </div>
                        {errors.role && touched.role && (
                            <div className="invalid-feedback">{t(`account.sign_up.form.gender.error.${errors.role}`)}</div>
                        )}
                        <RegisterInterestsList
                            name="interests"
                            values={values}
                            errors={errors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            t={t}
                        />
                        <button type="submit" className="btn bd-btn bd-primary-btn mt-5 w-100">{t(`account.sign_up.btn`)}</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};