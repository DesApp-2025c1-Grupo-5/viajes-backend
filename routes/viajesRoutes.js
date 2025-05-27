const express = require('express');
const router = express.Router();
const Viaje = require('../models/Viaje');

router.get('/', async (req, res) => {
  const { origen, destino, fechaSalida, fechaLlegada } = req.query;

  const where = {};
  if (origen) where.origen = origen;
  if (destino) where.destino = destino;
  if (fechaSalida) where.fecha_salida = fechaSalida;
  if (fechaLlegada) where.fecha_llegada = fechaLlegada;

  try {
    const viajes = await Viaje.findAll({ where });
    res.json(viajes);
  } catch (error) {
    console.error('Error al obtener viajes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
