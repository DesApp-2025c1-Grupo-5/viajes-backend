const { Viaje, Vehiculo, EmpresaTransportista } = require("../models");
const controller = {};

controller.getAllViajes = async (_, res) => {
  try {
    const viajes = await Viaje.findAll({
      include: [
        {
          model: Vehiculo,
          as: "vehiculo",
          attributes: ["patente"],
        },
        {
          model: EmpresaTransportista,
          as: "empresaTransportista",
          attributes: ["razon_social"],
        },
      ],
      where: { activo: true },
    });
    res.status(200).json(viajes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener los viajes" });
  }
};

controller.createViaje = async (req, res) => {
  const {
    origen,
    destino,
    fecha_salida,
    fecha_llegada,
    id_empresa_transportista,
    id_chofer,
    id_vehiculo,
    tipoDeViaje,
    observaciones,
  } = req.body;
  const viaje = await Viaje.create({
    origen,
    destino,
    fecha_salida,
    fecha_llegada,
    id_empresa_transportista,
    id_chofer,
    id_vehiculo,
    tipoDeViaje,
    observaciones,
  });
  res.status(201).json(viaje);
};

controller.updateViaje = async (req, res) => {
  const {
    origen,
    destino,
    fecha_salida,
    fecha_llegada,
    id_vehiculo,
    carga,
    id_chofer,
    estado,
    observaciones,
    tipoDeViaje,
    nroViaje,
    id_empresa_transportista,
    provinciaOrigen,
    provinciaDestino,
  } = req.body;
  const id = req.params.id;
  const viaje = await Viaje.findByPk(id);
  await viaje.update({
    origen,
    destino,
    fecha_salida,
    fecha_llegada,
    id_vehiculo,
    carga,
    id_chofer,
    estado,
    observaciones,
    tipoDeViaje,
    nroViaje,
    id_empresa_transportista,
    provinciaOrigen,
    provinciaDestino,
  });
  res.status(200).json(viaje);
};

controller.getViajesById = async (req, res) => {
  const id = req.params.id;
  const viaje = await Viaje.findOne({ where: { id } });
  res.status(201).json(viaje);
};

controller.deleteViaje = async (req, res) => {
  const id = req.params.id;
  try {
    await Viaje.update({ activo: false }, { where: { id } });
    res.status(200).json({ mensaje: "Viaje desactivado" });
  } catch (error) {
    console.error("Error al desactivar viaje:", error);
    res.status(500).json({ error: "Error al desactivar viaje" });
  }
};

module.exports = controller;
