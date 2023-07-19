import { useEffect, useRef } from "react"
import { useForm } from "../../hooks/useForm"
import { useDispatch } from "react-redux"
import { startCreatePlan } from "../../store/gymstack/thunks"
import { useNavigate } from "react-router-dom"


export const PlansRegister = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {ok,formState,name,daysForWeek,price,beneficios,onInputChange, addBeneficio, addField} = useForm({
		ok: false,
		name:'',
		price: '',
		month_durations: '',
		daysForWeek: '',
		beneficios: []
	})
	const inputContainer = useRef()
	
	const onAddBeneficio = () => {
		addField()
	}

	const onCreatePlan = (e) => {
		e.preventDefault()
		const newListBeneficios = []
		inputContainer.current.childNodes.forEach(item => {
			if(item.value !== ''){
				newListBeneficios.push(item.value);
			}
		})
		
		addBeneficio(newListBeneficios);
	}
	
	useEffect(() => {
		
		const savePlan = () => {
			if(!ok) return
			dispatch(startCreatePlan(formState))
			navigate('/plans')
		}
		savePlan()
	},[beneficios])

	return (
		<section>
			<form
				onSubmit={onCreatePlan}
			>
				<h2 className="text-6xl font-bold text-center my-6">Crear Plan</h2>
				<div className="flex flex-wrap justify-center">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="name">Nombre del plan</label>
					<input
						onChange={onInputChange}
						value={name}
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						type="text"
						name="name" 
						id="name" />
				</div>
				<div className="flex flex-wrap justify-center">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="name">Precio del plan</label>
					<input
						value={price}
						onChange={onInputChange}
						type="number"
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						name="price"
						id="price" />
				</div>
				<div className="flex flex-col items-center mx-6">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="plan_benefics">Beneficios del plan</label>
					<div ref={inputContainer} className="w-full max-w-md" >
						{beneficios.map((item, i) => (
							<input
								key={i}
								type="text"
								className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full"
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
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="month_durations">Meses de duracion</label>
					<select 
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						onChange={onInputChange} 
						name="month_durations" 
						id="month_durations">
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
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="daysForWeek">Dias a la semana del Plan</label>
					<input
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						max={7}
						min={1}
						required
						value={daysForWeek}
						onChange={onInputChange}
						type="number"
						name="daysForWeek"
						id="daysForWeek" />
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