import jwtconfig from '../../../config/jwt'
import jwt from 'jsonwebtoken'

export const Authentication = (target, props, descriptor) => {
  async function AuthMethod() {
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
    return await descriptor.value.call(this)
  }

  return {
    value: AuthMethod,
    writable: false,
    enumerable: false,
    configurable: true
  }
}
