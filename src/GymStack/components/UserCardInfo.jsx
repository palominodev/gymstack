import { FaUsers } from "react-icons/fa"
import { useSelector } from "react-redux"

export const UserCardInfo = () => {
  const { activeUsers } = useSelector(state => state.gymStack)

  return (
    <article className="flex flex-col items-center justify-center bg-lime-300 rounded-md p-2 w-1/2 sm:flex-row" >
      <FaUsers className="text-5xl" />
      <p className="w-40 text-2xl font-bold text-center">Clientes activos</p>
      <span className="text-5xl sm:text-7xl" >{activeUsers}</span>
    </article>
  )
}