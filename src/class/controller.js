import initServices from '../service'

const service = initServices()

export default class Controller {
  static init(ctx) {
    this.service = service
    if (ctx) this.ctx = ctx
  }
}
