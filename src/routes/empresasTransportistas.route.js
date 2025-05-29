const {Router} = require('express')
const routes= Router();

const { empresasTransportistas } = require('../controller');

routes.get('/empresasTransportistas',empresasTransportistas.getAllEmpresas)

module.exports = routes;