const {EmpresaTransportista} = require('../models/')

const crearValoresInicialesDB = async ()=>{
    try{

        await EmpresaTransportista.destroy({ truncate: true })

        const empresa1 = await EmpresaTransportista.create({
            razon_social: "Transportes Rápidos S.A",
            cuit_rut: "20123456789",
            email:"correoprueba@gmail.com",
            telefono:"+51 987654321",
            pais:"Argentina",
            provincia_estado:"Buenos Aires",
            domicilio_fiscal:"No especificado",
            observaciones:"Hola! soy una observacion"
        });
        const empresa2 = await EmpresaTransportista.create({
            razon_social: "LogiExpress",
            cuit_rut: "20-98765432-1",
            email:"info@logiexpress.com",
            telefono:"+51 912345678",
            pais:"Argentina",
            provincia_estado:"Buenos Aires",
            domicilio_fiscal:"Av. Emilio castro 5409",
            observaciones:"Aguante solo leveling"
        });
        const empresa3 = await EmpresaTransportista.create({
            razon_social: "CargoMax",
            cuit_rut: "20-45678912-3",
            email:"contacto@cargomax.com",
            telefono:"+51 945678123",
            pais:"Argentina",
            provincia_estado:"CABA",
            domicilio_fiscal:"CABA",
            observaciones:"Muerte hunter x hunter"
        });
    }catch(error){
        console.log("☠ Error al crear los valores iniciales de la base de datos:", error)
    }
}

module.exports = crearValoresInicialesDB