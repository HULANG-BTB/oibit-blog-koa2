import initControllers from '../controller'

const createDbConnection = async (ctx, next) => {
  initControllers(ctx)
  await next()
}

const createMiddleWare = () => {
  return createDbConnection
}

export default createMiddleWare
