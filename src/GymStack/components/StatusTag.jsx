import { useBgColor } from "../../hooks/useBgColor"

export const StatusTag = ({ isValid }) => {

	const { color } = useBgColor(isValid)
	return (
		<span className={`flex items-center text-center min-h-8 px-2 rounded-md font-bold ${color}`}>
			Estado:
			{
				(isValid === 'valid')
					? ' Activo'
					: (isValid === 'full')
						? ' Full'
						: ' Vencido'
			}
		</span>
	)
}