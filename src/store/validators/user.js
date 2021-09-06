import Joi from "joi";

const UserValidation = Joi.object({
  name: Joi.string()
    .alter({
      login: (schema) => schema.optional(),
      register: (schema) => schema.max(50).min(5).required(),
    })
    .messages({
      "any.required": "name is needed",
      "string.empty": "name is needed",
      "string.min": "minimum chars number for name is 5",
      "string.max": "maximum chars number for name is 50",
    }),
  email: Joi.string()
    .regex(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .email({ tlds: { allow: false } })
    .max(255)
    .min(6)
    .required()
    .messages({
      "any.required": "email is needed",
      "string.empty": "email is needed",
      "string.min": "minimum chars number for name is 5",
      "string.max": "maximum chars number for name is 255",
      "string.email": "please enter valid e-mail",
      "string.base": "please enter valid e-mail",
      "string.pattern.base": "please enter valid e-mail",
    }),
  password: Joi.string().required().max(255).min(6).messages({
    "any.required": "password is needed",
    "string.empty": "password is needed",
    "string.min": "password can't be less than 6",
    "string.max": "password can't be more than 255",
  }),
  confirm_password: Joi.string()
    .max(255)
    .equal(Joi.ref("password"))
    .alter({
      register: (schema) => schema.required(),
    })
    .messages({
      "any.required": "password confirm is needed",
      "string.base": "password confirm must be string",
      "string.empty": "password confirm is needed",
      "string.max": "role can't be more than 50",
      "any.only": "password confirm doesn't match",
    }),
  role: Joi.string()
    .alter({
      login: (schema) => schema.optional(),
      register: (schema) => schema.max(50).required(),
    })
    .messages({
      "any.required": "role is needed",
      "string.base": "role must be string",
      "string.empty": "please select a role",
      "string.max": "role can't be more than 50",
    }),
  hobbies: Joi.array()
    .items(
      Joi.object({
        name: Joi.string().min(3),
      }).messages({
        "any.required": "hobby is needed",
        "string.base": "hobby must be string",
        "string.empty": "hobby is needed",
        "string.min": "hobby can't be less than 3 characters",
      })
    )
    .alter({
      register: (schema) => schema.required().min(1),
    })
    .messages({
      "any.required": "hobbies is needed",
      "array.min": "at least one hobby",
    }),
});

export default UserValidation;