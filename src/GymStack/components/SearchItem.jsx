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
		<div className={`shadow-lg shadow-orange-700 mt-3 p-3 rounded-md ${status(isValid)}`}>
			<p className="text-lg">{name}</p>
			<p>Tipo: <span className="font-bold">{suscription}</span></p>
			<div className="flex justify-between gap-3 items-center">
				<StatusTag isValid={isValid} />
				<button className="bg-neutral-950 p-2 text-white rounded-md">
					{
						(isValid === 'valid')
						? 'Registar Asistencia'
						: (isValid === 'full')
							? 'Asistencias completas'
							: 'Actualizar Suscripcion'
					}
				</button>
			</div>
		</div>
	)
}