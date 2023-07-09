export const StatusTag = ({isValid}) => {
	const status = (isValid) => {
		return (isValid === 'valid')
				? 'bg-green-600'
				: (isValid === 'full')
					? 'bg-yellow-600'
					: 'bg-red-600'
	}
  return (
	<span className={`flex items-center text-center min-h-8 px-2 rounded-md font-bold ${status(isValid)}`}>
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