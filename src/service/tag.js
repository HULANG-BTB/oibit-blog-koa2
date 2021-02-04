import { Service } from '../lib/core/decorator'

@Service
class Tag {
  static async list() {
    const result = await this.model.Tag.findAll({
      include: [
        {
          model: this.model.ArticleTag
        }
      ]
    })
    return result
  }

  static async insert(data) {
    return await this.model.Tag.create(data)
  }

  static async update(data) {
    return await this.model.Tag.save(data)
  }

  static async delete({ id }) {
    return await this.model.Tag.destory(id)
  }
}

export default Tag
