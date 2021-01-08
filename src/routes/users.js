const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
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
router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
