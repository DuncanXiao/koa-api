import path from 'path'
import forEach from 'lodash/forEach'
import requireDir from 'require-dir'

export const getSubApps = async (server) => {
  const appsPath = path.resolve(__dirname, '../apps')
  const subApps = requireDir(appsPath, {
    filter: (f) => !f.match(/base.js/),
    // eslint-disable-next-line new-cap
    mapValue: (v) => new v.default({ server })
  })
  return subApps
}

export const mountSubApps = ({ server, subApps }) => {
  forEach(subApps, (a) => {
    a.mountMiddleware(server)
  })
}
