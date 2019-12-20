import Koa from 'koa'
import Base from './base'
import cors from 'koa2-cors'

class Auth extends Base {
  constructor (options) {
    super(options)
    this.server = options.server
    this.app = new Koa()
  }

  mountMiddleware () {
    this.server.use(this.mount('/hello', this.app))
    this.app.use(cors())

    // router.get('/a', (ctx, next) => {
    //   ctx.body = 111
    // });
    // this.app
    // .use(router.routes())
    // .use(router.allowedMethods())
  }
}

export default Auth
