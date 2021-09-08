import Joi from "joi";

const UserValidation = Joi.object({
  name: Joi.string()
    .alter({
      login: (schema) => schema.optional(),
      register: (schema) => schema.max(50).min(5).required(),
    })
    .messages({
      "any.required": "is_needed",
      "string.empty": "is_needed",
      "string.min": "min",
      "string.max": "max",
    }),
  email: Joi.string()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .email({ tlds: { allow: false } })
    .max(255)
    .required()
    .messages({
      "any.required": "is_needed",
      "string.empty": "is_needed",
      "string.max": "max",
      "string.email": "not_valid",
      "string.base": "not_valid",
      "string.pattern.base": "not_valid",
    }),
  password: Joi.string().required().max(255).alter({
    register: (schema) => schema.min(6)
  }).messages({
    "any.required": "is_needed",
    "string.empty": "is_needed",
    "string.min": "min",
    "string.max": "max",
  }),
  confirm_password: Joi.string()
    .max(255)
    .equal(Joi.ref("password"))
    .alter({
      register: (schema) => schema.required(),
    })
    .messages({
      "any.required": "is_needed",
      "string.base": "is_needed",
      "string.empty": "is_needed",
      "string.max": "max",
      "any.only": "match",
    }),
  role: Joi.string()
    .alter({
      login: (schema) => schema.optional(),
      register: (schema) => schema.max(50).required(),
    })
    .messages({
      "any.required": "is_needed",
      "string.base": "is_needed",
      "string.empty": "is_needed",
      "string.max": "max",
    }),
    interests: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().min(3),
      }).messages({
        "any.required": "is_needed",
        "string.base": "is_needed",
        "string.empty": "is_needed",
        "string.min": "min",
      })
    )
    .alter({
      register: (schema) => schema.required().min(1),
    })
    .messages({
      "any.required": "is_needed",
      "array.min": "min",
    }),
});

export default UserValidation;