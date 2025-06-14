const { Vehiculo } = require("../models");
const controller = {};

controller.getAllVehiculos = async (_, res) => {
  const vehiculos = await Vehiculo.findAll({});
  res.status(200).json(vehiculos);
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

module.exports = controller;
