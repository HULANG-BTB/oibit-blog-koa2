import user from './user'
import article from './article'

const initServices = () => {
  const User = user.init()
  const Article = article.init()

  return {
    User,
    Article
  }
}

export default initServices
