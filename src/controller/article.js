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

  static async list() {
    const { page, size } = this.ctx.query
    const data = {
      page: parseInt(page) || 1,
      size: parseInt(size) || 10
    }
    return await service.Article.list(data)
  }

  static async detail() {
    const { id } = this.ctx.query
    const data = { id }
    return await service.Article.detail(data)
  }

  static async insert() {
    const { title, abstract, category, tags, thumbnail } = this.ctx.body
    const data = { title, abstract, category, tags, thumbnail }
    return await service.Article.insert(data)
  }

  static async archive() {
    return await service.Article.archive()
  }
}
