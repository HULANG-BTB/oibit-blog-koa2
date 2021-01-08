import { Model } from 'sequelize'

export default class category extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        create_time: {
          type: DataTypes.DATE,
          allowNull: true
        },
        update_time: {
          type: DataTypes.DATE,
          allowNull: true
        },
        del: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
      },
      {
        sequelize,
        tableName: 'category',
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
    return category
  }
}
