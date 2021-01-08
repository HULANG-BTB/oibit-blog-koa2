import koaRouter from 'koa-router'
import initControllers from '../controller'

const router = koaRouter()

const controller = initControllers()

router.prefix('/users')

router.get('/query', async ctx => {
  ctx.body = await controller.User.query()
})

/**
 * @swagger
 * definitions:
 *   user:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * /users/bar:
 *   get:
 *     tags:
 *       - user
 *     description: Returns all user
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of user
 *         schema:
 *           $ref: '#/definitions/user'
 */
router.get('/bar', function (ctx) {
  ctx.body = ctx.sequelize
})

export default router
