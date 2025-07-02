const { where } = require("sequelize");
const { EmpresaTransportista } = require("../models");
const controller = {};

controller.getAllEmpresas = async (_, res) => {
  const empresas = await EmpresaTransportista.findAll({
    where: { activo: true },
  });
  res.status(200).json(empresas);
};

controller.getCountEmpresasActivas = async (_, res) => {
  const count = await EmpresaTransportista.count({
    where: { activo: true },
  });
  res.status(200).json({ count });
};

controller.createEmpresa = async (req, res) => {
  const {
    razon_social,
    cuit_rut,
    email,
    telefono,
    pais,
    provincia_estado,
    domicilio_fiscal,
    observaciones,
  } = req.body;
  const empresa = await EmpresaTransportista.create({
    razon_social,
    cuit_rut,
    email,
    telefono,
    pais,
    provincia_estado,
    domicilio_fiscal,
    observaciones,
  });
  res.status(201).json(empresa);
};

controller.updateEmpresa = async (req, res) => {
  const {
    razon_social,
    cuit_rut,
    email,
    telefono,
    pais,
    provincia_estado,
    domicilio_fiscal,
    observaciones,
  } = req.body;
  const id = req.params.id;
  const empresa = await EmpresaTransportista.findByPk(id);
  await empresa.update({
    razon_social,
    cuit_rut,
    email,
    telefono,
    pais,
    provincia_estado,
    domicilio_fiscal,
    observaciones,
  });
  res.status(200).json(empresa);
};

controller.getEmpresaTransportistaById = async (req, res) => {
  const id = req.params.id;
  const empresaTransportista = await EmpresaTransportista.findOne({
    where: { id },
  });
  res.status(201).json(empresaTransportista);
};

controller.deleteTransportista = async (req, res) => {
  const id = req.params.id;
  try {
    await EmpresaTransportista.update({ activo: false }, { where: { id } });
    res.status(200).json({ mensaje: "Empresa transportista desactivada" });
  } catch (error) {
    console.error("Error al desactivar la empresa transportista:", error);
    res.status(500).json({ error: "Error al desactivar depósito" });
  }
};

module.exports = controller;
