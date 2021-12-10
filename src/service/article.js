import { Service } from '../lib/core/decorator'

@Service
class Article {
  static init() {
    return Article
  }

  static async list({ page, size }) {
    const offset = (page - 1) * size
    const limit = size
    const result = await this.model.Article.findAndCountAll({
      offset,
      limit,
      attributes: ['id', 'title', 'abstract', 'comment', 'view', 'like', 'create_time', 'update_time', 'thumbnail'],
      order: [
        ['create_time', 'DESC'],
        ['id', 'DESC']
      ]
    })
    result.page = page
    result.limit = limit
    return result
  }

  static async delete({ id }) {
    const article = await this.model.Article.findByPk(id)
    const result = await article.destroy()
    return result
  }

  static async detail({ id }) {
    try {
      const result = await this.model.Article.findByPk(id, {
        include: this.model.Tag
      })
      await result.update({ view: result.view + 1 }, { silent: true })
      return result
    } catch {
      throw new Error('Article is not found.')
    }
  }

  static async update(data) {
    const { id, title, abstract, thumbnail, content } = data
    const article = await this.model.Article.findByPk(id)
    Object.assign(article, { title, abstract, thumbnail, content })
    const result = article.save()
    return result
  }

  static async insert(data) {
    const { title, abstract, thumbnail, content } = data
    const result = await this.model.Article.create({ title, abstract, thumbnail, content })
    return result
  }

  static async archive() {
    const result = await this.model.Article.findAll({
      attributes: ['id', 'title', 'abstract', 'create_time'],
      order: [
        ['create_time', 'DESC'],
        ['id', 'DESC']
      ]
    })
    return result
  }
}

export default Article
