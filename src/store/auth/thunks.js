import { signOut } from "firebase/auth"
import { signInWithEmail } from "../../firebase/provide"
import { login, logout } from "./authSlice"
import { FirebaseAuth } from "../../firebase/config"
import Swal from "sweetalert2"


export const startLoginWithEmail = ({email,password}) =>{
	return async(dispatch) => {
		Swal.fire({
			title: 'Iniciando Sesion',
			showConfirmButton: false
		})
		const result = await signInWithEmail({email,password})
		console.log(result);
		if(!result.ok) {
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: "Correo o contraseña incorrectos",
			})
			return dispatch(logout('Correo o contraseña incorrectos'))
		}
		Swal.fire({
			icon: 'success',
			title: 'Sesion Iniciada',
			showConfirmButton: false,
			timer: 1000
		})
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