export * from './controller'
export * from './service'

import { loadController } from './controller'
import { loadService } from './service'

export const autoloader = app => {
  loadService()
  loadController(app)
}

export default autoloader
