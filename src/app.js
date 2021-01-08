import Koa from 'koa'

import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'
import database from './middlewares/database'
import controller from './middlewares/controller'

import { koaSwagger } from 'koa2-swagger-ui'

import users from './routes/users'
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
app.use(database())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(users.routes(), users.allowedMethods())

// swagger
app.use(swagger.routes(), swagger.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
