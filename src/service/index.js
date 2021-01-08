import article from './article'

const initServices = () => {
  const Article = article.init()

  return {
    Article
  }
}

export default initServices
