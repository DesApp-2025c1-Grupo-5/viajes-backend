const{Deposito} = require('../models')
const controller ={}

controller.getAllDepositos = async(_,res)=>{
    const depositos = await Deposito.findAll({})
    res.status(200).json(depositos)
}

controller.createDeposito = async(req,res) =>{
    const{nombre,pais,provincia,direccion,coordenadas,tipo,horario,restriccion_de_acceso,observaciones} = req.body
    const deposito = await Deposito.create({nombre,pais,provincia,direccion,coordenadas,tipo,horario,restriccion_de_acceso,observaciones})
    res.status(201).json(deposito)
}

controller.updateDeposito = async(req,res) =>{
    const{nombre,pais,provincia,direccion,coordenadas,tipo,horario,restriccion_de_acceso,observaciones} = req.body
    const id = req.params.id
    const deposito = await Deposito.findByPk(id)
    await deposito.update({nombre,pais,provincia,direccion,coordenadas,tipo,horario,restriccion_de_acceso,observaciones})
    res.status(200).json(deposito)
}


module.exports = controller