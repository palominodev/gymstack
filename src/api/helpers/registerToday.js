import { isSameDay } from "date-fns"

export const registerToday = ({asistencias}) => {
	if(!asistencias) {
		return {
			ok: true,
			message: 'Asistencias del usuario registrada'
		}
	}


	const today = new Date()
	const lastRegister = asistencias.at(-1)
	if(isSameDay(new Date(lastRegister), today)){
		return {
			ok: false,
			message: 'Ya registraste la asistencias de este usuario hoy'
		}
	}
	return {
		ok: true,
		message: 'Asistencias del usuario registrada'
	}
	
}