import path from 'path'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import kstatic from 'koa-static'
import cors from 'koa2-cors'
import { mountSubApps } from './lib/koa-middlewares'
import { getSubApps } from './helpers/get-sub-apps'

const start = async () => {
  const app = new Koa()
  const staticPath = './static'

  const subApps = await getSubApps(app)
  // app.use(mountAppsMiddle(Apps))

  app.use(cors())
  app.use(bodyParser())
  app.use(kstatic(
    path.join(__dirname, staticPath)
  ))

  app.listen(3000, () => {
    console.log('[demo] request post is starting at port 3000')
  })
}

start()
