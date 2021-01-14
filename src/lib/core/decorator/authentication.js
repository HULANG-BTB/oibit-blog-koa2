import jwtconfig from '../../../config/jwt'
import jwt from 'jsonwebtoken'

export const Authentication = (target, props, descriptor) => {
  // if (!target.authentication) {
  //   target.authentication = []
  // }
  // target.authentication.push(props)
  //   if (authentication.indexOf(route.props) !== -1) {
  //   // need auth
  //   // getAccessToken from Header
  //   const accessToken = ctx.request.header.authorization || ''
  //   if (!accessToken) {
  //     ctx.status = 401
  //     throw new Error('Unauthorized')
  //   }
  //   try {
  //     const data = jwt.verify(accessToken, jwtconfig.publickKey, { algorithms: jwtconfig.algorithm })
  //     ctx.request.header.auth = data
  //     ctx.auth = data
  //   } catch {
  //     ctx.status = 401
  //     throw new Error('Unauthorized')
  //   }
  // }

  // const AuthController = async function () {
  //   const value = descriptor.value
  //   return descriptor
  // }

  const method = descriptor.value

  descriptor.value = async function AuthController() {
    const { ctx } = this
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
    return await method.call(this)
  }

  // console.log(descriptor)
  return descriptor
}
