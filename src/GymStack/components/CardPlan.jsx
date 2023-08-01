import { useDispatch } from "react-redux"
import { startDeletePlan } from "../../store/gymstack/thunks"
import { FaTrash } from "react-icons/fa"
import Swal from "sweetalert2"

export const CardPlan = ({ price, name = 'Plan Name', beneficios = [], id }) => {
	const dispatch = useDispatch()
	const onDelete = () => {
		Swal.fire({
			icon: 'question',
			title: '¿Estas seguro que deseas borrar este plan?',
			showConfirmButton: true,
			confirmButtonText: 'Si, eliminar plan',
			confirmButtonColor: 'red',
			showCancelButton: true
		}).then(result => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Eliminando...',
					showConfirmButton: false,
					allowOutsideClick: false,
				})
				dispatch(startDeletePlan(id))
				Swal.fire({
					icon: 'success',
					title: 'Plan eliminado',
					showConfirmButton: false,
					timer: 1000
				})
			}
		})
		// 
	}
	return (
		<article
			className="flex flex-col items-center rounded-md p-4 bg-orange-300 justify-between font-sans">
			<p className="text-3xl text-center mb-2">{name}</p>
			<p className="text-3xl text-center mb-4 justify-self-start" >
				<span className="text-7xl font-bold">{price}</span> soles
			</p>
			<ul className="w-2/3">
				{
					beneficios.map(benef => (
						<li key={benef} className="p-1" >- {benef}</li>
					))
				}
			</ul>
			<button
				className="flex items-center gap-1 bg-red-500 py-2 px-4 font-bold rounded-md text-lg"
				onClick={onDelete}
			><FaTrash />Borrar</button>
		</article>
	)
}	