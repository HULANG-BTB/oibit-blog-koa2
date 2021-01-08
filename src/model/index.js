import database from '../config/database'
import { Sequelize, DataTypes } from 'sequelize'
import context from '../utils/context'

const initModels = () => {
  const sequelize = new Sequelize(database)
  const modules = {}
  const files = context(__dirname, false, /\.js$/)
  files
    .keys()
    .filter(key => key !== 'index.js')
    .forEach(key => {
      const ctx = files.context(key)
      modules[ctx.name] = ctx.default.init(sequelize, DataTypes)
    })
  return modules
}

export default initModels
