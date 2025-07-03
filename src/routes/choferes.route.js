const { Router } = require("express");
const { choferesMiddleware } = require("../middlewares");
const { choferSchema } = require("../schemas");
const schemaValidator = require("../middlewares/schemaValidator");
const routes = Router();

const { choferes } = require("../controller");

routes.get("/choferes", choferes.getAllChoferes);
routes.get("/choferes/count", choferes.getCountChoferesActivos);
routes.post("/choferes", choferes.createChofer);
routes.put("/choferes/:id", choferes.updateChofer);
routes.get(
  "/choferes/:id",
  choferesMiddleware.validateIdChofer,
  choferes.getChoferById
);
routes.delete("/choferes/:id", choferes.deleteChofer);

module.exports = routes;
