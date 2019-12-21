const Joi = require('@hapi/joi')

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
})

const a = schema.validate({ username: 'ac' })
console.log(schema)
console.log(a)