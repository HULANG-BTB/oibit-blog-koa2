import Service from '../class/service'

export default class User extends Service {
  static init() {
    super.init()
    return User
  }
  static async query() {
    const data = await this.model.User.findAll()
    return data
  }
}
