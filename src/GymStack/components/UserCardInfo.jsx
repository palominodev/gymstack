import { useSelector } from "react-redux"

export const UserCardInfo = () => {
  const { activeUsers } = useSelector(state => state.gymStack)

  return (
    <article className="bg-lime-600 rounded-md p-2 w-1/2" >
      <p className="text-xl">Clientes activos</p>
      <span className="text-4xl" >{activeUsers}</span>
    </article>
  )
}