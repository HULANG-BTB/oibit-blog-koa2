import { Service } from '../lib/core/decorator'

@Service
class User {
  static async login(data) {
    const { username, password } = data
    const user = this.model.User.findOne({
      where: {
        username,
        password
      },
      attributes: ['id', 'username']
    })
    if (!user) {
      throw new Error('username or passowrd error.')
    }
    return user
  }

  static async profile({ id }) {
    const user = await this.model.User.findOne({
      where: {
        id
      },
      attributes: ['id', 'username']
    })
    return user
  }
}

export default User
