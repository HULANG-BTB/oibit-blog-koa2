import initModels from '../model'

const model = initModels()

export const service = {}

function Service(target) {
  target.model = model
  const serviceName = target
    .valueOf()
    .toString()
    .match(/^function (.*)\(\)\s/)[1]
  service[serviceName] = target
}

export default Service
