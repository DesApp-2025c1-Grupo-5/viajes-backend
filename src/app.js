const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes')
const db = require('./models')
const crearValoresInicialesDB = require('./seeders/semillaInicial')
const { sequelize } = require('./models');
sequelize.sync()

app.use(cors());
app.use(express.json());
app.use(routes)


async function startDB(){
  try{
    await db.sequelize.sync({}) 
    await crearValoresInicialesDB()
    console.log("Base de datos iniciada correctamente ✅")
  }catch(error){
     console.log("☠ No se pudo crear la base de datos por:", error)
  }
}

startDB()


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});