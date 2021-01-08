import { Model } from 'sequelize'

export default class user extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          comment: 'ID'
        },
        username: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '用户名'
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '密码'
        },
        nickname: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '昵称'
        },
        phone: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '电话'
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          comment: '邮件'
        },
        avator: {
          type: DataTypes.STRING(255),
          allowNull: false,
          defaultValue: 'default.png',
          comment: '头像'
        },
        login_time: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0,
          comment: '登录时间'
        },
        login_ip: {
          type: DataTypes.STRING(255),
          allowNull: false,
          defaultValue: '0.0.0.0',
          comment: '登录IP'
        },
        create_time: {
          type: DataTypes.INTEGER,
          allowNull: true,
          comment: '创建时间'
        },
        update_time: {
          type: DataTypes.INTEGER,
          allowNull: true,
          comment: '修改时间'
        },
        type: {
          type: DataTypes.STRING(255),
          allowNull: false,
          defaultValue: '用户',
          comment: '类型'
        },
        status: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 1,
          comment: '状态'
        },
        salt: {
          type: DataTypes.STRING(32),
          allowNull: false,
          comment: '密码盐'
        },
        verification: {
          type: DataTypes.STRING(255),
          allowNull: true,
          comment: '验证'
        }
      },
      {
        sequelize,
        tableName: 'user',
        timestamps: true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
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
    return user
  }
}
