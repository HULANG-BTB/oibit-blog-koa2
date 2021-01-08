const createResponse = async (ctx, next) => {
  const response = {
    code: 100,
    data: null,
    error: null
  }
  try {
    await next()
    response.data = ctx.body
  } catch (e) {
    response.code = 200
    response.error = e.message
  } finally {
    ctx.body = response
  }
}

const createMiddleWare = () => {
  return createResponse
}

export default createMiddleWare
