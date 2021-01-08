import initControllers from '../controller/index'

const createDbConnection = async (ctx, next) => {
  const controller = initControllers(ctx)
  ctx.controller = controller // 挂载上下文
  await next()
}

const createMiddleWare = () => {
  return createDbConnection
}

export default createMiddleWare
