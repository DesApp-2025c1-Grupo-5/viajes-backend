const{EmpresaTransportista} = require('../models')
const controller ={}

controller.getAllEmpresas = async(_,res)=>{
    const empresas = await EmpresaTransportista.findAll({})
    res.status(200).json(empresas)
}

module.exports = controller