import { useNavigate } from "react-router-dom"
import { RowTableUser } from "../components/RowTableUser"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef } from "react"
import { startGetUsers } from "../../store/gymstack/thunks"
import { searchUsersByName } from "../../store/gymstack/gymstackSlice"

export const Clients = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const inputSearch = useRef()
  const { users, searchUsers } = useSelector(state => state.gymStack)

  useEffect(() => {
    if(users.length === 0) {
      dispatch(startGetUsers())
    }
  }, [])

  const onSearch = () => {
    dispatch(searchUsersByName(inputSearch.current.value))
  }
  

  return (
    <section className="p-3">
      <div className="flex justify-between mb-4 flex-wrap">
        <h2 className="text-5xl md:text-6xl font-bold text-white" >Clientes</h2>
        <button 
          onClick={()=> navigate('/client/new')}
          className="mx-4 p-2 bg-orange-700 font-bold text-white rounded-md transition-all duration-300 hover:bg-orange-600 md:text-lg">
            Crear nuevo
        </button>
        <input 
          className="block w-full my-4 text-xl p-2 outline-none rounded-md border-2 border-black" 
          placeholder="Ingresa nombre..."
          ref={inputSearch}
          type="text"
          onChange={onSearch} 
          name="search_user" 
          id="search_user" />
      </div>
      <section className="overflow-x-scroll lg:overflow-hidden">
        <table className="text-white">
          <thead className="bg-stone-950">
            <tr>
              <th className="border p-3">ID</th>
              <th className="border p-3">Nombre</th>
              <th className="border p-3">Apellido</th>
              <th className="border p-3">Telefono</th>
              <th className="border p-3">Correo</th>
              <th className="border p-3">Suscripcion</th>
              <th className="border p-3">Vence</th>
              <th className="border p-3">Estado</th>
              <th className="border p-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              (inputSearch?.current?.value?.length >= 1)
              ? searchUsers.map( user => ( 
                <RowTableUser key={user.uid} {...user} />
              ))
              : users.map( user => ( 
                <RowTableUser key={user.uid} {...user} />
              ))
              
            }
          </tbody>
        </table>
      </section>
    </section>
  )
}