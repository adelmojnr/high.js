const high = require('./index.js')
const app = high()
const http = require('http')
app.listen(3000, () => {
  console.log('Server is working')
})

app.get('/', (req, res) => {
  res.send('Hi')
})
