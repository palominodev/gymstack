import { Navigate, Route, Routes } from "react-router-dom"
import { Template } from "../../template/Template"
import { Admin } from "../view/Admin"
import { Clients } from "../view/Clients"
import { ClientRegister } from "../view/ClientRegister"

export const GymStackRoute = () => {
  return (
	<Template>
		<Routes>
			<Route path={'/admin'} element={ <Admin /> } />
			<Route path={'/client'} element={ <Clients /> } />
			<Route path={'/client/new'} element={<ClientRegister />} />
			<Route path={'/*'} element={ <Navigate to={'/admin'} /> } />
		</Routes>
	</Template>
  )
}