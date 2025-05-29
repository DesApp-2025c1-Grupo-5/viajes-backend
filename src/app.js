const express = require('express');
const app = express();
const routes = require('./routes')
const { sequelize } = require('./models');
sequelize.sync()

app.use(express.json()); // Permite leer JSON en los request
app.use(routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});