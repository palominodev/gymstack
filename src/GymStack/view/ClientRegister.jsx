import { useForm } from "../../hooks/useForm"

export const ClientRegister = () => {
	const {
		name,
		last_name,
		phone,
		email,
		suscription,
		formState,
		 onInputChange
		} = useForm({
		name:'',
		last_name:'',
		phone:'',
		email: '',
		suscription: 'none'
	})
	const onCreatedClient = (e) => {
		e.preventDefault()
		console.log(formState);
	}

  return (
	<section>
		<form 
			onSubmit={onCreatedClient}	
		>
			<label htmlFor="name">Nombre</label>
			<input 
				onChange={onInputChange}
				value={name}
				className="border" 
				type="text" 
				name="name" 
				id="name" />
			<br />
			<label htmlFor="last_name">Apellido</label>
			<input 
				onChange={onInputChange}
				value={last_name}
				className="border" 
				type="text" 
				name="last_name" 
				id="last_name" />
			<br />
			<label htmlFor="phone">Telefono</label>
			<input 
				onChange={onInputChange}
				value={phone}
				className="border" 
				type="tel" 
				name="phone" 
				id="phone" />
			<br />
			<label htmlFor="email">Email</label>
			<input 
				onChange={onInputChange}
				value={email}
				className="border" 
				type="email" 
				name="email" 
				id="email" />
			<br />
			<select 
				onChange={onInputChange}
				name="suscription" 
				value={suscription}
				id="suscription">
				<option defaultChecked disabled value="none">--Selecciona plan--</option>
				<option value="Basica">Basica</option>
				<option value="Pro">Pro</option>
				<option value="Avanzada">Avanzada</option>
			</select>
			<input type="submit" value="Crear" />
		</form>
	</section>
  )
}