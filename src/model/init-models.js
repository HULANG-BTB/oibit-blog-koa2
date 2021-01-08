import { DataTypes } from 'sequelize'
import _article from './article.js'
import _category from './category.js'
import _option from './option.js'
import _route from './route.js'
import _tag from './tag.js'
import _upload from './upload.js'
import _user from './user.js'

export default function initModels(sequelize) {
  var article = _article.init(sequelize, DataTypes)
  var category = _category.init(sequelize, DataTypes)
  var option = _option.init(sequelize, DataTypes)
  var route = _route.init(sequelize, DataTypes)
  var tag = _tag.init(sequelize, DataTypes)
  var upload = _upload.init(sequelize, DataTypes)
  var user = _user.init(sequelize, DataTypes)

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
