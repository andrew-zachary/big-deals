import * as Joi from 'joi';

const changePasswordSchema = Joi.object({
    oldPassword: Joi.string().required().messages({
        'string.empty': 'admin.change_password.form.old_password.errors.required'
    }),
    newPassword: Joi.string().required().messages({
        'string.empty': 'admin.change_password.form.new_password.errors.required'
    }),
    confirmNewPassword: Joi.string().required().valid(Joi.ref('newPassword')).messages({
        'string.empty': 'admin.change_password.form.confirm_new_password.errors.required',
        'any.only': 'admin.change_password.form.confirm_new_password.errors.no_match'
    }),
});

export default changePasswordSchema;