import { Navigate, Route, Routes } from "react-router-dom"
import { Template } from "../../template/Template"
import { Admin } from "../view/Admin"
import { Clients } from "../view/Clients"
import { ClientRegister } from "../view/ClientRegister"
import { Plans } from "../view/Plans"
import { PlansRegister } from "../view/PlansRegister"

export const GymStackRoute = () => {
	return (
		<Template>
			<Routes>
				<Route path={'/admin'} element={<Admin />} />
				<Route path={'/client'} element={<Clients />} />
				<Route path={'/client/new'} element={<ClientRegister />} />
				<Route path={'/plans'} element={<Plans />} />
				<Route path={'/plans/new'} element={<PlansRegister />} />
				<Route path={'/*'} element={<Navigate to={'/admin'} />} />
			</Routes>
		</Template>
	)
}