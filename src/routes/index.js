const express = require('express');
const router = express.Router();

const viajesRoutes = require('./viajesRoutes');
const empresasTransportistasRoutes = require('./empresasTransportistasRoutes');

router.use('/viajes', viajesRoutes);
router.use('/empresas', empresasTransportistasRoutes);

module.exports = router;
