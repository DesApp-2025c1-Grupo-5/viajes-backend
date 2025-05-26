import { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import TableTitle from "../components/TableTitle";
import New from "../components/New";
import TablaViajes from "../components/TablaViajes";

const ViajesPage = () => {
  const [viajes, setViajes] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Filtros simulados MODIFICAR
  const filtroOrigen = "Deposito Norte";
  const filtroDestino = "Deposito Sur";
  const filtroSalida = "2024-01-01";
  const filtroLlegada = "2024-12-31";

  const fetchViajesFiltrados = async ({ origen, destino, fechaSalida, fechaLlegada }) => {
    const params = new URLSearchParams();

    if (origen) params.append("origen", origen);
    if (destino) params.append("destino", destino);
    if (fechaSalida) params.append("fecha_salida", fechaSalida);
    if (fechaLlegada) params.append("fecha_llegada", fechaLlegada);

    const url = `http://localhost:3000/api/viajes?${params.toString()}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setViajes(data);
    } catch (error) {
      console.error("Error al obtener viajes filtrados:", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    fetchViajesFiltrados({
        origen: filtroOrigen,
        destino: filtroDestino,
        fechaSalida: filtroSalida,
        fechaLlegada: filtroLlegada,
    });
  }, [origen, destino, fechaSalida, fechaLlegada]);

  return (
    <>
      <Header />
      <div className="flex">
        <div>
          <NavBar />
        </div>
        <div className="flex-1 p-6">
          <Title
            color="text-pink-300"
            title="Viajes"
            description="Gestiona los viajes entre depósitos"
          />
          <div>
            <div className="flex items-center justify-between">
              <TableTitle
                color="text-gray-700"
                title="Lista de viajes"
                description="Todos los viajes registrados en el sistema"
              />
              <New
                path="/nuevoViaje"
                bgColor="bg-pink-300"
                colorHover="hover:bg-pink-500"
              />
            </div>
            <SearchBar />

            {cargando ? (
              <p>Cargando viajes...</p>
            ) : (
              <TablaViajes viajes={viajes} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViajesPage;

