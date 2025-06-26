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
routes.delete(
  "/empresasTransportistas/:id",
  empresasTransportistas.deleteTransportista
);
module.exports = routes;
