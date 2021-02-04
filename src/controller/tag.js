import { Controller, GetMapping, PostMapping, PutMapping, DeleteMapping } from '../lib/core/decorator'

@Controller
class Tag {
  static prefix = '/api/tag'

  @GetMapping('/list')
  static async list() {
    return await this.service.Tag.list()
  }

  @PostMapping('/insert')
  static async insert() {
    const { title, abstract, category, tags, thumbnail } = this.ctx.body
    const data = { title, abstract, category, tags, thumbnail }
    return await this.service.Tag.insert(data)
  }

  @PutMapping('/update')
  static async update() {
    const { title, abstract, category, tags, thumbnail } = this.ctx.body
    const data = { title, abstract, category, tags, thumbnail }
    return await this.service.Tag.update(data)
  }

  @DeleteMapping('/delete')
  static async detail() {
    const { id } = this.ctx.query
    const data = { id }
    return await this.service.Tag.delete(data)
  }
}

export default Tag
