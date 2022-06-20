import * as Joi from 'joi';

const commentSchema = Joi.object({
    rate: Joi.number().required().min(1).max(5).messages({
        'number.empty': 'click on stars to rate',
        'number.min': 'review.rate_in.errors.rate_from',
        'number.max': 'review.rate_in.errors.rate_from',
    }),
    body: Joi.string().required().messages({
        'string.empty': 'review.rate_in.errors.text_is_required'
    })
});

export default commentSchema;