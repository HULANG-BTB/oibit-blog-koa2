import { DataTypes } from 'sequelize'
import _article from './article.js'
import _category from './category.js'
import _option from './option.js'
import _route from './route.js'
import _tag from './tag.js'
import _upload from './upload.js'
import _user from './user.js'

export default function initModels(sequelize) {
  const article = _article.init(sequelize, DataTypes)
  const category = _category.init(sequelize, DataTypes)
  const option = _option.init(sequelize, DataTypes)
  const route = _route.init(sequelize, DataTypes)
  const tag = _tag.init(sequelize, DataTypes)
  const upload = _upload.init(sequelize, DataTypes)
  const user = _user.init(sequelize, DataTypes)

  return {
    article,
    category,
    option,
    route,
    tag,
    upload,
    user
  }
}
