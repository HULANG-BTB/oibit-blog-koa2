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
    if (offset + page > result.count) {
      page--
    }
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
    const result = await this.model.Article.findByPk(id)
    return result
  }

  /**
   * TODO 插入文章
   *
   * @static
   * @param {*} data
   * @return {*}
   * @memberof Article
   */
  static async insert(data) {
    return data
  }

  static async archive() {
    const result = await this.model.Article.findAll({
      attributes: ['id', 'title', 'abstract'],
      order: [
        ['create_time', 'DESC'],
        ['id', 'DESC']
      ]
    })
    return result
  }
}

export default Article
