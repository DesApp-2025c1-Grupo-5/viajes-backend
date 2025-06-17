const { Vehiculo } = require("../models");

const middleware = {};

middleware.validateIdVehiculo = async (req, res, next) => {
  const id = req.params.id;
  const vehiculo = await Vehiculo.findByPk(id);
  if (!vehiculo) {
    return res
      .status(404)
      .json({ message: `no existe el vehiculo con el id: ${id}` });
  }
  next();
};

module.exports = middleware;
