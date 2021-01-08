import database from '../config/database'
import { Sequelize, DataTypes } from 'sequelize'
import article from './article.js'
import category from './category.js'
import option from './option.js'
import route from './route.js'
import tag from './tag.js'
import upload from './upload.js'
import user from './user.js'

/**
 * initModels 初始化 Models
 * @param {*} sequelize
 */
const initModels = () => {
  const sequelize = new Sequelize(database)
  const Article = article.init(sequelize, DataTypes)
  const Category = category.init(sequelize, DataTypes)
  const Option = option.init(sequelize, DataTypes)
  const Route = route.init(sequelize, DataTypes)
  const Tag = tag.init(sequelize, DataTypes)
  const Upload = upload.init(sequelize, DataTypes)
  const User = user.init(sequelize, DataTypes)

  return {
    Article,
    Category,
    Option,
    Route,
    Tag,
    Upload,
    User
  }
}

export default initModels
