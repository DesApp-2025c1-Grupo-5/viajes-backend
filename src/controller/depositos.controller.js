const { Deposito } = require("../models");
const controller = {};

controller.getAllDepositos = async (_, res) => {
  const depositos = await Deposito.findAll({ where: { activo: true } });
  res.status(200).json(depositos);
};

controller.createDeposito = async (req, res) => {
  const {
    nombre,
    pais,
    provincia,
    direccion,
    coordenadas,
    tipo,
    horarioDesde,
    horarioHasta,
    restriccion_de_acceso,
    contacto,
    observaciones,
  } = req.body;
  const deposito = await Deposito.create({
    nombre,
    pais,
    provincia,
    direccion,
    coordenadas,
    tipo,
    horarioDesde,
    horarioHasta,
    restriccion_de_acceso,
    contacto,
    observaciones,
  });
  res.status(201).json(deposito);
};

controller.updateDeposito = async (req, res) => {
  const {
    nombre,
    pais,
    provincia,
    direccion,
    coordenadas,
    tipo,
    horarioDesde,
    horarioHasta,
    restriccion_de_acceso,
    observaciones,
  } = req.body;
  const id = req.params.id;
  const deposito = await Deposito.findByPk(id);
  await deposito.update({
    nombre,
    pais,
    provincia,
    direccion,
    coordenadas,
    tipo,
    horarioDesde,
    horarioHasta,
    restriccion_de_acceso,
    observaciones,
  });
  res.status(200).json(deposito);
};

controller.getDepositoById = async (req, res) => {
  const id = req.params.id;
  const deposito = await Deposito.findOne({ where: { id } });
  res.status(201).json(deposito);
};

controller.deleteDeposito = async (req, res) => {
  const id = req.params.id;
  try {
    await Deposito.update({ activo: false }, { where: { id } });
    res.status(200).json({ mensaje: "Deposito desactivado" });
  } catch (error) {
    console.error("Error al desactivar depósito:", error);
    res.status(500).json({ error: "Error al desactivar depósito" });
  }
};

module.exports = controller;
