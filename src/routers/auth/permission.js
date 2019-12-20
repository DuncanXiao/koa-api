import Router from 'koa-router'

const router = new Router()

router.get('/a', (ctx, next) => {
  ctx.body = 111
})

export default router
