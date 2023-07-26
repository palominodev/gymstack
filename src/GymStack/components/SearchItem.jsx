/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useBgColor } from "../../hooks/useBgColor"
import { BtnActualizarSus } from "./BtnActualizarSus"
import { BtnRegistrar } from "./BtnRegistrar"
import { CounterDays } from "./CounterDays"
import { StatusTag } from "./StatusTag"
import { BtnFull } from "./BtnFull"
import { isDeprecated } from "../helpers/isDeprecated"

export const SearchItem = ({ name,vence, last_name, id, suscription, isValid, complete_day, total_days }) => {

	const [isValidState, setIsValidState] = useState(isValid)
	const {color_soft} = useBgColor(isValidState)

	useEffect(() => {
		if(complete_day === total_days){
			setIsValidState('full')
			return
		}
		if(isDeprecated(vence)){
			setIsValidState('deprecated')
			return
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [complete_day])

	return (
		<div className={`${color_soft} justify-self-center self-start shadow-lg shadow-orange-700 p-3 rounded-md h-auto sm:h-36 w-full sm:w-80`}>
			<p className="text-lg">{name} {last_name}</p>
			<p>Tipo: <span className="font-bold">{suscription}</span></p>
			<div className="flex justify-between gap-3 items-center">
				<StatusTag isValid={isValidState} />
				{
					(isValidState === 'valid')
					? <BtnRegistrar id={id} />
					: (isValidState === 'full')
						? <BtnFull />
						: <BtnActualizarSus vence={vence} id={id} />
					
				}
			</div>
			<div>
				<CounterDays complete_day={complete_day} total_days={total_days} isValid={isValidState} />
			</div>
		</div>
	)
}