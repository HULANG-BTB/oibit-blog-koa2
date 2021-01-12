import Koa from 'koa'

import koaBody from 'koa-body'
import json from 'koa-json'
import onerror from 'koa-onerror'
import logger from 'koa-logger'
// import sessionConfig from './config/session'
// import session from 'koa-session'

import response from './middlewares/response'

import uploadConfig from './config/upload'

import autoloader from './lib/core/loader'

// app instance
const app = new Koa()

// error handler
onerror(app)

// middlewares
app.use(json())
app.use(logger())
app.use(koaBody(uploadConfig))

// use session
// app.keys = ['secret']
// app.use(session(sessionConfig, app))
// app.use(controller())

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
// initRoutes(app)
autoloader(app)
// app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
