import { useRef } from "react"
import { useForm } from "../../hooks/useForm"


export const PlansRegister = () => {
	const {formState,plan_name,plan_days,plan_price,beneficios,onInputChange, onInputMultiChange, addBeneficio} = useForm({
		plan_name:'',
		plan_price: '',
		plan_days: '',
		beneficios: ['']
	})
	const inputContainer = useRef()
	
	const onAddBeneficio = () => {
		const newListBeneficios = []
		inputContainer.current.childNodes.forEach(item => {
			newListBeneficios.push(item.value);
		})
		addBeneficio(newListBeneficios);
	}

	const onCreatePlan = (e) => {
		e.preventDefault()
		console.log(formState);
	}

	return (
		<section>
			<form
				onSubmit={onCreatePlan}
			>
				<h2 className="text-6xl font-bold text-center my-6">Crear Plan</h2>
				<div className="flex flex-wrap justify-center">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="plan_name">Nombre del plan</label>
					<input
						onChange={onInputChange}
						value={plan_name}
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						type="text"
						name="plan_name" 
						id="plan_name" />
				</div>
				<div className="flex flex-wrap justify-center">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="plan_name">Precio del plan</label>
					<input
						value={plan_price}
						onChange={onInputChange}
						type="number"
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						name="plan_price"
						id="plan_price" />
				</div>
				<div className="flex flex-col items-center mx-6">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="plan_benefics">Beneficios del plan</label>
					<div ref={inputContainer} className="w-full max-w-md" >
						{beneficios.map((item, i) => (
							<input
								key={i}
								type="text"
								className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full"
								onChange={onInputMultiChange}
								name={`beneficio${i + 1}`} 
								id={`beneficio${i + 1}`} />
						))}
					</div>
					<button 
						className="my-3 p-2 text-lg font-bold rounded-md transition-colors duration-300 bg-sky-600 hover:bg-sky-700"
						onClick={onAddBeneficio}
						type="button">Añadir beneficio</button>
				</div>
				<div className="flex flex-col items-center mx-6">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="plan_month">Meses de duracion</label>
					<select 
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						onChange={onInputChange} 
						name="plan_month" 
						id="plan_month">
						<option value="1">1 mes</option>
						<option value="2">2 meses</option>
						<option value="3">3 meses</option>
						<option value="4">4 meses</option>
						<option value="5">5 meses</option>
						<option value="6">6 meses</option>
						<option value="7">7 meses</option>
						<option value="8">8 meses</option>
						<option value="9">9 meses</option>
						<option value="10">10 meses</option>
						<option value="11">11 meses</option>
						<option value="12">12 meses</option>
					</select>
				</div>
				<div className="flex flex-col items-center mx-6">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="plan_days">Dias a la semana del Plan</label>
					<input
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						max={7}
						min={1}
						required
						value={plan_days}
						onChange={onInputChange}
						type="number"
						name="plan_days"
						id="plan_days" />
				</div>
				<div className="flex flex-col items-center mx-6">
					<input
						className="my-3 p-2 text-lg font-bold rounded-md transition-colors duration-300 bg-orange-500 hover:bg-orange-700"
						type="submit"
						value="Crear Plan" />
				</div>
			</form>
		</section>
	)
}