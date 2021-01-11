import initModels from '../../../model'

const model = initModels()

export const service = {}

export function Service() {
  const target = arguments[0]
  const serviceName = target.toString().match(/^function (.*)\(\)\s/)[1]
  target.service = serviceName
  target.model = model
  service[serviceName] = target
}

// const Service = target => {
//   target.model = model
//   console.log(target)
//   const serviceName = target.toString().match(/^function (.*)\(\)\s/)[1]
//   service[serviceName] = target
// }

export default Service
