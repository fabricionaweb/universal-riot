const routes = [
  {
    path: '/',
    component: 'timer'
  },
  {
    path: '/about',
    component: 'about'
  },
  {
    path: '/post/:slug',
    component: 'post'
  },
  {
    path: '*',
    component: 'not-found'
  }
]

const generate = function (origin, riot, app) {
  const isBrowser = origin === 'client'

  routes.forEach(function (route) {
    const { path } = route

    app.get(path, function (req, res) {
      let { component } = route
      req.params.browser = isBrowser

      require(`../pages/${component}.tag`)

      if (isBrowser) {
        return riot.mount('app', component, req.params)
      }

      if (component === 'not-found') {
        res.status(404)
      }

      const content = riot.render(component, req.params)
      res.render('layout', { content })
    })
  })
}

module.exports = { generate }
