const { EmpresaTransportista } = require("../models/");
const { Vehiculo } = require("../models");
const { Chofer } = require("../models");
const { Deposito } = require("../models");
const { Viaje } = require("../models");

const crearValoresInicialesDB = async () => {
  try {
    await EmpresaTransportista.destroy({ truncate: true, cascade: true });
    await Deposito.destroy({ truncate: true, cascade: true });

    const empresa1 = await EmpresaTransportista.create({
      razon_social: "Transportes Rápidos S.A",
      cuit_rut: "20-12345678-9",
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
    const empresa4 = await EmpresaTransportista.create({
      razon_social: "Patagonia Cargas",
      cuit_rut: "27-99887766-4",
      email: "info@patagoniacargas.com",
      telefono: "+54 92914442233",
      pais: "Argentina",
      provincia_estado: "Neuquén",
      domicilio_fiscal: "Parque Industrial Oeste",
      observaciones: "Cobertura en todo el sur argentino",
    });
    const empresa5 = await EmpresaTransportista.create({
      razon_social: "Andes Cargo S.A.",
      cuit_rut: "CL-76.345.678-K",
      email: "contacto@andescargo.cl",
      telefono: "+56 9 7654 3210",
      pais: "Chile",
      provincia_estado: "Región Metropolitana",
      domicilio_fiscal: "Av. Libertador Bernardo O'Higgins 1449, Santiago",
      observaciones: "Transporte terrestre y marítimo en la región andina",
    });
    const empresa6 = await EmpresaTransportista.create({
      razon_social: "RíoLogística SRL",
      cuit_rut: "UY-213456790012",
      email: "info@riologistica.com.uy",
      telefono: "+598 92 345 678",
      pais: "Uruguay",
      provincia_estado: "Montevideo",
      domicilio_fiscal: "Av. 18 de Julio 1250, Montevideo",
      observaciones: "Especializada en exportaciones desde el puerto de Montevideo",
    });


    const vehiculo1 = await Vehiculo.create({
      patente: "AE 456 QW",
      modelo: "FH 540",
      marca: "Volvo",
      año: "2021",
      capacidad: "32",
      volumen: "45",
      id_empresa_transportista: empresa1.id,
      tipo_de_vehiculo: "Camion",
      observaciones:
        "Camión Volvo FH 540, mantenimiento oficial, cubiertas nuevas.",
    });
    const vehiculo2 = await Vehiculo.create({
      patente: "AF 789 ZX",
      modelo: "Actros 2545",
      marca: "Mercedes-Benz",
      año: "2022",
      capacidad: "38",
      volumen: "50",
      id_empresa_transportista: empresa1.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "Actros 2545, equipado con GPS y aire acondicionado.",
    });
    const vehiculo3 = await Vehiculo.create({
      patente: "AC 321 LM",
      modelo: "R450 Highline",
      marca: "Scania",
      año: "2019",
      capacidad: "28",
      volumen: "42",
      id_empresa_transportista: empresa2.id,
      tipo_de_vehiculo: "Automovil",
      observaciones:
        "Scania R450, historial de mantenimiento completo, único dueño.",
    });
    const vehiculo4 = await Vehiculo.create({
      patente: "AD 654 RT",
      modelo: "T680",
      marca: "Kenworth",
      año: "2020",
      capacidad: "40",
      volumen: "55",
      id_empresa_transportista: empresa2.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "Kenworth T680, climatizador y suspensión neumática.",
    });
    const vehiculo5 = await Vehiculo.create({
      patente: "AB 098 HG",
      modelo: "Cascadia",
      marca: "Freightliner",
      año: "2023",
      capacidad: "45",
      volumen: "60",
      id_empresa_transportista: empresa3.id,
      tipo_de_vehiculo: "Automovil",
      observaciones: "Cascadia última generación, gran eficiencia en combustible.",
    });
    const vehiculo6 = await Vehiculo.create({
      patente: "AE 765 QL",
      modelo: "TGS 26.500",
      marca: "MAN",
      año: "2021",
      capacidad: "36",
      volumen: "48",
      id_empresa_transportista: empresa3.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "MAN TGS, excelente rendimiento para transporte de carga pesada.",
    });
    const vehiculo7 = await Vehiculo.create({
      patente: "CH 987 FK",
      modelo: "FH 460",
      marca: "Volvo",
      año: "2022",
      capacidad: "42",
      volumen: "54",
      id_empresa_transportista: empresa4.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "FH 460 operando en rutas internacionales. Excelente estado.",
    });
    const vehiculo8 = await Vehiculo.create({
      patente: "UY 234 BR",
      modelo: "Axor 1933",
      marca: "Mercedes-Benz",
      año: "2020",
      capacidad: "34",
      volumen: "46",
      id_empresa_transportista: empresa4.id,
      tipo_de_vehiculo: "Camioneta",
      observaciones: "Axor ideal para rutas llanas, mantenimiento al día.",
    });
    const vehiculo9 = await Vehiculo.create({
      patente: "AA 101 BB",
      modelo: "FMX 500",
      marca: "Volvo",
      año: "2020",
      capacidad: "35",
      volumen: "48",
      id_empresa_transportista: empresa5.id,
      tipo_de_vehiculo: "Automovil",
      observaciones: "FMX de alto rendimiento, ideal para cargas pesadas.",
    });
    const vehiculo10 = await Vehiculo.create({
      patente: "AC 202 CC",
      modelo: "Tector 170E",
      marca: "Iveco",
      año: "2021",
      capacidad: "28",
      volumen: "40",
      id_empresa_transportista: empresa5.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "Iveco Tector, confiable y económico en consumo.",
    });
    const vehiculo11 = await Vehiculo.create({
      patente: "AD 303 DD",
      modelo: "Actros 2651",
      marca: "Mercedes-Benz",
      año: "2019",
      capacidad: "37",
      volumen: "49",
      id_empresa_transportista: empresa6.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "Actros con freno hidráulico, cabina doble.",
    });
    const vehiculo12 = await Vehiculo.create({
      patente: "AE 404 EE",
      modelo: "XF 530",
      marca: "DAF",
      año: "2023",
      capacidad: "45",
      volumen: "60",
      id_empresa_transportista: empresa6.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "DAF XF, camión de última tecnología.",
    });
    const vehiculo13 = await Vehiculo.create({
      patente: "AF 505 FF",
      modelo: "TGS 18.440",
      marca: "MAN",
      año: "2022",
      capacidad: "42",
      volumen: "56",
      id_empresa_transportista: empresa1.id,
      tipo_de_vehiculo: "Automovil",
      observaciones: "MAN con suspensión inteligente y climatizador.",
    });
    const vehiculo14 = await Vehiculo.create({
      patente: "AG 606 GG",
      modelo: "FH 500",
      marca: "Volvo",
      año: "2020",
      capacidad: "40",
      volumen: "52",
      id_empresa_transportista: empresa2.id,
      tipo_de_vehiculo: "Camioneta",
      observaciones: "FH 500, usado en rutas largas nacionales.",
    });
    const vehiculo15 = await Vehiculo.create({
      patente: "AH 707 HH",
      modelo: "Cascadia 126",
      marca: "Freightliner",
      año: "2021",
      capacidad: "43",
      volumen: "58",
      id_empresa_transportista: empresa3.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "Cascadia ideal para trayectos internacionales.",
    });
    const vehiculo16 = await Vehiculo.create({
      patente: "AI 808 II",
      modelo: "Stralis Hi-Way",
      marca: "Iveco",
      año: "2018",
      capacidad: "33",
      volumen: "44",
      id_empresa_transportista: empresa4.id,
      tipo_de_vehiculo: "Automovil",
      observaciones: "Stralis con caja automática, buen estado.",
    });
    const vehiculo17 = await Vehiculo.create({
      patente: "AJ 909 JJ",
      modelo: "P 410",
      marca: "Scania",
      año: "2022",
      capacidad: "38",
      volumen: "50",
      id_empresa_transportista: empresa5.id,
      tipo_de_vehiculo: "Camioneta",
      observaciones: "Scania P 410, mantenimiento recién hecho.",
    });
    const vehiculo18 = await Vehiculo.create({
      patente: "AK 010 KK",
      modelo: "FM 450",
      marca: "Volvo",
      año: "2019",
      capacidad: "36",
      volumen: "47",
      id_empresa_transportista: empresa6.id,
      tipo_de_vehiculo: "Camion",
      observaciones: "FM 450, motor eficiente, ideal para carga general.",
    });


    const chofer1 = await Chofer.create({
      nombre: "Juan",
      apellido: "Pérez",
      dni: "32889123",
      licencia: "B1234567",
      telefono: "+54 9 11 2345-6789",
      fecha_nacimiento: "1979-10-30",
      id_empresa_transportista: empresa1.id,
      id_vehiculo: vehiculo1.id,
      estado: "Disponible",
      observaciones: "Chofer con más de 10 años de experiencia.",
    });
    const chofer2 = await Chofer.create({
      nombre: "Gastón",
      apellido: "Arevalo",
      dni: "43921638",
      licencia: "C7654321",
      telefono: "+54 9 11 8765-4321",
      fecha_nacimiento: "1967-01-03",
      id_empresa_transportista: empresa2.id,
      id_vehiculo: vehiculo3.id,
      estado: "Disponible",
      observaciones: "Especialista en rutas largas.",
    });
    const chofer3 = await Chofer.create({
      nombre: "María",
      apellido: "López",
      dni: "35789541",
      licencia: "D2345678",
      telefono: "+54 9 11 4561-2378",
      fecha_nacimiento: "2003-04-30",
      id_empresa_transportista: empresa2.id,
      id_vehiculo: vehiculo4.id,
      estado: "Disponible",
      observaciones: "Recientemente incorporada al equipo.",
    });
    const chofer4 = await Chofer.create({
      nombre: "Carlos",
      apellido: "González",
      dni: "31245678",
      licencia: "E3456789",
      telefono: "+54 9 11 3344-5566",
      fecha_nacimiento: "1985-07-15",
      id_empresa_transportista: empresa3.id,
      id_vehiculo: vehiculo5.id,
      estado: "Disponible",
      observaciones: "Chofer con experiencia en transporte refrigerado.",
    });
    const chofer5 = await Chofer.create({
      nombre: "Lucía",
      apellido: "Martínez",
      dni: "34567890",
      licencia: "F4567890",
      telefono: "+54 9 11 7788-9900",
      fecha_nacimiento: "1990-12-01",
      id_empresa_transportista: empresa4.id,
      id_vehiculo: vehiculo7.id,
      estado: "Disponible",
      observaciones: "Licencia internacional habilitada.",
    });
    const chofer6 = await Chofer.create({
      nombre: "Andrés",
      apellido: "Suárez",
      dni: "30112233",
      licencia: "G5678901",
      telefono: "+54 9 11 6677-8899",
      fecha_nacimiento: "1975-03-22",
      id_empresa_transportista: empresa5.id,
      id_vehiculo: vehiculo9.id,
      estado: "Disponible",
      observaciones: "Conductor senior, gran responsabilidad.",
    });
    const chofer7 = await Chofer.create({
      nombre: "Paula",
      apellido: "Ramírez",
      dni: "33221100",
      licencia: "H6789012",
      telefono: "+54 9 11 5566-7788",
      fecha_nacimiento: "1988-09-10",
      id_empresa_transportista: empresa6.id,
      id_vehiculo: vehiculo11.id,
      estado: "Disponible",
      observaciones: "Excelente desempeño en zonas rurales.",
    });
    const chofer8 = await Chofer.create({
      nombre: "Fernando",
      apellido: "Mendoza",
      dni: "38990123",
      licencia: "I7890123",
      telefono: "+54 9 11 9988-7766",
      fecha_nacimiento: "1982-02-14",
      id_empresa_transportista: empresa4.id,
      id_vehiculo: vehiculo8.id,
      estado: "Disponible",
      observaciones: "Amplio conocimiento de rutas del interior.",
    });
    const chofer9 = await Chofer.create({
      nombre: "Sofía",
      apellido: "Herrera",
      dni: "37881234",
      licencia: "J8901234",
      telefono: "+54 9 11 2233-4455",
      fecha_nacimiento: "1995-11-20",
      id_empresa_transportista: empresa1.id,
      id_vehiculo: vehiculo2.id,
      estado: "Disponible",
      observaciones: "Conductora muy puntual y organizada.",
    });
    const chofer10 = await Chofer.create({
      nombre: "Héctor",
      apellido: "Cabrera",
      dni: "33445566",
      licencia: "K9012345",
      telefono: "+54 9 11 8877-6655",
      fecha_nacimiento: "1970-06-18",
      id_empresa_transportista: empresa3.id,
      id_vehiculo: vehiculo6.id,
      estado: "Disponible",
      observaciones: "Veterano del transporte con 30 años de trayectoria.",
    });



    const deposito1 = await Deposito.create({
      nombre: "Deposito Central",
      pais: "Argentina",
      provincia: "Buenos Aires",
      direccion: "Av. Rivadavia 1234",
      coordenadas: "-34.6091, -58.3845",
      tipo: "Tercero",
      horarioDesde: "07:00:00",
      horarioHasta: "17:00:00",
      restriccion_de_acceso: "Todo el Personal",
      contacto: "+54 11 4000-1234",
      observaciones: "Cuenta con vigilancia 24hs.",
    });

    const deposito2 = await Deposito.create({
      nombre: "Deposito Sur",
      pais: "Argentina",
      provincia: "Santa Fe",
      direccion: "Ruta 9 km 280",
      coordenadas: "-32.9468, -60.6393",
      tipo: "Propio",
      horarioDesde: "07:00:00",
      horarioHasta: "17:00:00",
      restriccion_de_acceso: "Solo Personal Autorizado",
      contacto: "+54 341 500-5678",
      observaciones: "Depósito con acceso para camiones grandes.",
    });

    const deposito3 = await Deposito.create({
      nombre: "Deposito Norte",
      pais: "Argentina",
      provincia: "Córdoba",
      direccion: "Av. Circunvalación 5000",
      coordenadas: "-31.4201, -64.1888",
      tipo: "Propio",
      horarioDesde: "07:00:00",
      horarioHasta: "17:00:00",
      restriccion_de_acceso: "Solo Personal Autorizado",
      contacto: "+54 351 600-7890",
      observaciones: "Espacio techado y cámaras de seguridad.",
    });
    const deposito4 = await Deposito.create({
      nombre: "Depósito Andino",
      pais: "Argentina",
      provincia: "Mendoza",
      direccion: "Carril Rodríguez Peña 3020",
      coordenadas: "-32.8908, -68.8272",
      tipo: "Tercero",
      horarioDesde: "06:00:00",
      horarioHasta: "16:00:00",
      restriccion_de_acceso: "Todo el Personal",
      contacto: "+54 261 430-1122",
      observaciones: "Depósito especializado en cargas delicadas.",
    });
    const deposito5 = await Deposito.create({
      nombre: "Depósito Litoral",
      pais: "Argentina",
      provincia: "Entre Ríos",
      direccion: "Camino Costanera 555",
      coordenadas: "-31.7319, -60.5238",
      tipo: "Propio",
      horarioDesde: "08:00:00",
      horarioHasta: "18:00:00",
      restriccion_de_acceso: "Todo el Personal",
      contacto: "+54 343 410-3344",
      observaciones: "Instalaciones nuevas con rampa hidráulica.",
    });
    const deposito6 = await Deposito.create({
      nombre: "Depósito Patagonia",
      pais: "Argentina",
      provincia: "Neuquén",
      direccion: "Ruta Nacional 22, km 1230",
      coordenadas: "-38.9516, -68.0591",
      tipo: "Tercero",
      horarioDesde: "09:00:00",
      horarioHasta: "19:00:00",
      restriccion_de_acceso: "Todo el Personal",
      contacto: "+54 299 420-5566",
      observaciones: "Zona de carga refrigerada disponible.",
    });
    const deposito7 = await Deposito.create({
      nombre: "Depósito Santiago",
      pais: "Chile",
      provincia: "Región Metropolitana",
      direccion: "Av. Independencia 2345",
      coordenadas: "-33.4350, -70.6483",
      tipo: "Propio",
      horarioDesde: "07:30:00",
      horarioHasta: "18:00:00",
      restriccion_de_acceso: "Solo Personal Autorizado",
      contacto: "+56 2 2890 1234",
      observaciones: "Centro logístico con patio de maniobras amplio.",
    });
    const deposito8 = await Deposito.create({
      nombre: "Depósito Valparaíso",
      pais: "Chile",
      provincia: "Valparaíso",
      direccion: "Camino La Pólvora km 15",
      coordenadas: "-33.0472, -71.6127",
      tipo: "Tercero",
      horarioDesde: "08:00:00",
      horarioHasta: "17:30:00",
      restriccion_de_acceso: "Solo Personal Autorizado",
      contacto: "+56 32 250 5678",
      observaciones: "Depósito portuario con acceso directo al muelle.",
    });
    const deposito9 = await Deposito.create({
      nombre: "Depósito Montevideo",
      pais: "Uruguay",
      provincia: "Montevideo",
      direccion: "Av. Italia 3050",
      coordenadas: "-34.8836, -56.1819",
      tipo: "Propio",
      horarioDesde: "07:00:00",
      horarioHasta: "19:00:00",
      restriccion_de_acceso: "Solo Personal Autorizado",
      contacto: "+598 2900 1234",
      observaciones: "Depósito moderno con seguridad 24/7.",
    });
    const deposito10 = await Deposito.create({
      nombre: "Depósito Canelones",
      pais: "Uruguay",
      provincia: "Canelones",
      direccion: "Ruta 101 km 29.500",
      coordenadas: "-34.7100, -56.0010",
      tipo: "Tercero",
      horarioDesde: "08:00:00",
      horarioHasta: "16:00:00",
      restriccion_de_acceso: "Todo el Personal",
      contacto: "+598 2295 4567",
      observaciones: "Especializado en almacenamiento de productos agrícolas.",
    });


    const viaje1 = await Viaje.create({
      origen: deposito1.id,
      destino: deposito2.id,
      fecha_salida: "2025-06-12T08:00",
      fecha_llegada: "2025-06-25T14:00",
      id_chofer: chofer3.id,
      id_empresa_transportista: chofer3.id_empresa_transportista,
      id_vehiculo: chofer3.id_vehiculo,
      tipoDeViaje: "Nacional",
      carga: "12",
      observaciones: "Buen viaje",
    });
    const viaje2 = await Viaje.create({
      origen: deposito4.id,
      destino: deposito2.id,
      fecha_salida: "2024-09-08T10:00",
      fecha_llegada: "2024-10-09T14:00",
      id_chofer: chofer2.id,
      id_empresa_transportista: chofer2.id_empresa_transportista,
      id_vehiculo: chofer2.id_vehiculo,
      tipoDeViaje: "Nacional",
      carga: "soy una carga",
      observaciones: "Entrega urgente",
    });
    const viaje3 = await Viaje.create({
      origen: deposito4.id,
      destino: deposito7.id,
      fecha_salida: "2023-03-15T16:00",
      fecha_llegada: "2023-03-22T06:30",
      id_chofer: chofer1.id,
      id_empresa_transportista: chofer1.id_empresa_transportista,
      id_vehiculo: chofer1.id_vehiculo,
      tipoDeViaje: "Internacional",
      carga: "66",
      observaciones: "Carga refrigerada",
    });
    const viaje4 = await Viaje.create({
      origen: deposito4.id,
      destino: deposito5.id,
      fecha_salida: "2024-11-18T19:30",
      fecha_llegada: "2024-12-01T00:30",
      id_chofer: chofer6.id,
      id_empresa_transportista: chofer6.id_empresa_transportista,
      id_vehiculo: chofer6.id_vehiculo,
      tipoDeViaje: "Nacional",
      carga: "soy una carga",
      observaciones: "Entrega urgente",
    });
    const viaje5 = await Viaje.create({
      origen: deposito5.id,
      destino: deposito8.id,
      fecha_salida: "2025-06-11T10:00",
      fecha_llegada: "2025-06-12T16:00",
      id_chofer: chofer9.id,
      id_empresa_transportista: chofer9.id_empresa_transportista,
      id_vehiculo: chofer9.id_vehiculo,
      tipoDeViaje: "Internacional",
      carga: "soy una carga",
      observaciones: "Entrega urgente",
    });
    const viaje6 = await Viaje.create({
      origen: deposito1.id,
      destino: deposito3.id,
      fecha_salida: "2023-04-08T11:00",
      fecha_llegada: "2023-04-11T14:30",
      id_chofer: chofer4.id,
      id_empresa_transportista: chofer4.id_empresa_transportista,
      id_vehiculo: chofer4.id_vehiculo,
      tipoDeViaje: "Nacional",
      carga: "soy una carga",
      observaciones: "Entrega urgente",
    });
    const viaje7 = await Viaje.create({
      origen: deposito9.id,
      destino: deposito6.id,
      fecha_salida: "2025-05-16T18:00",
      fecha_llegada: "2025-05-20T14:00",
      id_chofer: chofer5.id,
      id_empresa_transportista: chofer5.id_empresa_transportista,
      id_vehiculo: chofer5.id_vehiculo,
      tipoDeViaje: "Internacional",
      carga: "soy una carga",
      observaciones: "Entrega urgente",
    });
    const viaje8 = await Viaje.create({
      origen: deposito2.id,
      destino: deposito5.id,
      fecha_salida: "2024-10-04T20:00",
      fecha_llegada: "2024-10-10T12:15",
      id_chofer: chofer1.id,
      id_empresa_transportista: chofer1.id_empresa_transportista,
      id_vehiculo: chofer1.id_vehiculo,
      tipoDeViaje: "Nacional",
      carga: "soy una carga",
      observaciones: "Entrega urgente",
    });
  } catch (error) {
    console.log(
      "☠ Error al crear los valores iniciales de la base de datos:",
      error
    );
  }
};

module.exports = crearValoresInicialesDB;
