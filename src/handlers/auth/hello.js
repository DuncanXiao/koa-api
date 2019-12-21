const helloHandlers = (ctx, next) => {
  ctx.code = 200
  ctx.body = 'Hello World!'
}

export default helloHandlers
