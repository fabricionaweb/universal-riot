const express = require('express')
const riot = require('riot')
const path = require('path')
const routes = require('./routes')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '..', 'public')))

routes.map(function (route) {
  const { path, component } = route

  app.get(path, function (req, res) {
    const tag = require(`../pages/${component}.tag`)

    res.render('layout', {
      content: riot.render(tag, req.params)
    })
  })
})

app.listen(port, function () {
  console.log(`Listen http://localhost:${port}`)
})
