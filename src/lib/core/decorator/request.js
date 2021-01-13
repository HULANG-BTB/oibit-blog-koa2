export const RequestMethod = Object.freeze({
  ALL: 'all',
  HEAD: 'head',
  OPTIONS: 'options',
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete'
})

const checkMethod = method => {
  Object.keys(RequestMethod).forEach(key => {
    if (method === key || method === RequestMethod[key]) {
      return true
    }
  })
  return false
}

const addRoute = (target, props, descriptor, url, method) => {
  if (!target.routes) {
    target.routes = []
  }
  target.routes.push({ props, descriptor, url, method })
}

export const RequestMapping = (url, method = RequestMethod.ALL) => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('RequestMapping can only used to method.')
  }
  if (checkMethod(method)) {
    throw new Error(`Method ${method} is not allow to add to router.`)
  }
  addRoute(target, props, descriptor, url, method)
}

export const HeadMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('HeadMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.HEAD)
}

export const OptionsMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('OptionsMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.OPTIONS)
}

export const GetMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('GetMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.GET)
}

export const PostMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('PostMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.POST)
}

export const PutMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('PostMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.PUT)
}

export const PatchMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('PatchMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.PATCH)
}

export const DeleteMapping = url => (target, props, descriptor) => {
  if (!url) {
    throw new Error('params url can not be empty.')
  }
  if (props === undefined || descriptor === undefined) {
    throw new Error('DeleteMapping can only used to method.')
  }
  addRoute(target, props, descriptor, url, RequestMethod.DELETE)
}
