import { useSelector } from "react-redux"

export const PlanCardInfo = () => {
  const { activePlans } = useSelector(state => state.gymStack)
  return (
	<article className="flex flex-col justify-center items-center bg-sky-300 rounded-md p-2 w-1/2" >
      <p className="text-2xl font-bold text-center">Planes</p>
      <span className="text-5xl" >{activePlans}</span>
    </article>
  )
}