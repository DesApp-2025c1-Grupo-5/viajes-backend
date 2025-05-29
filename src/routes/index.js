const {Router} = require('express')
const routes = Router()

const empresasTransportistasRoutes  = require('./empresasTransportistas.route');

routes.use(empresasTransportistasRoutes)


module.exports = routes

