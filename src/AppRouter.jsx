import { Navigate, Route, Routes } from "react-router-dom"
import { GymStackRoute } from "./GymStack/routes/GymStackRoute"
import { AuthRoute } from "./auth/routes/AuthRoute"

export const AppRouter = () => {
	const isAuthenticated = false
	return (
		<Routes>
			{
				isAuthenticated
				? <Route path="/*" element={ <GymStackRoute /> } />
				: <Route path="/auth/*" element={ <AuthRoute /> } />
			}

			<Route path="/*" element={ <Navigate to={"/auth/login"} /> }  />
		</Routes>
	)
}