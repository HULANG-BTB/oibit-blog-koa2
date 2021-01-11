const createResponse = async (ctx, next) => {
  const response = {
    code: 200,
    data: null,
    error: null
  }
  try {
    await next()
    response.data = ctx.body
  } catch (e) {
    response.code = 500
    response.error = e.message
  } finally {
    if (response.data || response.error) {
      ctx.body = response
    }
  }
}

const createMiddleWare = () => {
  return createResponse
}

export default createMiddleWare
