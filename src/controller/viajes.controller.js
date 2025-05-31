const{Viaje} = require('../models')
const controller ={}

controller.getAllViajes = async(_,res)=>{
    const viajes = await Viaje.findAll({})
    res.status(200).json(viajes)
}

controller.createViaje = async(req,res) =>{
    const{origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones} = req.body
    const viaje = await Viaje.create({origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones}) //id_empresa_transportista
    res.status(201).json(viaje)
}

controller.updateViaje = async(req,res) =>{
    const{origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones} = req.body //id_empresa_transportista
    const id = req.params.id
    const viaje = await Viaje.findByPk(id)
    await viaje.update({origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones}) //id_empresa_transportista
    res.status(200).json(viaje)
}


module.exports = controller