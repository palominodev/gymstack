import { useSelector } from "react-redux"

export const PlanCardInfo = () => {
  const { activePlans } = useSelector(state => state.gymStack)
  return (
	<article className="bg-sky-600 rounded-md p-2 w-1/2" >
      <p className="text-xl">Planes Disponibles</p>
      <span className="text-4xl" >{activePlans}</span>
    </article>
  )
}