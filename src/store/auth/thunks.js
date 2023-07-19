import { signOut } from "firebase/auth"
import { signInWithEmail } from "../../firebase/provide"
import { login, logout } from "./authSlice"
import { FirebaseAuth } from "../../firebase/config"


export const startLoginWithEmail = ({email,password}) =>{
	return async(dispatch) => {
		const result = await signInWithEmail({email,password})
		if(!result.ok) return dispatch(logout())
		const { uid } = result
		dispatch(login({uid}))
	}
}

export const startLogout = () => {
	return async(dispatch) => {
		await signOut(FirebaseAuth)
		dispatch(logout())
	}
}