import context from '../utils/context'

const initControllers = () => {
  const modules = {}
  const files = context(__dirname, false, /\.js$/)
  files
    .keys()
    .filter(key => key !== 'index.js')
    .forEach(key => {
      const fileContext = files.context(key)
      modules[fileContext.name] = fileContext.default
    })
  return modules
}

export default initControllers
