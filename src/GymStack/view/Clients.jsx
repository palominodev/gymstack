import { useNavigate } from "react-router-dom"

export const Clients = () => {
  const navigate = useNavigate()
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-4xl" >Clientes</h2>
        <button 
          onClick={()=> navigate('/client/new')}
          className="mx-4 p-2 bg-orange-700 font-bold text-white rounded-md transition-all duration-300 hover:bg-orange-600">
            Crear nuevo
        </button>
      </div>
      <section className="overflow-x-scroll">
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
            <tr>
              <td className="border p-3" >1248794</td>
              <td className="border p-3" >Jeremy Scott</td>
              <td className="border p-3" >Palomino Fernandez</td>
              <td className="border p-3" >902966065</td>
              <td className="border p-3" >jeremy@google.com</td>
              <td className="border p-3" >Pro</td>
              <td className="border p-3" >12-03-2023</td>
              <td className="border p-3" >Activo</td>
            </tr>
          </tbody>
        </table>
      </section>
    </section>
  )
}