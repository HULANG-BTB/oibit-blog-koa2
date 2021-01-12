import _sequelize from 'sequelize'
const { Model } = _sequelize

export default class Upload extends Model {
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
        version: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1,
          comment: '乐观锁'
        }
      },
      {
        sequelize,
        tableName: 'upload',
        timestamps: true,
        paranoid: true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
        version: 'version',
        deletedAt: 'delete_time',
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
    return Upload
  }
}
