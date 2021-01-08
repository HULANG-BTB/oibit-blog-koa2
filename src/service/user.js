import initModels from '../model'

const model = initModels()
export default class User {
  static async query() {
    const data = await model.User.findAll()
    return data
  }
}
