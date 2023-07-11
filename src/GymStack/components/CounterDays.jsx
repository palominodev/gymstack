import { useBgColor } from "../../hooks/useBgColor"

export const CounterDays = ({ isValid, complete_day, total_days }) => {

	const { color } = useBgColor(isValid)

	return (
		<span
			className={`font-bold px-3 py-1 rounded-md ${color}`} >{complete_day} / {total_days} dias
		</span>
	)
}