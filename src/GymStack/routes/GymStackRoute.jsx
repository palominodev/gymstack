import { Navigate, Route, Routes } from "react-router-dom"
import { GymStackApp } from "../pages/GymStackApp"

export const GymStackRoute = () => {
  return (
	<Routes>
		<Route path="/home" element={ <GymStackApp /> } />
		<Route path="/*" element={ <Navigate to={"/home"} /> } />
	</Routes>
  )
}