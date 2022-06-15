import * as Joi from 'joi';

const RegisterSchema = Joi.object({
    firstName: Joi.string().required().messages({
        'string.empty': 'register.f_name.errors.f_name_required'
    }),
    lastName: Joi.string().required().messages({
        'string.empty': 'register.l_name.errors.l_name_required'
    }),
    email: Joi.string().email({ tlds: {allow: false} }).messages({
        'string.empty': 'register.email.errors.email_required',
        'string.email': 'register.email.errors.email_not_valid',
    }),
    password: Joi.string().required().messages({
        'string.empty': 'register.password.errors.password_required'
    }),
    passwordConfirm: Joi.string().required().valid(Joi.ref('password')).messages({
        'string.empty': 'register.password_confirm.errors.password_confirm_required',
        'any.only': 'register.password_confirm.errors.password_confirm_no_match'
    })
});

export default RegisterSchema;