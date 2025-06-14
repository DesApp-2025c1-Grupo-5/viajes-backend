const { Router } = require("express");
const routes = Router();

const { vehiculos } = require("../controller");

routes.get("/vehiculos", vehiculos.getAllVehiculos);
routes.post("/vehiculos", vehiculos.createVehiculo);
routes.put("/vehiculos/:id", vehiculos.updateVehiculo);
routes.get("/vehiculos/:id", vehiculos.getVehiculoById);
module.exports = routes;
