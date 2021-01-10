import Controller from '../class/controller'

export const name = 'Upload'

export default class Upload extends Controller {
  static init(ctx) {
    super.init(ctx)
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
