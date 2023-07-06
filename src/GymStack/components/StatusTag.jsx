export const StatusTag = ({isValid}) => {
	const status = () => {
		return (isValid === 'deprecated')
				? 'bg-red-800'
 				: 'bg-green-800'
	}
  return (
	<span className={`flex items-center h-8 px-2 rounded-full ${status()}`}>
		Estado: 
		{
			(isValid === 'deprecated') ? ' Vencida' : ' Activa'
		}
	</span>
  )
}