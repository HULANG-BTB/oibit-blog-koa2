import user from './User'

const initControllers = ctx => {
  const User = user.init(ctx)
  return {
    User
  }
}

export default initControllers
