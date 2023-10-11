import { format } from "date-fns"
import { es } from "date-fns/locale"

// eslint-disable-next-line react/prop-types
export const ActivityCard = ({color, action, dateAction}) => {
	const dateFormat = format(dateAction,'PPPPpp',{
		locale: es
	})
  return (
	<article className={`${color} rounded my-2 first:mt-0 last:mb-0 p-4`}>
		<p>Actividad: <span className="font-bold">{action}</span></p>
		<p>fecha: <span className="font-bold">{dateFormat}</span></p>
	</article>
  )
}