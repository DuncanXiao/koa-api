export const insertAppsMiddle = (subApps) => async (ctx, next) => {
  ctx.apps = subApps
  await next()
}

export const errorHandleMiddle = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log('some error: ', err)
    ctx.status = err.status || err.code || 500
    ctx.body = {
      success: false,
      message: err.message
    }
  }
}
