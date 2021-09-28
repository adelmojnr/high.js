const http = require('http')
const res = Object.create(http.ServerResponse.prototype)

res.hi = function (message) {
  console.log('hi')
  console.log(message)
}
res.send = function (message) {
  this.writeHead(200, { 'Content-Type': 'text/html' })
  this.write(message)
  this.end()
}

Object.assign(http.ServerResponse.prototype, res)

module.exports = http
