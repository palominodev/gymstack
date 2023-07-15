import { setPlans, setUsers } from "./gymstackSlice"
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