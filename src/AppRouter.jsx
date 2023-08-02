import { Navigate, Route, Routes } from "react-router-dom"
import { GymStackRoute } from "./GymStack/routes/GymStackRoute"
import { AuthRoute } from "./auth/routes/AuthRoute"
import { useDispatch, useSelector } from "react-redux"
import { AUTH_STATUS } from "./types/AUTH_STATUS"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "./firebase/config"
import { login } from "./store/auth/authSlice"
import Swal from "sweetalert2"

export const AppRouter = () => {
	const {status} = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		Swal.fire({
			title: "Cargando...",
			showConfirmButton: false,
		})
		onAuthStateChanged(FirebaseAuth, async(user) => {
			if(!user) return Swal.close()
			const {uid} = user
			dispatch(login({uid}))
			Swal.fire({
				icon: "success",
				title: "Sesion guardada",
				timer: 1000,
				showConfirmButton: false
			})
		} )
	},[])

	return (
		<Routes>
			{
				(status === AUTH_STATUS.AUTHENTICATED)
				? <Route path="/*" element={ <GymStackRoute /> } />
				: <Route path="/auth/*" element={ <AuthRoute /> } />
			}

			<Route path="/*" element={ <Navigate to={"/auth/login"} /> }  />
		</Routes>
	)
}