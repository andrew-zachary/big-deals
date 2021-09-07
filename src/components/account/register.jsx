import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { register } from "../../store/config/user";
import { apiCallStarted } from "../../store/actions/API.js";

import UserValidation from "../../store/validators/user";

import RegisterInterestsList from "./register-interests-list.jsx";

export default () => {
  const dispatch = useDispatch();
  const errorState = useSelector((state) => state.app.currentError);
  return (
    <div id="register-box" className="bd-white-box p-4 mt-6">
        <h1 className="text-capitalize">sign up</h1>
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
                hobbies: [],
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
                            <label htmlFor="registerFormName">Name</label>
                            {errors.name && touched.name && (
                                <div className="invalid-feedback">{errors.name}</div>
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
                            <label htmlFor="registerFormEmail">Email address</label>
                            {errors.email && touched.email && (
                                <div className="invalid-feedback">{errors.email}</div>
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
                            <label htmlFor="registerFormPassword">Password</label>
                            {errors.password && touched.password && (
                                <div className="invalid-feedback">{errors.password}</div>
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
                            <label htmlFor="registerFormConfirmPassword">Confirm Password</label>
                            {errors.confirm_password && touched.confirm_password && (
                                <div className="invalid-feedback">
                                    {errors.confirm_password}
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
                                <span>Buyer</span>
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
                                <span>Seller</span>
                            </label>
                        </div>
                        {errors.role && touched.role && (
                            <div className="invalid-feedback">{errors.role}</div>
                        )}
                        <RegisterInterestsList
                            name="hobbies"
                            values={values}
                            errors={errors}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <button type="submit" className="btn bd-btn bd-primary-btn mt-5 w-100">Sign Up</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};