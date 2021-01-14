import { Controller, DeleteMapping, GetMapping, PostMapping, PutMapping, Authentication } from '../lib/core/decorator'

@Controller
class Article {
  static prefix = '/api/article'

  static async query() {
    const data = this.ctx.request
    return await this.service.User.query(data)
  }

  @GetMapping('/list')
  static async list() {
    const { page, limit } = this.ctx.query
    const data = {
      page: parseInt(page) || 1,
      size: parseInt(limit) || 10
    }
    return await this.service.Article.list(data)
  }

  @DeleteMapping('/delete/:id')
  @Authentication
  static async delete() {
    const { id } = this.ctx.params
    return await this.service.Article.delete({ id })
  }

  @GetMapping('/detail')
  static async detail() {
    const { id } = this.ctx.query
    const data = { id }
    return await this.service.Article.detail(data)
  }

  @PutMapping('/update')
  @Authentication
  static async update() {
    const { id, title, abstract, thumbnail, content } = this.ctx.request.body
    const data = { id, title, abstract, thumbnail, content }
    return await this.service.Article.update(data)
  }

  @PostMapping('/insert')
  @Authentication
  static async insert() {
    const { title, abstract, thumbnail, content } = this.ctx.request.body
    const data = { title, abstract, thumbnail, content }
    return await this.service.Article.insert(data)
  }

  @GetMapping('/archive')
  static async archive() {
    return await this.service.Article.archive()
  }
}

export default Article
