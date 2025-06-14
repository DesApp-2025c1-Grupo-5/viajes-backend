const { Deposito } = require("../models");

const middleware = {};

middleware.validateIdDeposito = async (req, res, next) => {
  const id = req.params.id;
  const deposito = await Deposito.findByPk(id);
  if (!deposito) {
    return res
      .status(404)
      .json({ message: `no existe el deposito con el id: ${id}` });
  }
};

module.export = middleware;
