const express = require('express');
const router = express.Router();

const viajesRoutes = require('./viajes.route');
const empresasTransportistasRoutes = require('./empresasTransportistas.route');
const choferesRoutes = require('./choferes.route')


router.use('/viajes', viajesRoutes);
router.use('/empresas', empresasTransportistasRoutes);
router.use('/choferes', choferesRoutes);

module.exports = router;
