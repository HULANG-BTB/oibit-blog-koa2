import initServices from '../service'

const service = initServices()

export default class User {
  static init(ctx) {
    this.ctx = ctx
    return User
  }

  static async query() {
    const data = this.ctx.request
    return await service.User.query(data)
  }
}