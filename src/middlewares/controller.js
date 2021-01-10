import { controller } from '../annotation/controller'

const createDbConnection = async (ctx, next) => {
  Object.keys(controller).forEach(key => {
    controller[key] = controller[key].init(ctx)
  })
  await next()
}

const createMiddleWare = () => {
  return createDbConnection
}

export default createMiddleWare
