/* global riot,page */
const routes = require('./routes')

routes.generate(riot, { get: page })

page()
