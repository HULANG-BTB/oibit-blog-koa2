import koaRouter from 'koa-router'
import initControllers from '../controller'

const router = koaRouter()

const controller = initControllers()

router.prefix('/api/upload')

router.get('/image', async ctx => {
  ctx.body = await controller.Article.list()
})

export default router
