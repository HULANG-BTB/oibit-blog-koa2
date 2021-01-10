import Koa from 'koa'

import koaBody from 'koa-body'
import json from 'koa-json'
import onerror from 'koa-onerror'
import logger from 'koa-logger'

import controller from './middlewares/controller'
import response from './middlewares/response'

import uploadConfig from './config/upload'

import initRoutes from './routes'

import { koaSwagger } from 'koa2-swagger-ui'

// app instance
const app = new Koa()

// error handler
onerror(app)

// middlewares
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
app.use(koaBody(uploadConfig))
app.use(controller())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 统一接口返回
app.use(response())

// routes
initRoutes(app)

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
