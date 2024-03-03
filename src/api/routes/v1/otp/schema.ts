import Joi from 'joi'

export default {
  genereteCode: Joi.object().keys({
    registerName: Joi.string(),
    username: Joi.string().min(3).max(30).required(),
    timeLife: Joi.number()
  }),
  validateCode: Joi.object().keys({
    registerName: Joi.string(),
    originRegisterName: Joi.string(),
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).max(30).required(),
    code: Joi.string().min(4).max(4).required(),
  })
}