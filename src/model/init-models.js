import _sequelize from 'sequelize'
const DataTypes = _sequelize.DataTypes
import _Article from './article.js'
import _ArticleTag from './articleTag.js'
import _Tag from './tag.js'
import _Upload from './upload.js'
import _User from './user.js'

export default function initModels(sequelize) {
  var Article = _Article.init(sequelize, DataTypes)
  var ArticleTag = _ArticleTag.init(sequelize, DataTypes)
  var Tag = _Tag.init(sequelize, DataTypes)
  var Upload = _Upload.init(sequelize, DataTypes)
  var User = _User.init(sequelize, DataTypes)

  ArticleTag.belongsTo(Article, { foreignKey: 'aid' })
  Article.hasMany(ArticleTag, { foreignKey: 'aid' })
  ArticleTag.belongsTo(Tag, { foreignKey: 'tid' })
  Tag.hasMany(ArticleTag, { foreignKey: 'tid' })
  Article.belongsToMany(Tag, { through: ArticleTag, foreignKey: 'aid' })
  Tag.belongsToMany(Article, { through: ArticleTag, foreignKey: 'tid' })

  return {
    Article,
    ArticleTag,
    Tag,
    Upload,
    User
  }
}
