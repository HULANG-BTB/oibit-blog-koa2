import { Sequelize } from 'sequelize'
import database from '../config/database'

const createDbConnection = async (ctx, next) => {
  const sequelize = new Sequelize(database)
  ctx.sequelize = sequelize // 挂载上下文，在表建模 时用到
  await next()
}

const createMiddleWare = () => {
  return createDbConnection
}

export default createMiddleWare
