const{Viajes} = require('../models')
const controller ={}

controller.getAllViajes = async(_,res)=>{
    const viajes = await Viajes.findAll({})
    res.status(200).json(viajes)
}

controller.createViajes = async(req,res) =>{
    const{origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones} = req.body
    const viaje = await Viajes.create({origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones})
    res.status(201).json(viaje)
}

controller.updateViaje = async(req,res) =>{
    const{origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones} = req.body
    const id = req.params.id
    const viaje = await Viajes.findByPk(id)
    await viaje.update({origen,destino,fecha_salida,fecha_llegada,id_vehiculo,carga,id_chofer,estado,observaciones})
    res.status(200).json(viaje)
}


module.exports = controller