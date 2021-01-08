import koaRouter from 'koa-router'
import initControllers from '../controller'

const router = koaRouter()

const controller = initControllers()

router.prefix('/api/article')

router.get('/list', async ctx => {
  ctx.body = await controller.Article.list()
})

router.get('/archive', async ctx => {
  ctx.body = await controller.Article.archive()
})

router.get('/detail', async ctx => {
  ctx.body = await controller.Article.detail()
})

router.post('/insert', async ctx => {
  ctx.body = await controller.Article.insert()
})

export default router
