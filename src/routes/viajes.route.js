const { Router } = require("express");
const routes = Router();

const { viajes } = require("../controller");

routes.get("/viajes", viajes.getAllViajes);
routes.get("/viajes/count", viajes.getCountViajesActivos);
routes.post("/viajes", viajes.createViaje);
routes.put("/viajes/:id", viajes.updateViaje);
routes.get("/viajes/:id", viajes.getViajesById);
routes.delete("/viajes/:id", viajes.deleteViaje);
module.exports = routes;
