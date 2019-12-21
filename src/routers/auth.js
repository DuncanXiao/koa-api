import validate from 'koa2-validation'
import Joi from 'joi'
import helloHandlers from '@/handlers/auth/hello'

const routers = [
  {
    method: 'GET',
    path: '/a/:bb',
    validate: validate({
      params: {
        bb: Joi.string().min(3)
          .max(30)
          .required()
      }
    }),
    handler: helloHandlers
  },
  {
    method: 'GET',
    path: '/c/:bb',
    validate: validate({
      params: {
        bb: Joi.string().min(3)
          .max(30)
          .required()
      }
    }),
    handler: helloHandlers
  }
]

export default routers
