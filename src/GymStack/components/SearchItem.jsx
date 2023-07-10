import { CounterDays } from "./CounterDays"
import { StatusTag } from "./StatusTag"

export const SearchItem = ({ name, suscription, isValid=null, complete_day, total_days }) => {

	const status = (isValid) => {
		return (isValid === 'valid')
				? 'bg-green-'
				: (isValid === 'full')
					? 'bg-yellow-'
					: 'bg-red-'
	}

	return (
		<div className={`shadow-lg shadow-orange-700 mt-3 p-3 rounded-md ${status(isValid)}500`}>
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
			<div>
				<CounterDays complete_day={complete_day} total_days={total_days} status={status} isValid={isValid} />
			</div>
		</div>
	)
}