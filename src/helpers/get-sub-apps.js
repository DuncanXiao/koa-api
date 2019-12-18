import path from 'path'
import readdir from 'recursive-readdir'

export const getSubApps = async (app) => {
  const appsPath = path.resolve(__dirname, '../apps')
  const subApps = (await readdir(appsPath, ['base.js'])).map((p) => {
    const App = require(p).default
    return new App({ app })
  })

  return subApps
}
