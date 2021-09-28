const http = require('http')
const res = Object.create(http.ServerResponse.prototype)

res.send = function (message) {
  this.writeHead(200, { 'Content-Type': 'text/html' })
  this.write(message)
  this.end()
}

Object.assign(http.ServerResponse.prototype, res)

module.exports = http
