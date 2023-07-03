import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"

export const AuthRoute = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/*" element={<Navigate to={"/login"} />} />
		</Routes>
	)
}