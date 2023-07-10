export const CounterDays = ({status,isValid,complete_day,total_days}) => {
	return (
		<span
			className={`font-bold px-3 py-1 rounded-md ${status(isValid)}600`} >{complete_day} / {total_days} dias
		</span>
	)
}