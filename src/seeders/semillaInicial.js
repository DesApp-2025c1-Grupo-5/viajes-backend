const { EmpresaTransportista } = require("../models/");
const { Vehiculo } = require("../models");
const { Chofer } = require("../models");
const { Deposito } = require("../models");
const { Viaje } = require("../models");

const crearValoresInicialesDB = async () => {
  try {
    await EmpresaTransportista.destroy({ truncate: true, cascade: true });

    const empresa1 = await EmpresaTransportista.create({
      razon_social: "Transportes Rápidos S.A",
      cuit_rut: "20123456789",
      email: "correoprueba@gmail.com",
      telefono: "+51 987654321",
      pais: "Argentina",
      provincia_estado: "Buenos Aires",
      domicilio_fiscal: "No especificado",
      observaciones: "Hola! soy una observacion",
    });
    const empresa2 = await EmpresaTransportista.create({
      razon_social: "LogiExpress",
      cuit_rut: "20-98765432-1",
      email: "info@logiexpress.com",
      telefono: "+51 912345678",
      pais: "Argentina",
      provincia_estado: "Buenos Aires",
      domicilio_fiscal: "Av. Emilio castro 5409",
      observaciones: "",
    });
    const empresa3 = await EmpresaTransportista.create({
      razon_social: "CargoMax",
      cuit_rut: "20-45678912-3",
      email: "contacto@cargomax.com",
      telefono: "+51 945678123",
      pais: "Argentina",
      provincia_estado: "CABA",
      domicilio_fiscal: "CABA",
      observaciones: "",
    });
    const vehiculo1 = await Vehiculo.create({
      patente: "1234",
      modelo: "FH342",
      marca: "Volvo",
      año: "2020",
      capacidad: "32",
      volumen: "300",
      id_empresa_transportista: empresa1.id,
      tipo_de_vehiculo: "Camion",
      nombre_transportista: empresa1.razon_social,
      observaciones: "Esto es otra observacion",
    });
    const vehiculo2 = await Vehiculo.create({
      patente: "3333",
      modelo: "Actroz",
      marca: "Mercedes-Benz",
      año: "2021",
      capacidad: "882",
      volumen: "300",
      id_empresa_transportista: empresa2.id,
      tipo_de_vehiculo: "Camion",
      nombre_transportista: empresa2.razon_social,
      observaciones: "Esto es otra observacion",
    });
    const vehiculo3 = await Vehiculo.create({
      patente: "34342",
      modelo: "R450",
      marca: "Scania",
      año: "2003",
      capacidad: "26",
      volumen: "06",
      id_empresa_transportista: empresa3.id,
      tipo_de_vehiculo: "Camion",
      nombre_transportista: empresa3.razon_social,
      observaciones: "Esto es otra observacion",
    });
    const chofer1 = await Chofer.create({
      nombre: "Juan",
      apellido: "Pérez",
      dni: "3288912",
      licencia: "1234",
      telefono: "12345678",
      fecha_nacimiento: "1979-10-30",
      id_empresa_transportista: empresa1.id,
      estado: "Soltero?",
      observaciones: "observo observo",
    });
    const chofer2 = await Chofer.create({
      nombre: "Gastón",
      apellido: "Arevalo",
      dni: "43921638",
      licencia: "5678",
      telefono: "87654321",
      fecha_nacimiento: "1967-01-03",
      id_empresa_transportista: empresa1.id,
      estado: "Casado?",
      observaciones: "",
    });
    const chofer3 = await Chofer.create({
      nombre: "María",
      apellido: "López",
      dni: "35789541",
      licencia: "9876",
      telefono: "45612378",
      fecha_nacimiento: "2003-04-30",
      id_empresa_transportista: empresa1.id,
      estado: "En algo?",
      observaciones: "",
    });
    const deposito1 = await Deposito.create({
      nombre: "Deposito Central",
      pais: "Argentina",
      provincia: "Buenos Aires",
      direccion: "Av.Principal 123",
      coordenadas: "26°06'11",
      tipo: "De Tercero",
      horario: "que se yo",
      restriccion_de_acceso: "???",
      contacto: "1111111111",
      observaciones:"",
    });
    const deposito2 = await Deposito.create({
      nombre: "Deposito Sur",
      pais: "México",
      provincia: "Jalisco",
      direccion: "Av. Tecnológica 456",
      coordenadas: "9°12'18",
      tipo: "Propio",
      horario: "12:00",
      restriccion_de_acceso: "Personal Autorizado",
      contacto: "2222222222",
      observaciones: "",
    });
    const deposito3 = await Deposito.create({
      nombre: "Deposito Norte",
      pais: "Argentina",
      provincia: "Buenos Aires",
      direccion: "Av. de la Industria 1234",
      coordenadas: "18°12'22",
      tipo: "Propio",
      horario: "asadsd",
      restriccion_de_acceso: "asdasd",
      contacto: "3333333333",
      observaciones: "",
    });
    const viaje1 = await Viaje.create({
      origen: "Deposito Central",
      destino: "Deposito Norte",
      fecha_salida: "2023-04-12",
      fecha_llegada: "2023-04-25",
      id_vehiculo: vehiculo1.id,
      carga: "12",
      id_chofer: chofer1.id,
      estado: "Despachado",
      id_empresa_transportista: empresa1.id,
      observaciones: "Buen viaje",
      tipoDeViaje:"Internacional",
      nroViaje: 5,
      provinciaOrigen:"Buenos Aires",
      provinciaDestino:"CABA" 
    });
    const viaje2 = await Viaje.create({
      origen: "Deposito Sur",
      destino: "Deposito Central",
      fecha_salida: "2023-04-08",
      fecha_llegada: "2023-04-09",
      id_vehiculo: vehiculo1.id,
      carga: "soy una carga",
      id_chofer: chofer1.id,
      estado: "En Viaje",
      //   id_empresa_transportista: "",
      observaciones: "",
    });
    const viaje3 = await Viaje.create({
      origen: "Deposito Norte",
      destino: "Deposito Sur",
      fecha_salida: "2023-04-15",
      fecha_llegada: null,
      id_vehiculo: vehiculo1.id,
      carga: "66",
      id_chofer: chofer1.id,
      estado: "Completo",
      //   id_empresa_transportista: "",
      observaciones: "",
    });
  } catch (error) {
    console.log(
      "☠ Error al crear los valores iniciales de la base de datos:",
      error
    );
  }
};

module.exports = crearValoresInicialesDB;
