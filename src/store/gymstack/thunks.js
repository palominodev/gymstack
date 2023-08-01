import { addCounterCompleteDays, addMonthsSuscription, createPlan, createUser, removePlan, removeUser, setActiveUsers, setCountPlans, setPlans, setUsers } from "./gymstackSlice"
import {v4 as uuidv4} from 'uuid'
import { addCounterDays, deletePlan, deleteUser, getPlans, getUsers, savePlan, saveUser, updateSuscription } from "../../api/provide"
import Swal from "sweetalert2"
import { addMonths } from "date-fns"
import { newVence } from "../../api/helpers/newVence"

export const startGetUsers = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth
		const users = await getUsers(uid)
		dispatch(setUsers(users))
		dispatch(setActiveUsers())
	}
}

export const startGetPlans = () => {
	return async (dispatch, getState) => {
		const {uid} = getState().auth
		const plans = await getPlans(uid)
		dispatch(setPlans(plans))
		dispatch(setCountPlans())
	}
}

export const startCreateUser = (formState) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth
		const { month_durations, name, daysForWeek } = JSON.parse(formState.suscription)
		const month = addMonths(new Date(), month_durations)
		const user = {
			uid: uuidv4(),
			...formState,
			vence: month.toString(),
			type: name,
			status: "valid",
			complete_days: 0,
			total_days: Number(daysForWeek)
		}
		delete user.suscription
		Swal.fire({
			title: 'Cargando...',
			text: 'Creando Usuario',
			allowOutsideClick: false,
			showConfirmButton: false
		})
		dispatch(createUser(user))
		await saveUser({user, uid})
		Swal.fire({
			icon: 'success',
			title: 'Usuario creado exitosamente',
			timer: 1000,
			showConfirmButton: false,
		})
	}
}

export const startCreatePlan = (formState) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth
		delete formState.ok
		const plan = {
			id: uuidv4(),
			...formState,
		}
		dispatch(createPlan(plan))
		Swal.fire({
			title: 'Cargando...',
			text: 'Creando Plan',
			allowOutsideClick: false,
			showConfirmButton: false
		})
		await savePlan({plan,uid})
		Swal.fire({
			icon: 'success',
			title: 'Plan creado exitosamente',
			timer: 1000,
			showConfirmButton: false,
		})
	}
}

export const startDeletePlan = (id) => {
	return async(dispatch, getState) => {
		const {uid} = getState().auth
		Swal.fire({
			title: 'Eliminando...',
			showConfirmButton: false,
			allowOutsideClick: false,
		})
		await deletePlan({id, uid})
		dispatch(removePlan(id))
		Swal.fire({
			icon: 'success',
			title: 'Plan eliminado',
			showConfirmButton: false,
			timer: 1000
		})
	}
}

export const startDeleteUser = (id) => {
	return async(dispatch,getState) => {
		const {uid} = getState().auth
		await deleteUser({uid,id})
		dispatch(removeUser(id))
	}
}

export const startAddCounterDays = (id) => {
	return async(dispatch, getState) => {

		const { uid } = getState().auth
		Swal.fire({
			title: 'Cargando...',
			text: 'Registrando asistencia',
			allowOutsideClick: false,
			showConfirmButton: false
		})
		const { ok, message } = await addCounterDays({ uid, id })
		if(!ok) {
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: message
			})
			return 
		}
		dispatch(addCounterCompleteDays(id))
		Swal.fire({
			icon: "success",
			title: "Registro",
			text: message
		})
	}
}

export const startUpdateSuscription = ({type,vence,id}) => {
	return async(dispatch, getState) => {
		const { uid } = getState().auth
		Swal.fire({
			title: 'Cargando...',
			text: 'Registrando asistencia',
			allowOutsideClick: false,
			showConfirmButton: false
		})
		const {month_durations:months,name} = JSON.parse(type)
		const newTimeSuscription = newVence({months: Number(months),vence})
		await updateSuscription({uid,id,name, vence: newTimeSuscription})
		dispatch(addMonthsSuscription({id,type: name, vence: newTimeSuscription}))
		Swal.fire({
			icon: "success",
			title: "Actualizado",
		})
	}
}