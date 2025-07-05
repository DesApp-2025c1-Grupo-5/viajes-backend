const { Vehiculo, EmpresaTransportista } = require("../models");
const controller = {};

controller.getAllVehiculos = async (_, res) => {
  const vehiculos = await Vehiculo.findAll({ 
    include:[
      {
        model: EmpresaTransportista,
        as: "empresa",
        attributes: ["razon_social"],
      }
    ],
    where: { activo: true } 
  });

  res.status(200).json(vehiculos);
};

controller.getCountVehiculosActivos = async (_, res) => {
  const count = await Vehiculo.count({
    where: { activo: true },
  });
  res.status(200).json({ count });
};

controller.createVehiculo = async (req, res) => {
  const {
    patente,
    modelo,
    marca,
    año,
    capacidad,
    volumen,
    id_empresa_transportista,
    tipo_de_vehiculo,
    observaciones,
  } = req.body;
  const vehiculo = await Vehiculo.create({
    patente,
    modelo,
    marca,
    año,
    capacidad,
    volumen,
    id_empresa_transportista,
    tipo_de_vehiculo,
    observaciones,
  });
  res.status(201).json(vehiculo);
};

controller.updateVehiculo = async (req, res) => {
  console.log("🛠 BODY recibido:", req.body);
  const {
    patente,
    modelo,
    marca,
    año,
    capacidad,
    volumen,
    id_empresa_transportista,
    tipo_de_vehiculo,
    observaciones,
  } = req.body;

  const id = req.params.id;
  const vehiculo = await Vehiculo.findByPk(id);

  if (!vehiculo) {
    return res.status(404).json({ error: "Vehículo no encontrado" });
  }

  await vehiculo.update({
    patente,
    modelo,
    marca,
    año,
    capacidad,
    volumen,
    id_empresa_transportista,
    tipo_de_vehiculo,
    observaciones,
  });

  res.status(200).json(vehiculo);
};

controller.getVehiculoById = async (req, res) => {
  const id = req.params.id;
  const vehiculo = await Vehiculo.findOne({ where: { id } });
  res.status(201).json(vehiculo);
};

controller.deleteVehiculo = async (req, res) => {
  const id = req.params.id;
  try {
    await Vehiculo.update({ activo: false }, { where: { id } });
    res.status(200).json({ mensaje: "Vehículo desactivado" });
  } catch (error) {
    console.error("Error al desactivar vehículo:", error);
    res.status(500).json({ error: "Error al desactivar vehículo" });
  }
};

module.exports = controller;
