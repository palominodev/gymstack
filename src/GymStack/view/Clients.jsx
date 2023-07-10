import { useNavigate } from "react-router-dom"
import { RowTableUser } from "../components/RowTableUser"

export const Clients = () => {
  const navigate = useNavigate()
  return (
    <section className="p-3 bg-stone-800 min-h-screen">
      <div className="flex justify-between mb-4 flex-wrap">
        <h2 className="text-5xl md:text-6xl font-bold" >Clientes</h2>
        <button 
          onClick={()=> navigate('/client/new')}
          className="mx-4 p-2 bg-orange-700 font-bold text-white rounded-md transition-all duration-300 hover:bg-orange-600 md:text-lg">
            Crear nuevo
        </button>
        <input 
          className="block w-full my-4 text-xl p-2 outline-none rounded-md border-2 border-black" 
          placeholder="Ingresa nombre..."
          type="text" 
          name="search_user" 
          id="search_user" />
      </div>
      <section className="overflow-x-scroll lg:overflow-hidden">
        <table className="text-white">
          <thead className="bg-stone-950">
            <tr >
              <th className="border p-3">ID</th>
              <th className="border p-3">Nombre</th>
              <th className="border p-3">Apellido</th>
              <th className="border p-3">Telefono</th>
              <th className="border p-3">Correo</th>
              <th className="border p-3">Suscripcion</th>
              <th className="border p-3">Vence</th>
              <th className="border p-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            <RowTableUser />
            <RowTableUser />
            <RowTableUser />
            <RowTableUser />
            <RowTableUser />
            <RowTableUser />
            <RowTableUser />
          </tbody>
        </table>
      </section>
    </section>
  )
}