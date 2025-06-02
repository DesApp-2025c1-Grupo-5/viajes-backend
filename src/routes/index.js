const express = require('express');
const router = express.Router();

const viajesRoutes = require('./viajes.route');
const empresasTransportistasRoutes = require('./empresasTransportistas.route');
const choferesRoutes = require('./choferes.route')
const vehiculosRoutes = require('./vehiculos.route');
const depositosRoutes = require('./depositos.route');


router.use('/viajes', viajesRoutes);
router.use('/empresas', empresasTransportistasRoutes);
router.use('/choferes', choferesRoutes);
router.use('/vehiculos', vehiculosRoutes);
router.use('/depositos', depositosRoutes);

module.exports = router;
