import _sequelize from 'sequelize'
const { Model } = _sequelize

export const name = 'Upload'
export default class upload extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          comment: 'ID'
        },
        url: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '保存路径'
        },
        size: {
          type: DataTypes.INTEGER,
          allowNull: false,
          comment: '大小'
        },
        create_time: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          comment: '上传时间'
        },
        update_time: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: true,
          comment: '修改时间'
        }
      },
      {
        sequelize,
        tableName: 'upload',
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
    return upload
  }
}
