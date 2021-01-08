import koaRouter from 'koa-router'
import initControllers from '../controller'

const router = koaRouter()

const controller = initControllers()

router.prefix('/article')

router.get('/', async ctx => {
  ctx.body = await controller.Article.query()
})

export default router
