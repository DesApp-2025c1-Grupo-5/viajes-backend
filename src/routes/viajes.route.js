const { Router } = require("express");
const routes = Router();

const { viajes } = require("../controller");

routes.get("/viajes", viajes.getAllViajes);
routes.post("/viajes", viajes.createViaje);
routes.put("/viajes/:id", viajes.updateViaje);
routes.get("/viajes/:id", viajes.getViajesById);
module.exports = routes;
