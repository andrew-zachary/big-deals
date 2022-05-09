import * as Joi from 'joi';

const RegisterSchema = Joi.object({
    firstName: Joi.string().required().messages({
        'string.empty': 'first name is required'
    }),
    lastName: Joi.string().required().messages({
        'string.empty': 'last name is required'
    }),
    email: Joi.string().email({ tlds: {allow: false} }).messages({
        'string.empty': 'email is required',
        'string.email': 'email is not valid',
    }),
    password: Joi.string().required().messages({
        'string.empty': 'password is required'
    }),
    passwordConfirm: Joi.string().required().valid(Joi.ref('password')).messages({
        'string.empty': 'password confirm is required',
        'any.only': 'password confirm does\'t match'
    })
});

export default RegisterSchema;