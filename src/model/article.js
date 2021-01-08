import _sequelize from 'sequelize'
const { Model } = _sequelize

export const name = 'Article'
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
        thumbnail: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '缩略图地址'
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
        like: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
          comment: '点赞次数'
        },
        create_time: {
          type: DataTypes.DATE,
          allowNull: true,
          comment: '创建时间'
        },
        update_time: {
          type: DataTypes.DATE,
          allowNull: true,
          comment: '更新时间'
        },
        version: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1,
          comment: '乐观锁'
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
