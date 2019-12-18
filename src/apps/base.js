import mount from 'koa-mount'

class Base {
  constructor () {
    this.mount = mount
  }
}

export default Base
