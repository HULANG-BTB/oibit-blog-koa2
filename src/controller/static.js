import { Controller, GetMapping } from '../lib/core/decorator'
import directory from '../config/directory'
import path from 'path'
import fs from 'fs'

@Controller
class Static {
  static prefix = '/static'

  @GetMapping('*')
  static async list() {
    const url = this.ctx.url
    const dest = path.join(directory.root, url)
    const file = fs.readFileSync(dest)
    this.ctx.type = file.type
    return fs.createReadStream(dest)
  }
}

export default Static
