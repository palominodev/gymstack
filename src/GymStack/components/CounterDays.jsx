import { useBgColor } from "../../hooks/useBgColor"

export const CounterDays = ({ isValid, complete_day, total_days }) => {

	const { BgColor } = useBgColor(isValid)

	return (
		<span
			className={`font-bold px-3 py-1 rounded-md ${BgColor(600)}`} >{complete_day} / {total_days} dias
		</span>
	)
}