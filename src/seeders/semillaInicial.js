const {EmpresaTransportista} = require('../models/')

const crearValoresInicialesDB = async ()=>{
    try{
        const empresa1 = await EmpresaTransportista.create({
            razonSocial: "Transportes Rápidos S.A",
            cuit_rut: "20123456789",
            email:"correoprueba@gmail.com",
            telefono:"+51 987654321",
            pais:"Argentina",
            provincia_estado:"Buenos Aires",
            domicilioFiscal:"No especificado",
            observaciones:"Hola! soy una observacion"
        });
        const empresa2 = await EmpresaTransportista.create({
            razonSocial: "LogiExpress",
            cuit_rut: "20-98765432-1",
            email:"info@logiexpress.com",
            telefono:"+51 912345678",
            pais:"Argentina",
            provincia_estado:"Buenos Aires",
            domicilioFiscal:"Av. Emilio castro 5409",
            observaciones:"Aguante solo leveling"
        });
        const empresa3 = await EmpresaTransportista.create({
            razonSocial: "CargoMax",
            cuit_rut: "20-45678912-3",
            email:"contacto@cargomax.com",
            telefono:"+51 945678123",
            pais:"Argentina",
            provincia_estado:"CABA",
            domicilioFiscal:"CABA",
            observaciones:"Muerte hunter x hunter"
        });
    }catch(error){
        console.log("☠ Error al crear los valores iniciales de la base de datos:", error)
    }
}

module.exports = crearValoresInicialesDB