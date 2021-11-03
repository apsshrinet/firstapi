import * as Joi from 'joi'

export const userschema = Joi.object().keys({
     email: Joi.string().email().required().lowercase(),
     password: Joi.string().min(6).required(),
     age: Joi.number().required(),
     name: Joi.string().required(),
     phoneno: Joi.number().required().min(8).max(10)
 });

