const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const { origen, destino, fechaSalida, fechaLlegada } = req.query;

  let baseQuery = 'SELECT * FROM viajes WHERE 1=1';
  const values = [];
  let index = 1;

  if (origen) {
    baseQuery += ` AND origen = $${index}`;
    values.push(origen);
    index++;
  }

  if (destino) {
    baseQuery += ` AND destino = $${index}`;
    values.push(destino);
    index++;
  }

  if (fechaSalida) {
    baseQuery += ` AND fecha_salida = $${index}`;
    values.push(fechaSalida);
    index++;
  }

  if (fechaLlegada) {
    baseQuery += ` AND fecha_llegada = $${index}`;
    values.push(fechaLlegada);
    index++;
  }

  try {
    const result = await db.query(baseQuery, values);
    res.json(result.rows);
  } catch (error) {
    console.error('Error al consultar viajes con filtros:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;


