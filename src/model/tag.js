import { Model } from 'sequelize'

export default class tag extends Model {
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
        name: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '标签名'
        },
        count: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
          comment: '标签下文章数目'
        },
        create_time: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          comment: '创建时间'
        },
        update_time: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          comment: '修改时间'
        },
        del: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
          comment: '是否删除'
        }
      },
      {
        sequelize,
        tableName: 'tag',
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
    return tag
  }
}
