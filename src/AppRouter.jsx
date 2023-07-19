import { Navigate, Route, Routes } from "react-router-dom"
import { GymStackRoute } from "./GymStack/routes/GymStackRoute"
import { AuthRoute } from "./auth/routes/AuthRoute"
import { useDispatch, useSelector } from "react-redux"
import { AUTH_STATUS } from "./types/AUTH_STATUS"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "./firebase/config"
import { login } from "./store/auth/authSlice"

export const AppRouter = () => {
	const {status} = useSelector(state => state.auth)
	const dispatch = useDispatch()

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async(user) => {
			if(!user) return
			dispatch(login())
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