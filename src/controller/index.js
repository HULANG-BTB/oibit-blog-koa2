import article from './article'
import upload from './upload'

const initControllers = ctx => {
  const Article = article.init(ctx)
  const Upload = upload.init(ctx)
  return {
    Article,
    Upload
  }
}

export default initControllers
