import { useBgColor } from "../../hooks/useBgColor"

export const StatusTag = ({ isValid }) => {

	const { BgColor } = useBgColor(isValid)
	return (
		<span className={`flex items-center text-center min-h-8 px-2 rounded-md font-bold ${BgColor(600)}`}>
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