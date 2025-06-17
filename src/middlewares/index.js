const choferesMiddleware = require("./choferes.middleware");
const depositosMiddleware = require("./depositos.middleware");
const empresasTransportistasMiddleware = require("./empresasTransportistasMiddleware");
const vehiculosMiddleware = require("./vehiculos.middleware");
const viajesMiddleware = require("./viajes.middleware");

module.exports = {
  choferesMiddleware,
  depositosMiddleware,
  empresasTransportistasMiddleware,
  vehiculosMiddleware,
  viajesMiddleware,
};
