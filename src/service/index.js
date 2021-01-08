import user from './user'
import article from './article'

const initServices = () => {
  const User = user
  const Article = article

  return {
    User,
    Article
  }
}

export default initServices
