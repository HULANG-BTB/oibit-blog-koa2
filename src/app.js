import Koa from 'koa'

import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import controller from './middlewares/controller'
import response from './middlewares/response'

import { koaSwagger } from 'koa2-swagger-ui'

import users from './routes/users'
import article from './routes/article'
import swagger from './routes/swagger'

// app instance
const app = new Koa()

// error handler
onerror(app)

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text']
  })
)
app.use(
  koaSwagger({
    routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: '/swagger.json' // example path to json
    }
  })
)
app.use(json())
app.use(logger())
app.use(controller())

// 统一接口返回
app.use(response())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(users.routes(), users.allowedMethods())
app.use(article.routes(), article.allowedMethods())

// swagger
app.use(swagger.routes(), swagger.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
