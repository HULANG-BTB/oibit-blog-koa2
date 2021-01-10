import initModels from '../model'

const model = initModels()

// export default class Service {
//   static init() {
//     this.model = model
//   }
// }

export const services = {}

function Service(target) {
  target.model = model
}

export default Service
