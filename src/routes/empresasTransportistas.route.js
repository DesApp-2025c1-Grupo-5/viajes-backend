const { Router } = require("express");
const routes = Router();

const { empresasTransportistas } = require("../controller");

routes.get("/empresasTransportistas", empresasTransportistas.getAllEmpresas);
routes.post("/empresasTransportistas", empresasTransportistas.createEmpresa);
routes.put("/empresasTransportistas/:id", empresasTransportistas.updateEmpresa);
routes.get(
  "/empresasTransportistas/:id",
  empresasTransportistas.getEmpresaTransportistaById
);
module.exports = routes;
