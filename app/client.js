/* global riot,page */
import routes from './routes'

routes.map(function (route) {
  const { path, component } = route

  page(path, function (req) {
    System.import(`../pages/${component}.tag`).then(() => {
      riot.mount('app', component, req.params)
    })
  })
})

page()
