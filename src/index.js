require('dotenv').config()

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const { insertAppsMiddle } = require('@/lib/koa-middlewares')
const { getSubApps, mountSubApps } = require('@/helpers/init-apps')
const env = require('@/config/env').default

const start = async () => {
  const server = new Koa()
  const subApps = await getSubApps(server)
  server.use(bodyParser())
  server.use(insertAppsMiddle(subApps))
  mountSubApps({ server, subApps })

  server.listen(env.port, () => {
    console.log(`[demo] request post is starting at port ${env.port}`)
  })
}

start()
