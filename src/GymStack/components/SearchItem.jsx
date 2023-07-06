import { StatusTag } from "./StatusTag"

export const SearchItem = ({ name, suscription, isValid=null }) => {

	const status = (isValid) => {
		return (isValid === 'deprecated')
				? 'bg-red-500'
				: 'bg-green-500'
	}

	return (
		<div className={`border mt-3 p-3 rounded-md ${status(isValid)}`}>
			<p className="text-lg">{name}</p>
			<p>Tipo: {suscription}</p>
			<div className="flex justify-between items-center">
				<StatusTag isValid={isValid} />
				{
					(isValid === 'deprecated')
					? <button className="bg-neutral-950 p-2 text-white rounded-md" >Actulizar Suscripcion</button>
					: <button className="bg-neutral-950 p-2 text-white rounded-md">Registar Asistencia</button>
				}
			</div>
		</div>
	)
}