import Service from '../lib/core/decorator/service'
import directory from '../config/directory'
import moment from 'moment'
import iostream from '../utils/iostream'

@Service
class Upload {
  static init() {
    return Upload
  }

  static async images(files) {
    const success = []
    Object.keys(files).forEach(key => {
      const file = files[key]
      const src = file.path
      const dest = iostream.resolve(directory.upload, moment().format('yyyy-MM-DD'), `${file.hash}${iostream.extname(file.name)}`)

      console.log(src, dest)
      if (iostream.move(src, dest)) {
        success.push({
          file: file.name,
          url: iostream.relative(directory.root, dest),
          size: file.size
        })
      }
    })
    const result = await this.model.Upload.bulkCreate(success)

    return result
  }

  static async delete({ id }) {
    const result = await this.model.Upload.destory(id)
    return result
  }

  static async update(data) {
    const result = await this.model.Upload.update(data)
    return result
  }

  static async query({ id }) {
    const result = await this.model.Upload.findByPk(id)
    return result
  }

  static async index() {
    return 'Hello Upload'
  }
}

export default Upload
