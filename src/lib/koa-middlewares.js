export const insertAppsMiddle = (subApps) => async (ctx, next) => {
  ctx.apps = subApps
  await next()
}
