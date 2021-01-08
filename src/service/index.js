import context from '../utils/context'

const initServices = () => {
  const modules = {}
  const files = context(__dirname, false, /\.js$/)
  files
    .keys()
    .filter(key => key !== 'index.js')
    .forEach(key => {
      const ctx = files.context(key)
      modules[ctx.name] = ctx.default.init()
    })
  return modules
}

export default initServices
