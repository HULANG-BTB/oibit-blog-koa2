import koaRouter from 'koa-router'
import initControllers from '../controller'

const router = koaRouter()

const controller = initControllers()

router.prefix('/api/upload')

router.post('/images', async ctx => {
  console.log(ctx.request.files)
  ctx.body = await controller.Upload.images()
})

export default router
