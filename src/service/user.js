import { Service } from '../lib/core/decorator'
import jwt from 'jsonwebtoken'
import jwtconfig from '../config/jwt'

@Service
class User {
  static async login(data) {
    const { username, password } = data
    const user = await this.model.User.findOne({
      where: {
        username,
        password
      },
      attributes: ['id', 'username']
    })
    if (!user) {
      throw new Error('username or passowrd error.')
    }
    const { id } = user
    const token = jwt.sign({ id, username }, jwtconfig.priviteKey, { algorithm: jwtconfig.algorithm, expiresIn: jwtconfig.expires })
    return { id, username, token }
  }

  static async profile({ id, username }) {
    const user = await this.model.User.findOne({
      where: {
        id,
        username
      },
      attributes: ['id', 'username']
    })
    return user
  }
}

export default User
