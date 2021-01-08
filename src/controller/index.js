import user from './user'
import article from './article'
import upload from './upload'

const initControllers = ctx => {
  const User = user.init(ctx)
  const Article = article.init(ctx)
  const Upload = upload.init(ctx)
  return {
    User,
    Article,
    Upload
  }
}

export default initControllers
