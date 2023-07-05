import { useRef, useState } from "react"
import { useForm } from "../../hooks/useForm"


export const PlansRegister = () => {
	const [beneficios_list, setBeneficios_list] = useState([''])
	const {formState,plan_name,plan_days,plan_price ,onInputChange} = useForm({
		plan_name:'',
		plan_price: '',
		plan_days: ''
	})
	const inputContainer = useRef()
	
	const addBeneficio = () => {
		setBeneficios_list([...beneficios_list,''])
	}

	const onCreatePlan = (e) => {
		e.preventDefault()
		console.log(formState)
	}

	return (
		<section>
			<form
				onSubmit={onCreatePlan}
			>
				<label htmlFor="plan_name">Nombre del plan</label>
				<input
					value={plan_name}
					onChange={onInputChange}
					type="text"
					className="border"
					name="plan_name" 
					id="plan_name" />
				<br />
				<label htmlFor="plan_price">Precio del plan</label>
				<input
					value={plan_price}
					onChange={onInputChange}
					type="number"
					className="border"
					name="plan_price" 
					id="plan_price" />
				<br />
				<div>
					<label htmlFor="plan_benefics">Beneficios del plan</label>
					<div ref={inputContainer}>
						{beneficios_list.map((item, i) => (
							<input
								key={i}
								type="text"
								className="border"
								onChange={onInputChange}
								name={`beneficio${i + 1}`} 
								id={`beneficio${i + 1}`} />
						))}
					</div>
					<button 
						onClick={addBeneficio}
						type="button">Añadir beneficio</button>
				</div>
				<label htmlFor="plan_days">Dias a la semana del Plan</label>
				<input 
					max={7} 
					min={1} 
					required 
					value={plan_days}
					onChange={onInputChange}
					className="border" 
					type="number" 
					name="plan_days" 
					id="plan_days" />
				<input type="submit" value="Crear Plan" />
			</form>
		</section>
	)
}