import user from './user'
import article from './article'

const initControllers = ctx => {
  const User = user.init(ctx)
  const Article = article.init(ctx)
  return {
    User,
    Article
  }
}

export default initControllers
