export const PlansRegister = () => {
  return (
	<section>
		<form>
			<label htmlFor="plan_name">Nombre del plan</label>
			<input 
				type="text" 
				className="border" 
				name="plan_name" id="plan_name" />
			<br />
			<label htmlFor="plan_price">Precio del plan</label>
			<input 
				type="text" 
				className="border" 
				name="plan_price" id="plan_price" />
			<br />
			<div>
				<label htmlFor="plan_benefics">Beneficios del plan</label>
				<input 
					type="text" 
					className="border" 
					name="" id="" />
				<input 
					type="text" 
					className="border" 
					name="" id="" />
				<input 
					type="text" 
					className="border" 
					name="" id="" />
			</div>
			<label htmlFor="plan_instructor">¿Tu plan incluye entrenado personal?</label>
			<input type="checkbox" name="plan_instructor" id="plan_instructor" />
		</form>
	</section>
  )
}