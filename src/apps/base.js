import Router from 'koa-router'
import mount from 'koa-mount'
import { getCustomRouter } from '@/helpers/init-apps'

class Base {
  constructor () {
    this.mount = mount
  }

  getRouter (routerName) {
    const router = new Router()
    const customRouters = getCustomRouter()[routerName]

    if (!customRouters) throw new Error('the router empty')

    customRouters.forEach(r => {
      router[r.method.toLocaleLowerCase()](r.path, r.validate, r.handler)
    })

    return router
  }
}

export default Base
