const express = require('express')
const riot = require('riot')
const path = require('path')

const app = express()
const routes = require('./routes')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '..', 'public')))

routes.generate(riot, app)

app.listen(port, function () {
  console.log(`Listen http://localhost:${port}`)
})
