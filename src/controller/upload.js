import { Controller, PostMapping } from '../lib/core/decorator'

@Controller
class Upload {
  static prefix = '/api/upload'

  @PostMapping('/images')
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
