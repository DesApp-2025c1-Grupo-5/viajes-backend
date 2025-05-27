const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./config/database');

app.use(cors());
app.use(express.json());

// Rutas
const viajesRoutes = require('./routes/viajesRoutes');
const vehiculosRoutes = require('./routes/vehiculosRoutes');
const transportistasRoutes = require('./routes/transportistasRoutes');
const depositosRoutes = require('./routes/depositosRoutes');
const choferesRoutes = require('./routes/choferesRoutes');

app.use('/api/viajes', viajesRoutes);
app.use('/api/vehiculos', vehiculosRoutes);
app.use('/api/transportistas', transportistasRoutes);
app.use('/api/depositos', depositosRoutes);
app.use('/api/choferes', choferesRoutes);

const PORT = 3000; 

sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la base de datos con Sequelize');
    app.listen(PORT, () => {
      console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });
