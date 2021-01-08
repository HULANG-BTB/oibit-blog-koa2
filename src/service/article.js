import Service from '../class/service'

export const name = 'Article'
export default class Article extends Service {
  static init() {
    super.init()
    return Article
  }

  static async list({ page, size }) {
    const offset = (page - 1) * size
    const limit = size
    const result = await this.model.Article.findAll({
      offset,
      limit,
      attributes: ['id', 'title', 'abstract', 'comment', 'view', 'like', 'create_time', 'update_time', 'thumbnail'],
      order: [
        ['create_time', 'DESC'],
        ['id', 'DESC']
      ]
    })
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
