import koaRouter from 'koa-router'
import jwtconfig from '../../../config/jwt'
import jwt from 'jsonwebtoken'

import { service } from './service'

export const controller = {}

export function Controller() {
  const target = arguments[0]
  const routes = target.routes
  const prefix = target.prefix
  const authentication = target.authentication || []
  const controllerName = target.toString().match(/^function (.*)\(\)\s/)[1]
  const router = new koaRouter()
  if (prefix) {
    router.prefix(prefix)
  }
  if (routes) {
    // console.log(routes)
    routes.forEach(route => {
      // console.log(route)
      router[route.method](route.url, async ctx => {
        if (authentication.indexOf(route.props) !== -1) {
          // need auth
          // getAccessToken from Header
          const accessToken = ctx.request.header.authorization || ''
          if (!accessToken) {
            ctx.status = 401
            throw new Error('Unauthorized')
          }
          try {
            const data = jwt.verify(accessToken, jwtconfig.publickKey, { algorithms: jwtconfig.algorithm })
            ctx.request.header.auth = data
            ctx.auth = data
          } catch {
            ctx.status = 401
            throw new Error('Unauthorized')
          }
        }
        ctx.body = await route.descriptor.value.call({ ctx, service })
      })
    })
  }
  router.controller = controllerName
  controller[controllerName] = target

  return router
}

export default Controller
