import { StatusTag } from "./StatusTag"

export const SearchItem = ({ name, suscription, isValid=null }) => {

	const status = (isValid) => {
		return (isValid === 'valid')
				? 'bg-green-500'
				: (isValid === 'full')
					? 'bg-yellow-500'
					: 'bg-red-500'
	}

	return (
		<div className={`border mt-3 p-3 rounded-md ${status(isValid)}`}>
			<p className="text-lg">{name}</p>
			<p>Tipo: <span className="font-bold">{suscription}</span></p>
			<div className="flex justify-between gap-3 items-center">
				<StatusTag isValid={isValid} />
				{
					(isValid === 'deprecated')
					? <button className="bg-neutral-950 p-2 text-white rounded-md" >Actualizar Suscripcion</button>
					: <button className="bg-neutral-950 p-2 text-white rounded-md">Registar Asistencia</button>
				}
			</div>
		</div>
	)
}