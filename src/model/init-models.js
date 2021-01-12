import _sequelize from 'sequelize'
const DataTypes = _sequelize.DataTypes
import _Article from './article.js'
import _Upload from './upload.js'
import _User from './user.js'

export default function initModels(sequelize) {
  var Article = _Article.init(sequelize, DataTypes)
  var Upload = _Upload.init(sequelize, DataTypes)
  var User = _User.init(sequelize, DataTypes)

  return {
    Article,
    Upload,
    User
  }
}
