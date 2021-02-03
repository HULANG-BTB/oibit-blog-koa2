import _sequelize from 'sequelize'
const { Model } = _sequelize

export default class Tag extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true,
          comment: '主键'
        },
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
          comment: '标签名称'
        },
        version: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 1,
          comment: '乐观锁定'
        }
      },
      {
        sequelize,
        tableName: 'tag',
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
    return Tag
  }
}
