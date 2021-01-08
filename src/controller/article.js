import Controller from '../class/controller'

export const name = 'Article'
export default class Article extends Controller {
  static init(ctx) {
    super.init(ctx)
    return Article
  }

  static async query() {
    const data = this.ctx.request
    return await this.service.User.query(data)
  }

  static async list() {
    const { page, size } = this.ctx.query
    const data = {
      page: parseInt(page) || 1,
      size: parseInt(size) || 10
    }
    return await this.service.Article.list(data)
  }

  static async detail() {
    const { id } = this.ctx.query
    const data = { id }
    return await this.service.Article.detail(data)
  }

  static async insert() {
    const { title, abstract, category, tags, thumbnail } = this.ctx.body
    const data = { title, abstract, category, tags, thumbnail }
    return await this.service.Article.insert(data)
  }

  static async archive() {
    return await this.service.Article.archive()
  }
}
