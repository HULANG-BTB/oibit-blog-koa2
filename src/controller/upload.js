import Controller from '../annotation/controller'

export const name = 'Upload'

@Controller
class Upload {
  static init(ctx) {
    this.ctx = ctx
    return Upload
  }

  static async images() {
    const files = this.ctx.request.files
    // 检查文件格式
    Object.keys(files).forEach(key => {
      if (files[key].type.indexOf('image') === -1) {
        throw new Error('Only image file is allowed.')
      }
    })
    return await this.service.Upload.images(files)
  }
}

export default Upload
