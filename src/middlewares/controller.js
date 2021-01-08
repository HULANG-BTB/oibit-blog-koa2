import initControllers from '../controller'

const createDbConnection = async (ctx, next) => {
  const controllers = initControllers()
  Object.keys(controllers).forEach(key => {
    controllers[key] = controllers[key].init(ctx)
  })
  await next()
}

const createMiddleWare = () => {
  return createDbConnection
}

export default createMiddleWare
