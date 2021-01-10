import initServices from '../service'

const service = initServices()

export let _controller = {}

export const controller = new Proxy(_controller, {
  get(target, key) {
    return target[key]
  },
  set() {
    throw new Error('controller can not be overwrite.')
  }
})

function Controller(target) {
  target.service = service
  _controller = { ..._controller, target }
  console.log(_controller)
}

export default Controller
