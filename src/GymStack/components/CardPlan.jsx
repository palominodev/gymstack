import { useDispatch } from "react-redux"
import { startDeletePlan } from "../../store/gymstack/thunks"

export const CardPlan = ({price,name='Plan Name',beneficios=[], id}) => {
	const dispatch = useDispatch()
	const onDelete = () => {
		dispatch(startDeletePlan(id))
	}
  return (
	<article 
		className="flex flex-col sm:flex-row justify-center items-center border rounded-md p-4 bg-slate-600">
		<p className="text-3xl text-center mb-2">{name}</p>
		<p className="text-3xl text-center mb-4" >
			<span className="text-7xl font-bold">{price}</span> soles
		</p>
		<ul className="w-2/3">
			{
				beneficios.map(benef => (
					<li key={benef} className="p-1" >{benef}</li>
				))
			}
		</ul>
		<button 
			className="bg-red-500 py-2 px-4 font-bold rounded-md text-lg"
			onClick={onDelete}	
		>borrar</button>
	</article>
  )
}	