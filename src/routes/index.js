import context from '../utils/context'

const initRouters = app => {
  const files = context(__dirname, false, /\.js$/)
  files
    .keys()
    .filter(key => key !== 'index.js')
    .forEach(key => {
      const fileContext = files.context(key)
      const router = fileContext.default
      app.use(router.routes(), router.allowedMethods())
    })
}

export default initRouters
