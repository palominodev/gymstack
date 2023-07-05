import { useNavigate } from "react-router-dom"
import { CardPlan } from "../components/CardPlan"

export const Plans = () => {
	const navigate = useNavigate()
	return (
		<section>
			<div className="flex justify-between">
				<h2 className="text-4xl">Planes de suscripción</h2>
				<button
					onClick={() => navigate('/plans/new')}
					className="mx-4 p-2 bg-orange-700 font-bold text-white rounded-md transition-all duration-300 hover:bg-orange-600">
					Crear nuevo plan
				</button>
			</div>
			<section>
				<CardPlan price={30} />
				<CardPlan price={50} />
				<CardPlan price={80} />
			</section>
		</section>
	)
}