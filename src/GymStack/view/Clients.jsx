import { useNavigate } from "react-router-dom"
import { RowTableUser } from "../components/RowTableUser"

export const Clients = () => {
  const navigate = useNavigate()
  return (
    <section className="p-3">
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold" >Clientes</h2>
        <button 
          onClick={()=> navigate('/client/new')}
          className="mx-4 p-2 bg-orange-700 font-bold text-white rounded-md transition-all duration-300 hover:bg-orange-600">
            Crear nuevo
        </button>
      </div>
      <section className="overflow-x-scroll lg:overflow-hidden">
        <table>
          <thead>
            <tr>
              <th className="border p-3">ID</th>
              <th className="border p-3">Nombre</th>
              <th className="border p-3">Apellido</th>
              <th className="border p-3">Telefono</th>
              <th className="border p-3">Correo</th>
              <th className="border p-3">Suscripcion</th>
              <th className="border p-3">Vence el</th>
              <th className="border p-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            <RowTableUser />
            <RowTableUser />
            <RowTableUser />
          </tbody>
        </table>
      </section>
    </section>
  )
}