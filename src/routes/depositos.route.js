const { Router } = require("express");
const routes = Router();

const { depositos } = require("../controller");

routes.get("/depositos", depositos.getAllDepositos);
routes.post("/depositos", depositos.createDeposito);
routes.put("/depositos/:id", depositos.updateDeposito);
routes.get("/depositos/:id", depositos.getDepositoById);
routes.delete("/depositos/:id", depositos.deleteDeposito);

module.exports = routes;
