import database from '../config/database'
import { Sequelize } from 'sequelize'
import initModels from './init-models'
// import context from '../utils/context'

// const exclude = ['index.js', 'init-models.js']

// const initModels = () => {
//   const sequelize = new Sequelize(database)
//   const modules = {}
//   const files = context(__dirname, false, /\.js$/)
//   files
//     .keys()
//     .filter(key => exclude.indexOf(key) === -1)
//     .forEach(key => {
//       const ctx = files.context(key)
//       modules[ctx.name] = ctx.default.init(sequelize, DataTypes)
//     })
//   return modules
// }

export default function () {
  const sequelize = new Sequelize(database)
  return initModels(sequelize)
}
