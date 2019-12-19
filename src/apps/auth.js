import Koa from 'koa'
import Base from './base'
import cors from 'koa2-cors'

class Auth extends Base {
  constructor (options) {
    super(options)
    this.server = options.server
    this.app = new Koa()
  }

  mount = (server) => {
    this.server.use(this.mount('/hello', this.app))
    // this.app.use(cors())
  }
}

export default Auth
