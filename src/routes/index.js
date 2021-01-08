const router = require('koa-router')()

router.get('/', async (ctx) => {
  ctx.body = 'Hello Koa 2!'
})

router.get('/string', async (ctx) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
