import { Controller, PostMapping, GetMapping, Authentication } from '../lib/core/decorator'

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
  @Authentication
  static async profile() {
    const { id, username } = this.ctx.auth
    return await this.service.User.profile({ id, username })
  }
}

export default User
