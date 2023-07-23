import { addCounterCompleteDays, createPlan, createUser, removePlan, removeUser, setActiveUsers, setCountPlans, setPlans, setUsers } from "./gymstackSlice"
import {v4 as uuidv4} from 'uuid'
import { addCounterDays, deletePlan, deleteUser, getPlans, getUsers, savePlan, saveUser } from "../../api/provide"
import Swal from "sweetalert2"
import { addMonths } from "date-fns"

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
		dispatch(createUser(user))
		await saveUser({user, uid})

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
		await savePlan({plan,uid})
	}
}

export const startDeletePlan = (id) => {
	return async(dispatch, getState) => {
		const {uid} = getState().auth
		await deletePlan({id, uid})
		dispatch(removePlan(id))
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