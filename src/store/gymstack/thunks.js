import { createUser, setPlans, setUsers } from "./gymstackSlice"
import users from "../../api/users.json"
import plans from "../../api/planes.json"

export const startGetUsers = () => {
	return async(dispatch) => {
		dispatch(setUsers(users))

	}
}

export const startGetPlans = () => {
	return async(dispatch) => {
		dispatch(setPlans(plans))
	}
}

export const startCreateUser = (formState) => {
	return async(dispatch) => {
		//Grabarlo en la base de datos
		const user = {
			uid: Date.now(),
			...formState,
			vence: "12-09-24",
			type: formState.suscription,
			status: "valid",
			complete_days: 0,
			total_days: 5
		}
		console.log(user)
		dispatch(createUser(user))
	}
}