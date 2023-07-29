import { MdLibraryBooks } from "react-icons/md"
import { useSelector } from "react-redux"

export const PlanCardInfo = () => {
  const { activePlans } = useSelector(state => state.gymStack)
  return (
	<article className="flex flex-col items-center justify-center bg-sky-300 rounded-md p-2 w-1/2 sm:flex-row" >
      <MdLibraryBooks className="text-5xl" />
      <p className="w-40 text-2xl font-bold text-center">Planes</p>
      <span className="text-5xl sm:text-7xl" >{activePlans}</span>
    </article>
  )
}