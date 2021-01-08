import Controller from '../class/controller'

export const name = 'Upload'

export default class Upload extends Controller {
  static init(ctx) {
    super.init(ctx)
    return Upload
  }

  static async image() {
    const data = this.ctx.request
    return await this.service.Upload.image(data)
  }
}
