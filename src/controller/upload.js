import Controller from '../class/controller'

export const name = 'Upload'

export default class Upload extends Controller {
  static init(ctx) {
    super.init(ctx)
    return Upload
  }

  static async images() {
    const files = this.ctx.request.files
    console.log(JSON.stringify(files))
    // for (let file of files) {
    //   console.log(file.name)
    // }
    return files
    // return await this.service.Upload.images({})
  }
}
