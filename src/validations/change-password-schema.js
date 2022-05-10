import * as Joi from 'joi';

const changePasswordSchema = Joi.object({
    oldPassword: Joi.string().required().messages({
        'string.empty': 'old password is required'
    }),
    newPassword: Joi.string().required().messages({
        'string.empty': 'new password is required'
    }),
    confirmNewPassword: Joi.string().required().valid(Joi.ref('newPassword')).messages({
        'string.empty': 'confirm new password is required',
        'any.only': 'password confirm does\'t match'
    }),
});

export default changePasswordSchema;