import Controller from '../class/controller'

export default class User extends Controller {
  static init(ctx) {
    super.init(ctx)
    return User
  }

  static async query() {
    const data = this.ctx.request
    return await this.service.User.query(data)
  }
}
