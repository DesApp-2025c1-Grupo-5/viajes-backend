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
      observaciones: "Aguante solo leveling",
    });
    const empresa3 = await EmpresaTransportista.create({
      razon_social: "CargoMax",
      cuit_rut: "20-45678912-3",
      email: "contacto@cargomax.com",
      telefono: "+51 945678123",
      pais: "Argentina",
      provincia_estado: "CABA",
      domicilio_fiscal: "CABA",
      observaciones: "Muerte hunter x hunter",
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
      observaciones: "Esto es otra observacion",
    });
    const vehiculo2 = await Vehiculo.create({
      patente: "3333",
      modelo: "Actroz",
      marca: "Mercedes-Benz",
      año: "2021",
      capacidad: "882",
      volumen: "300",
      id_empresa_transportista: empresa1.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "Esto es otra observacion",
    });
    const vehiculo3 = await Vehiculo.create({
      patente: "34342",
      modelo: "R450",
      marca: "Scania",
      año: "2003",
      capacidad: "26",
      volumen: "06",
      id_empresa_transportista: empresa1.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "Esto es otra observacion",
    });
    const chofer1 = await Chofer.create({
      nombre: "Juan",
      apellido: "Pérez",
      DNI: "3288912",
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
      DNI: "43921638",
      licencia: "5678",
      telefono: "87654321",
      fecha_nacimiento: "1967-01-03",
      id_empresa_transportista: empresa1.id,
      estado: "Casado?",
      observaciones: "observaba el loco",
    });
    const chofer3 = await Chofer.create({
      nombre: "María",
      apellido: "López",
      DNI: "35789541",
      licencia: "9876",
      telefono: "45612378",
      fecha_nacimiento: "2003-04-30",
      id_empresa_transportista: empresa1.id,
      estado: "En algo?",
      observaciones: "Te acordas que no paraba de observar",
    });
    const deposito1 = await Deposito.create({
      nombre: "Deposito Central",
      pais: "Argentina",
      provincia: "Buenos Aires",
      direccion: "Av.Principal 123",
      coordenadas: "26°06'11 te fuiste a la B por **** y *****",
      tipo: "no se",
      horario: "que se yo",
      restriccion_de_acceso: "???",
      observaciones:
        "perdon al que este viendo esto es tarde y no se que poner en estos campos",
    });
    const deposito2 = await Deposito.create({
      nombre: "Deposito Sur",
      pais: "México",
      provincia: "Jalisco",
      direccion: "Av. Tecnológica 456",
      coordenadas: "9°12'18 para que gastón no se enoje",
      tipo: "asdasdad",
      horario: "a las 3 de la tarde que se yo",
      restriccion_de_acceso: "no se que es este campo :(",
      observaciones: "sigo sin saber que poner",
    });
    const deposito3 = await Deposito.create({
      nombre: "Deposito Norte",
      pais: "Argentina",
      provincia: "Buenos Aires",
      direccion: "Av. de la Industria 1234",
      coordenadas: "18°12'22 esta locuraaaaa",
      tipo: "me rindo asdasd",
      horario: "asadsd",
      restriccion_de_acceso: "asdasd",
      observaciones: "asdasdsa",
    });
    const viaje1 = await Viaje.create({
      origen: "Deposito Central",
      destino: "Deposito Norte",
      fecha_salida: "2023-04-12",
      fecha_llegada: "2023-04-25",
      id_vehiculo: vehiculo1.id,
      carga: "andá a saber",
      id_chofer: chofer1.id,
      estado: "preguntenle al chofer",
    //   id_empresa_transportista: "",
      observaciones: "*observa*",
    });
    const viaje2 = await Viaje.create({
      origen: "Deposito Sur",
      destino: "Deposito Central",
      fecha_salida: "2023-04-08",
      fecha_llegada: "2023-04-09",
      id_vehiculo: vehiculo1.id,
      carga: "me estoy quedando sin ideas ayuda",
      id_chofer: chofer1.id,
      estado: "no se que mas poner",
    //   id_empresa_transportista: "",
      observaciones: "falta poco para terminar",
    });
    const viaje3 = await Viaje.create({
      origen: "Deposito Norte",
      destino: "Deposito Sur",
      fecha_salida: "2023-04-15",
      fecha_llegada: "-",
      id_vehiculo: vehiculo1.id,
      carga: "cada vez menos...",
      id_chofer: chofer1.id,
      estado: "ahí nomas...",
    //   id_empresa_transportista: "",
      observaciones: "colorín colorado las observaciones se han terminado.",
    });
  } catch (error) {
    console.log(
      "☠ Error al crear los valores iniciales de la base de datos:",
      error
    );
  }
};

module.exports = crearValoresInicialesDB;
