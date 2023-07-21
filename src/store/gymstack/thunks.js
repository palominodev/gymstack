import { createPlan, createUser, removePlan, removeUser, setActiveUsers, setCountPlans, setPlans, setUsers } from "./gymstackSlice"
import {v4 as uuidv4} from 'uuid'
import { addCounterDays, deletePlan, deleteUser, getPlans, getUsers, savePlan, saveUser } from "../../api/provide"

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
		const user = {
			uid: uuidv4(),
			...formState,
			vence: "12-09-24",
			type: formState.suscription,
			status: "valid",
			complete_days: 0,
			total_days: 5
		}

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
		const {uid} = getState().auth
		await addCounterDays({uid,id})
		console.log("Usuario Actualizado");
	}
}