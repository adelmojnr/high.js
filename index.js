const { methods, routeRequest } = require('./lib/routes/index')
const http = require('http')
const res = require('./lib/response')

const high = () => {
  const server = http.createServer()

  const listen = (port, callback) => {
    server.listen(port, callback)
  }

  server.on('request', (request, response) => {
    routeRequest(request, response)
  })

  return {
    listen,
    get: methods.get
  }
}

module.exports = high

