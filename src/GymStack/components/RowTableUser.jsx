import { StatusTag } from "./StatusTag"

export const RowTableUser = ({uid,name, apellido, numero, correo, suscripcion, vence, status}) => {
  return (
	<tr className="even:bg-neutral-700">
		<td className="border p-3" >{uid}</td>
		<td className="border p-3" >{name}</td>
		<td className="border p-3" >{name}</td>
		<td className="border p-3" >{numero}</td>
		<td className="border p-3" >{correo}</td>
		<td className="border p-3" >{suscripcion}</td>
		<td className="border p-3" >{vence}</td>
		<td className="border p-3" > <StatusTag isValid={status} /> </td>
	</tr>
  )
}

//Rellenar la tabla con los datos de la api