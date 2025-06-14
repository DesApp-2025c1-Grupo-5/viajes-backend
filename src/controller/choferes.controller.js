const { Chofer, EmpresaTransportista, Vehiculo } = require("../models");
const controller = {};

controller.getAllChoferes = async (_, res) => {
  try {
    const choferes = await Chofer.findAll({
      include: [
        {
          model: EmpresaTransportista,
          as: "empresaTransportista",
          attributes: ["razon_social"],
        },
        {
          model: Vehiculo,
          as: "vehiculo",
          attributes: ["patente"],
        },
      ],
    });
    res.status(200).json(choferes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener los choferes" });
  }
};

controller.createChofer = async (req, res) => {
  const {
    nombre,
    apellido,
    DNI,
    licencia,
    telefono,
    fecha_nacimiento,
    id_empresa_transportista,
    estado,
    observaciones,
  } = req.body;
  const chofer = await Chofer.create({
    nombre,
    apellido,
    DNI,
    licencia,
    telefono,
    fecha_nacimiento,
    id_empresa_transportista,
    estado,
    observaciones,
  });
  res.status(201).json(chofer);
};

controller.updateChofer = async (req, res) => {
  const {
    nombre,
    apellido,
    DNI,
    licencia,
    telefono,
    fecha_nacimiento,
    id_empresa_transportista,
    estado,
    observaciones,
  } = req.body;
  const id = req.params.id;
  const chofer = await Chofer.findByPk(id);
  await chofer.update({
    nombre,
    apellido,
    DNI,
    licencia,
    telefono,
    fecha_nacimiento,
    id_empresa_transportista,
    estado,
    observaciones,
  });
  res.status(200).json(chofer);
};

controller.getChoferById = async (req, res) => {
  const id = req.params.id;
  const chofer = await Chofer.findOne({ where: { id } });
  res.status(201).json(chofer);
};

module.exports = controller;
