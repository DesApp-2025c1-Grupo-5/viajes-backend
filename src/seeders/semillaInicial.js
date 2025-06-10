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
      patente: "AE 456 QW",
      modelo: "FH 540",
      marca: "Volvo",
      año: "2021",
      capacidad: "32",
      volumen: "45",
      id_empresa_transportista: empresa1.id,
      tipo_de_vehiculo: "Camión",
      nombre_transportista: empresa1.razon_social,
      observaciones: "Camión Volvo FH 540, mantenimiento oficial, cubiertas nuevas.",
    });
    const vehiculo2 = await Vehiculo.create({
      patente: "AF 789 ZX",
      modelo: "Actros 2545",
      marca: "Mercedes-Benz",
      año: "2022",
      capacidad: "38",
      volumen: "50",
      id_empresa_transportista: empresa2.id,
      tipo_de_vehiculo: "Camión",
      nombre_transportista: empresa2.razon_social,
      observaciones: "Actros 2545, equipado con GPS y aire acondicionado.",
    });
    const vehiculo3 = await Vehiculo.create({
      patente: "AC 321 LM",
      modelo: "R450 Highline",
      marca: "Scania",
      año: "2019",
      capacidad: "28",
      volumen: "42",
      id_empresa_transportista: empresa3.id,
      tipo_de_vehiculo: "Camión",
      nombre_transportista: empresa3.razon_social,
      observaciones: "Scania R450, historial de mantenimiento completo, único dueño.",
    });
    const chofer1 = await Chofer.create({
      nombre: "Juan",
      apellido: "Pérez",
      dni: "32889123",
      licencia: "B1234567",
      telefono: "+54 9 11 2345-6789",
      fecha_nacimiento: "1979-10-30",
      id_empresa_transportista: empresa1.id,
      estado: "Soltero",
      observaciones: "Chofer con más de 10 años de experiencia.",
    });
    const chofer2 = await Chofer.create({
      nombre: "Gastón",
      apellido: "Arevalo",
      dni: "43921638",
      licencia: "C7654321",
      telefono: "+54 9 11 8765-4321",
      fecha_nacimiento: "1967-01-03",
      id_empresa_transportista: empresa1.id,
      estado: "Casado",
      observaciones: "Especialista en rutas largas.",
    });
    const chofer3 = await Chofer.create({
      nombre: "María",
      apellido: "López",
      dni: "35789541",
      licencia: "D2345678",
      telefono: "+54 9 11 4561-2378",
      fecha_nacimiento: "2003-04-30",
      id_empresa_transportista: empresa1.id,
      estado: "Soltera",
      observaciones: "Recientemente incorporada al equipo.",
    });
    const deposito1 = await Deposito.create({
      nombre: "Depósito Central",
      pais: "Argentina",
      provincia: "Buenos Aires",
      direccion: "Av. Rivadavia 1234",
      coordenadas: "-34.6091, -58.3845",
      tipo: "De Tercero",
      horario: "Lunes a viernes 08:00-18:00",
      restriccion_de_acceso: "Solo personal autorizado",
      contacto: "+54 11 4000-1234",
      observaciones: "Cuenta con vigilancia 24hs.",
    });
    const deposito2 = await Deposito.create({
      nombre: "Depósito Sur",
      pais: "Argentina",
      provincia: "Santa Fe",
      direccion: "Ruta 9 km 280",
      coordenadas: "-32.9468, -60.6393",
      tipo: "Propio",
      horario: "Lunes a sábado 07:00-20:00",
      restriccion_de_acceso: "Requiere credencial",
      contacto: "+54 341 500-5678",
      observaciones: "Depósito con acceso para camiones grandes.",
    });
    const deposito3 = await Deposito.create({
      nombre: "Depósito Norte",
      pais: "Argentina",
      provincia: "Córdoba",
      direccion: "Av. Circunvalación 5000",
      coordenadas: "-31.4201, -64.1888",
      tipo: "Propio",
      horario: "Lunes a viernes 09:00-17:00",
      restriccion_de_acceso: "Ingreso con turno previo",
      contacto: "+54 351 600-7890",
      observaciones: "Espacio techado y cámaras de seguridad.",
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
      tipoDeViaje:"Nacional",
      nroViaje: 5,
      provinciaOrigen:"Buenos Aires",
      provinciaDestino:"CABA" 
    });
    const viaje2 = await Viaje.create({
      origen: "Deposito Sur",
      destino: "Deposito Central",
      fecha_salida: "2023-04-08",
      fecha_llegada: "2023-04-09",
      id_vehiculo: vehiculo2.id,
      tipoDeViaje: "Nacional",
      nroViaje: 6,
      carga: "soy una carga",
      id_chofer: chofer1.id,
      estado: "En Viaje",
      id_empresa_transportista: empresa2.id,
      observaciones: "Entrega urgente",
      provinciaOrigen: "Santa Fe",
      provinciaDestino: "Buenos Aires"
    });
    const viaje3 = await Viaje.create({
      origen: "Deposito Norte",
      destino: "Deposito Sur",
      fecha_salida: "2023-04-15",
      fecha_llegada: null,
      id_vehiculo: vehiculo3.id,
      tipoDeViaje: "Internacional",
      nroViaje: 7,
      carga: "66",
      id_chofer: chofer1.id,
      estado: "Completo",
      id_empresa_transportista: empresa3.id,
      observaciones: "Carga refrigerada",
      provinciaOrigen: "Córdoba",
      provinciaDestino: "Santa Fe"
    });
  } catch (error) {
    console.log(
      "☠ Error al crear los valores iniciales de la base de datos:",
      error
    );
  }
};

module.exports = crearValoresInicialesDB;
