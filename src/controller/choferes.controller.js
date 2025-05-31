const{Chofer} = require('../models')
const controller ={}

controller.getAllChoferes = async(_,res)=>{
    const choferes = await Chofer.findAll({})
    res.status(200).json(choferes)
}

controller.createChofer = async(req,res) =>{
    const{nombre,apellido,DNI,licencia,telefono,fecha_nacimiento,id_empresa_transportista,estado,observaciones} = req.body
    const chofer = await Chofer.create({nombre,apellido,DNI,licencia,telefono,fecha_nacimiento,id_empresa_transportista,estado,observaciones})
    res.status(201).json(chofer)
}

controller.updateChofer = async(req,res) =>{
    const{nombre,apellido,DNI,licencia,telefono,fecha_nacimiento,id_empresa_transportista,estado,observaciones} = req.body 
    const id = req.params.id
    const chofer = await Chofer.findByPk(id)
    await chofer.update({nombre,apellido,DNI,licencia,telefono,fecha_nacimiento,id_empresa_transportista,estado,observaciones}) 
    res.status(200).json(chofer)
}


module.exports = controller