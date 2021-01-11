import { Controller, GetMapping, PostMapping } from '../lib/core/decorator'

@Controller
class Article {
  static prefix = '/api/article'

  static async query() {
    const data = this.ctx.request
    return await this.service.User.query(data)
  }

  @GetMapping('/list')
  static async list() {
    const { page, size } = this.ctx.query
    const data = {
      page: parseInt(page) || 1,
      size: parseInt(size) || 10
    }
    return await this.service.Article.list(data)
  }

  @GetMapping('/detail')
  static async detail() {
    console.log(this.ctx.query)
    const { id } = this.ctx.query
    const data = { id }
    return await this.service.Article.detail(data)
  }

  @PostMapping('/insert')
  static async insert() {
    const { title, abstract, category, tags, thumbnail } = this.ctx.body
    const data = { title, abstract, category, tags, thumbnail }
    return await this.service.Article.insert(data)
  }

  @GetMapping('/archive')
  static async archive() {
    return await this.service.Article.archive()
  }
}

export default Article
