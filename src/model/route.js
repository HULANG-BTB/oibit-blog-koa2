import { Model } from 'sequelize'

export default class route extends Model {
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
          type: DataTypes.STRING(25),
          allowNull: false
        },
        url: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        create_time: {
          type: DataTypes.DATE,
          allowNull: true
        },
        update_time: {
          type: DataTypes.DATE,
          allowNull: true
        },
        sort: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
        }
      },
      {
        sequelize,
        tableName: 'route',
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
    return route
  }
}
