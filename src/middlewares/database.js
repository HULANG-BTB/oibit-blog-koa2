import { Sequelize } from 'sequelize'
import database from '../config/database'

const createDbConnection = async (ctx, next) => {
  const seq = new Sequelize(database)
  ctx.sequelize = seq // 挂载上下文，在表建模 时用到
  await next()
}

const createMiddleWare = () => {
  return createDbConnection
}

export default createMiddleWare
