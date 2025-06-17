const { Viaje } = require("../models");

const middleware = {};

middleware.validateIdViaje = async (req, res, next) => {
  const id = req.params.id;
  const viaje = await Viaje.findByPk(id);
  if (!viaje) {
    return res
      .status(404)
      .json({ message: `no existe el viaje con el id: ${id}` });
  }
  next();
};

module.exports = middleware;
