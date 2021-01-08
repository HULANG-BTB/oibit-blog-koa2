import initServices from '../service'

const service = initServices()

export default class Article {
  static init(ctx) {
    this.ctx = ctx
    return Article
  }

  static async query() {
    const data = this.ctx.request
    return await service.User.query(data)
  }
}
