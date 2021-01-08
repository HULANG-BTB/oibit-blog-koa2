import koaRouter from 'koa-router'
import swaggerJsDoc from 'swagger-jsdoc'

const router = koaRouter()

const definition = {
  info: {
    title: 'API',
    version: '1.0.0',
    description: 'API'
  },
  host: 'localhost:3000',
  basePath: '/'
}

const options = {
  definition,
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJsDoc(options)

router.get('/swagger.json', async (ctx) => {
  ctx.set('Content-Type', 'application/json')
  ctx.body = swaggerSpec
})

export default router
