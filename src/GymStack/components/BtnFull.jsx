import Swal from "sweetalert2"

export const BtnFull = () => {
	const onNoRegister = () => {
		Swal.fire({
			icon: 'info',
			title: 'Error',
			text: 'Este usuario tiene las asistencias completas esta semana'
		})
	}
  return (
	<button 
		onClick={onNoRegister}
		className="bg-neutral-950 p-2 text-white rounded-md">Asistencia completa</button>
  )
}