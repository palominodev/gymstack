import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startEditUser } from "../../store/gymstack/thunks"

export const EditClient = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { users } = useSelector(state => state.gymStack)
	const { id } = useParams()
	const [user] = users.filter(user => user.uid === id)

	const {
		dni,
		name,
		last_name,
		phone,
		email,
		formState,
		onInputChange
	} = useForm({
		dni: user.dni,
		name: user.name,
		last_name: user.last_name,
		phone: user.phone,
		email: user.email,
		suscription: user.type
	})
	
	const onEditClient = (e) => {
		e.preventDefault()
		formState.uid = id
		dispatch(startEditUser(formState))
		navigate('/client')
	}
	return (
		<section>
			<form
				onSubmit={onEditClient}
			>
				<h2 className="text-5xl font-bold my-6 text-center text-white" >Editar {name}</h2>
				<div className="flex flex-wrap justify-center">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="dni">DNI</label>
					<input
						required
						onChange={onInputChange}
						value={dni}
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						type="tel"
						name="dni"
						id="dni" />
				</div>
				<div className="flex flex-wrap justify-center">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="name">Nombre</label>
					<input
						required
						onChange={onInputChange}
						value={name}
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						type="text"
						name="name"
						id="name" />
				</div>
				<div className="flex flex-wrap justify-center">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="last_name">Apellido</label>
					<input
						required
						onChange={onInputChange}
						value={last_name}
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						type="text"
						name="last_name"
						id="last_name" />
				</div>
				<div className="flex flex-wrap justify-center">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="phone">Telefono</label>
					<input
						required
						onChange={onInputChange}
						value={phone}
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						type="tel"
						name="phone"
						id="phone" />
				</div>
				<div className="flex flex-wrap justify-center">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="email">Email</label>
					<input
						required
						onChange={onInputChange}
						value={email}
						className="block border-2 border-orange-700 rounded-md text-2xl p-2 text-center w-full max-w-md mx-6"
						type="email"
						name="email"
						id="email" />
				</div>
				{/* <div className="flex flex-col items-center mt-4">
					<label className="text-white tracking-wider block w-full text-center text-xl font-semibold mb-2" htmlFor="email">Suscripcion</label>
					<select
						className="mb-5 p-2 text-center font-semibold text-xl w-60 rounded-md bg-orange-500"
						onChange={onInputChange}
						name="suscription"
						value={suscription}
						id="suscription">
						<option defaultChecked disabled
						className="text-sm font-bold disabled:text-slate-700" value="none">--Selecciona plan--</option>
						{
							planes.map( plan => (
								<option key={plan.id} className="text-sm font-bold" value={JSON.stringify(plan)}>{plan.name} - {plan.month_durations} meses</option>
							))
						}
					</select>
				</div> */}
				<div className="flex flex-col items-center mt-4">
					<input className="bg-black text-white p-4 text-2xl font-bold mb-5 rounded-md" type="submit" value="Actualizar datos" />
				</div>
			</form>
		</section>
	)
}