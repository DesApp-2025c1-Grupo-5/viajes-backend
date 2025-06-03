const express = require('express');
const router = express.Router();

const viajesRoutes = require('./viajes.route');
const empresasTransportistasRoutes = require('./empresasTransportistas.route');
const choferesRoutes = require('./choferes.route')
const vehiculosRoutes = require('./vehiculos.route');
const depositosRoutes = require('./depositos.route');


router.use(viajesRoutes);
router.use(empresasTransportistasRoutes);
router.use(choferesRoutes);
router.use(vehiculosRoutes);
router.use(depositosRoutes);

module.exports = router;
