import Koa from 'koa'
import Base from './base'

class Auth extends Base {
  constructor (options) {
    super(options)
    this.app = options.app
    this.koa = new Koa()
  }

  mount () {
    this.app.use(this.mount('/hello', this.koa))
  }
}

export default Auth
