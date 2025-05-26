const express = require('express');
const router = express.Router();
const db = require('../db'); //Conexion a PostgreSQL

// Obtener transportistas
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM transportistas'); // Consulta
    res.json(result.rows); // Resultado como json
  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;