import _sequelize from 'sequelize'
const { Model } = _sequelize

export default class ArticleTag extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        aid: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          comment: '文章id',
          references: {
            model: 'article',
            key: 'id'
          }
        },
        tid: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          comment: '标签id',
          references: {
            model: 'tag',
            key: 'id'
          }
        },
        version: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 1
        }
      },
      {
        sequelize,
        tableName: 'article_tag',
        timestamps: true,
        paranoid: true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        version: 'version',
        deletedAt: 'delete_time',
        indexes: [
          {
            name: 'fk_article_id',
            using: 'BTREE',
            fields: [{ name: 'aid' }]
          },
          {
            name: 'fk_tag_id',
            using: 'BTREE',
            fields: [{ name: 'tid' }]
          }
        ]
      }
    )
    return ArticleTag
  }
}
