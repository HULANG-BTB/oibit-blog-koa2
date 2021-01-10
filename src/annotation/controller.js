import initServices from '../service'

const service = initServices()

export const controller = {}

function Controller(target) {
  target.service = service
  const controllerName = target
    .valueOf()
    .toString()
    .match(/^function (.*)\(\)\s/)[1]
  controller[controllerName] = target
  // _controller = { ..._controller, target }
}

export default Controller
