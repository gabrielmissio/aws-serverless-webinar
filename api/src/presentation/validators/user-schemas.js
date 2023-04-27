const Joi = require('joi')

module.exports.createUser = Joi.object({
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required()
  })
}).unknown(true)

module.exports.getUser = Joi.object({
  params: Joi.object({
    idOrEmail: Joi.string().required()
  })
}).unknown(true)

module.exports.updateUser = Joi.object({
  params: Joi.object({
    idOrEmail: Joi.string().required()
  }),
  body: Joi.object({
    name: Joi.string(),
    email: Joi.string().email()
  })
}).unknown(true)

module.exports.deleteUser = Joi.object({
  params: Joi.object({
    idOrEmail: Joi.string().required()
  })
}).unknown(true)

module.exports.getAllUsers = Joi.object({
  query: Joi.object({
    pageSize: Joi.number().min(1),
    next: Joi.string()
  })
}).unknown(true)
