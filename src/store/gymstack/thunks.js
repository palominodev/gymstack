import { createPlan, createUser, removePlan, setActiveUsers, setCountPlans, setPlans, setUsers } from "./gymstackSlice"
import {v4 as uuidv4} from 'uuid'
import { deletePlan, getPlans, getUsers, savePlan, saveUser } from "../../api/provide"

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
			uid: Date.now(),
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
		console.log(plan);
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