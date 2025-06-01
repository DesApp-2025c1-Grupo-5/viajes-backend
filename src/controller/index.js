const empresasTransportistas = require('./empresasTransportistas.controller');
const viajes = require('./viajes.controller');
const choferes = require('./choferes.controller');
const vehiculos = require('./vehiculos.controller');
const depositos = require('./depositos.controller');

module.exports = {
  empresasTransportistas,
  viajes,
  choferes,
  vehiculos,
  depositos
};
