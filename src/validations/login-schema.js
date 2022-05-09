import * as Joi from 'joi';

const LoginSchema = Joi.object({
    email: Joi.string().email({ tlds: {allow: false} }).messages({
        'string.empty': 'email is required',
        'string.email': 'email is not valid',
    }),
    password: Joi.string().required().messages({
        'string.empty': 'password is required'
    })
});

export default LoginSchema;