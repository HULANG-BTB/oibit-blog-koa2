import initModels from '../model'

const model = initModels()

export default class Service {
  static init() {
    this.model = model
  }
}
