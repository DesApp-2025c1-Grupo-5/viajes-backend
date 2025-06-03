const{EmpresaTransportista} = require('../models')
const controller ={}

controller.getAllEmpresas = async(_,res)=>{
    const empresas = await EmpresaTransportista.findAll({})
    res.status(200).json(empresas)
}

controller.createEmpresa = async(req,res) =>{
    const{razon_social,cuit_rut,email,telefono,pais,provincia_estado,domicilio_fiscal,observaciones} = req.body
    const empresa = await EmpresaTransportista.create({razon_social,cuit_rut,email,telefono,pais,provincia_estado,domicilio_fiscal,observaciones})
    res.status(201).json(empresa)
}

controller.updateEmpresa = async(req,res) =>{
    const{razon_social,cuit_rut,email,telefono,pais,provincia_estado,domicilio_fiscal,observaciones} = req.body
    const id = req.params.id
    const empresa = await EmpresaTransportista.findByPk(id)
    await empresa.update({razon_social,cuit_rut,email,telefono,pais,provincia_estado,domicilio_fiscal,observaciones})
    res.status(200).json(empresa)
}


module.exports = controller