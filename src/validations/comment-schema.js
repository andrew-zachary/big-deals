import * as Joi from 'joi';

const commentSchema = Joi.object({
    rate: Joi.number().required().min(0.5).max(5).messages({
        'number.empty': 'click on stars to rate',
        'number.min': 'rate from 1 to 5 stars',
        'number.max': 'rate from 1 to 5 stars',
    }),
    body: Joi.string().required().messages({
        'string.empty': 'feedback text is required'
    })
});

export default commentSchema;