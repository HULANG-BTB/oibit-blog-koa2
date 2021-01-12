export const database = {
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: 'root',
  database: 'oibit-blog',
  dialect: 'mysql',
  timezone: '+08:00',
  pool: {
    max: 10
  },
  additional: {
    timestamps: true,
    createdAt: 'create_time',
    updatedAt: 'update_time',
    version: 'version',
    deletedAt: 'delete_time'
  }
}

export default database
