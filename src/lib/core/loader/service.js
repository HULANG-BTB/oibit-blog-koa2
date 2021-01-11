import context from '../../../utils/context'
import path from 'path'

export const loadService = () => {
  const modules = {}
  const files = context(path.join(__dirname, '../../../service'), false, /\.js$/)
  files.keys().forEach(key => {
    const ctx = files.context(key)
    const service = ctx.default
    if (service.service) {
      modules[service.service] = service
    }
  })
  return modules
}
