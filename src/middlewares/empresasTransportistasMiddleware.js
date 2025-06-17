const { EmpresaTransportista } = require("../models");

const middleware = {};

middleware.validateIdEmpresaTransportista = async (req, res, next) => {
  const id = req.params.id;
  const empresaTransportista = await EmpresaTransportista.findByPk(id);
  if (!empresaTransportista) {
    res
      .status(404)
      .json({ message: `no exista la empresa transportista con el id: ${id}` });
  }
  next();
};

module.export = middleware;
