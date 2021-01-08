import { DataTypes } from 'sequelize'
import _article from './article.js'
import _category from './category.js'
import _option from './option.js'
import _route from './route.js'
import _tag from './tag.js'
import _upload from './upload.js'
import _user from './user.js'

/**
 * initModels 初始化 Models
 * @param {*} sequelize
 */
const initModels = sequelize => {
  const Article = _article.init(sequelize, DataTypes)
  const Category = _category.init(sequelize, DataTypes)
  const Option = _option.init(sequelize, DataTypes)
  const Route = _route.init(sequelize, DataTypes)
  const Tag = _tag.init(sequelize, DataTypes)
  const Upload = _upload.init(sequelize, DataTypes)
  const User = _user.init(sequelize, DataTypes)

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
