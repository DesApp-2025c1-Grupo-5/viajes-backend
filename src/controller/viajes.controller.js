const{Viaje,Vehiculo} = require('../models')
const controller ={}

controller.getAllViajes = async(_,res)=>{
    try {
    const viajes = await Viaje.findAll({
      include: {
        model: Vehiculo,
        as: 'vehiculo',
        attributes: ['patente']
      }
    });
    res.status(200).json(viajes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los viajes' });
  }
}

controller.createViaje = async(req,res) =>{
    const{origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones,tipoDeViaje,nroViaje, id_empresa_transportista,provinciaOrigen,provinciaDestino} = req.body
    const viaje = await Viaje.create({origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones,tipoDeViaje,nroViaje,id_empresa_transportista,provinciaOrigen,provinciaDestino})
    res.status(201).json(viaje)
}

controller.updateViaje = async(req,res) =>{
    const{origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones,tipoDeViaje,nroViaje,id_empresa_transportista,provinciaOrigen,provinciaDestino} = req.body 
    const id = req.params.id
    const viaje = await Viaje.findByPk(id)
    await viaje.update({origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones,tipoDeViaje,nroViaje,id_empresa_transportista,provinciaOrigen,provinciaDestino})
    res.status(200).json(viaje)
}


module.exports = controller