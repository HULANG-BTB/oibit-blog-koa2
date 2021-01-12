import _sequelize from 'sequelize'
const { Model } = _sequelize

export default class User extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        username: {
          type: DataTypes.STRING(32),
          allowNull: false
        },
        password: {
          type: DataTypes.STRING(40),
          allowNull: false
        },
        version: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 1
        }
      },
      {
        sequelize,
        tableName: 'user',
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
    return User
  }
}
