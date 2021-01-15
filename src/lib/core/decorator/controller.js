import koaRouter from 'koa-router'

import { service } from './service'

export const controller = {}

export function Controller() {
  const target = arguments[0]
  const routes = target.routes
  const prefix = target.prefix
  const router = new koaRouter()
  if (prefix) {
    router.prefix(prefix)
  }
  if (routes) {
    routes.forEach(route => {
      router[route.method](route.url, async ctx => {
        ctx.body = await route.descriptor.value.call({ ctx, service }, ctx, service)
      })
    })
  }
  router.controller = target.name
  controller[target.name] = target

  return router
}

export default Controller
