import { useDispatch } from "react-redux"
import { startAddCounterDays } from "../../store/gymstack/thunks"

export const BtnRegistrar = ({id}) => {
	const dispatch = useDispatch()
	const onAddCountDays = () => {
		dispatch(startAddCounterDays(id))
	}
  return (
	<button 
		onClick={onAddCountDays}
		className="bg-neutral-950 p-2 text-white rounded-md">Registrar Asistencia</button>
  )
}