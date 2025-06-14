const { Router } = require("express");
const { choferesMiddleware } = require("../middlewares");
const { choferSchema } = require("../schemas");
const schemaValidator = require("../middlewares/schemaValidator");
const routes = Router();

const { choferes } = require("../controller");

routes.get("/choferes", choferes.getAllChoferes);
routes.post("/choferes", schemaValidator(choferSchema), choferes.createChofer);
routes.put(
  "/choferes/:id",
  schemaValidator(choferSchema),
  choferes.updateChofer
);
routes.get(
  "/choferes/:id",
  choferesMiddleware.validateIdChofer,
  choferes.getChoferById
);
module.exports = routes;
