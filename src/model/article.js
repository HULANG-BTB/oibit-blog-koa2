import { Model } from 'sequelize'

export default class article extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          comment: '记录值'
        },
        title: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '标题'
        },
        abstract: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '摘要'
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          comment: '内容'
        },
        username: {
          type: DataTypes.STRING(255),
          allowNull: false,
          defaultValue: 'Lang Hu',
          comment: '发表用户'
        },
        category: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          comment: '分类id'
        },
        tags: {
          type: DataTypes.STRING(255),
          allowNull: true,
          comment: '标签列表'
        },
        comment: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
          comment: '评论数目'
        },
        view: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
          comment: '查看数目'
        },
        status: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
          comment: '状态 0-显示 1-隐藏'
        },
        top: {
          type: DataTypes.TINYINT,
          allowNull: false,
          defaultValue: 0,
          comment: '置顶 0-默认 1-置顶'
        },
        create_time: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          comment: '创建时间'
        },
        update_time: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          comment: '更新时间'
        },
        thumbnail: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '缩略图地址'
        },
        del: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
          comment: '是否删除1 是 0 否'
        },
        like: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
          comment: '喜欢次数'
        }
      },
      {
        sequelize,
        tableName: 'article',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }]
          }
        ]
      }
    )
    return article
  }
}
