const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite peticiones del front
app.use(express.json()); // Permite leer JSON en los request

const viajesRoutes = require('./routes/viajesRoutes');
const vehiculosRoutes = require('./routes/vehiculosRoutes');
const transportistasRoutes = require('./routes/transportistasRoutes');
const depositosRoutes = require('./routes/depositosRoutes');
const choferesRoutes = require('./routes/choferesRoutes');

app.use('/api/viajes', viajesRoutes); // Todo lo que empiece con api/viajes ve a ir a viajesRoutes
app.use('/api/vehiculos', vehiculosRoutes);
app.use('/api/transportistas', transportistasRoutes);
app.use('/api/depositos', depositosRoutes);
app.use('/api/choferes', choferesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
