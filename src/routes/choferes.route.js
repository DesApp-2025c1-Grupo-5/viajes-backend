const {Router} = require('express')
const routes= Router();

const { choferes } = require('../controller');

routes.get('/choferes',choferes.getAllChoferes)
routes.post('/choferes',choferes.createChofer)
routes.put('/choferes/:id',choferes.updateChofer)
module.exports = routes;