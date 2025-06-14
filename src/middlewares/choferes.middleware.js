const { Chofer } = require("../models");
const middleware = {};

middleware.validateIdChofer = async (req, res, next) => {
  const id = req.params.id;
  const chofer = await Chofer.findByPk(id);
  if (!chofer) {
    return res
      .status(404)
      .json({ message: `no existe un chofer con el id: ${id}` });
  }
  next();
};

module.exports = middleware;
