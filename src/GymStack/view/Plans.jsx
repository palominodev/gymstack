import { useNavigate } from "react-router-dom"
import { CardPlan } from "../components/CardPlan"

export const Plans = () => {
	const navigate = useNavigate()
	return (
		<section className="p-3">
			<div className="flex justify-between mb-4 flex-wrap">
				<h2 className="text-5xl md:text-6xl font-bold" >Planes</h2>
				<button
					onClick={() => navigate('/plans/new')}
					className="mx-4 p-2 bg-orange-700 font-bold text-white rounded-md transition-all duration-300 hover:bg-orange-600 md:text-lg">
					Crear nuevo
				</button>
			</div>
			<section className="grid justify-center grid-cols-3 gap-4">
				<CardPlan price={30} />
				<CardPlan price={50} />
				<CardPlan price={80} />
			</section>
		</section>
	)
}