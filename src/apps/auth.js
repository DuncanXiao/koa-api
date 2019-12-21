import Koa from 'koa'
import Base from './base'
import cors from 'koa2-cors'

class Auth extends Base {
  constructor (options) {
    super(options)
    this.server = options.server
    this.app = new Koa()
    this.router = this.getRouter('auth')
  }

  mountMiddleware () {
    this.server.use(this.mount('/hello', this.app))
    this.app.use(cors())
    this.app.use(this.router.routes())
    this.app.use(this.router.allowedMethods())
  }
}

export default Auth
