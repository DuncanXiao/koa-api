export const mountAppsMiddle = (subApps) => async (ctx, next) => {
  ctx.apps = subApps
  await next()
}
