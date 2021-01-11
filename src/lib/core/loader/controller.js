import context from '../../../utils/context'
import path from 'path'

export const loadController = app => {
  const modules = {}
  const files = context(path.join(__dirname, '../../../controller'), false, /\.js$/)
  files.keys().forEach(key => {
    const ctx = files.context(key)
    const router = ctx.default
    const name = router.controller
    if (router.controller) {
      app.use(router.routes(), router.allowedMethods())
      modules[name] = router
    }
  })
  return modules
}
