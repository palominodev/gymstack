import { useBgColor } from "../../hooks/useBgColor"
import { BtnActualizarSus } from "./BtnActualizarSus"
import { BtnRegistrar } from "./BtnRegistrar"
import { CounterDays } from "./CounterDays"
import { StatusTag } from "./StatusTag"

export const SearchItem = ({ name, id, suscription, isValid = null, complete_day, total_days }) => {

	const {color_soft} = useBgColor(isValid)

	return (
		<div className={`${color_soft} shadow-lg shadow-orange-700 mt-3 p-3 rounded-md`}>
			<p className="text-lg">{name}</p>
			<p>Tipo: <span className="font-bold">{suscription}</span></p>
			<div className="flex justify-between gap-3 items-center">
				<StatusTag isValid={isValid} />
				{
					(isValid === 'valid')
					? <BtnRegistrar id={id} />
					: (isValid === 'full')
						? <button>Asistencia completa</button>
						: <BtnActualizarSus />
					
				}
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
				<CounterDays complete_day={complete_day} total_days={total_days} isValid={isValid} />
			</div>
		</div>
	)
}