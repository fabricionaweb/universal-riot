/* global riot,page */
const routes = require('./routes')

routes.generate('client', riot, { get: page })

page()
