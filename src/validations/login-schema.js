import * as Joi from 'joi';

const LoginSchema = Joi.object({
    email: Joi.string().email({ tlds: {allow: false} }).messages({
        'string.empty': 'login.email.errors.email_required',
        'string.email': 'login.email.errors.email_not_valid',
    }),
    password: Joi.string().required().messages({
        'string.empty': 'login.password.errors.password_required'
    })
});

export default LoginSchema;