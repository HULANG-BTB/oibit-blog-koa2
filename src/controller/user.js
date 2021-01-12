import { Controller, PostMapping, GetMapping } from '../lib/core/decorator'

@Controller
class User {
  static prefix = '/api/user'

  @PostMapping('/login')
  static async login() {
    const { username, password } = this.ctx.request.body
    const data = { username, password }
    const result = await this.service.User.login(data)
    return result
  }

  @GetMapping('/profile')
  static async profile() {
    // const { id } = this.ctx.session
    // if (id) {
    //   return await this.service.User.profile({ id })
    // } else {
    //   throw new Error('You must login first.')
    // }
  }
}

export default User
