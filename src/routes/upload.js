import koaRouter from 'koa-router'
import initControllers from '../controller'

const router = koaRouter()

const controller = initControllers()

router.prefix('/api/upload')

router.post('/images', async ctx => {
  ctx.body = await controller.Upload.images()
})

export default router
