const http = require('http')
const res = require('../response')

const routes = []

let registerRoutes = (method, path, callback) => {
  const route = {
    method,
    path,
    callback
  }

  routes.push(route)
}

const methods = {
  get: (path, callback) => {
    return registerRoutes("GET", path, callback)
  }
}

const routeRequest = (request, response) => {
  const method = request.method
  const url = request.url

  for(let i = 0; i < routes.length; i++) {
    const methodRoute = routes[i].method
    const pathRoute = routes[i].path
    const callbackRoute = routes[i].callback
    if(method === methodRoute && url === pathRoute){
      callbackRoute(request, response)
    }
}
}

module.exports = {
  methods,
  routeRequest: routeRequest
}
