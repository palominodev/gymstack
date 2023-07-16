import { StatusTag } from "./StatusTag"

export const RowTableUser = ({uid,name, apellido, phone, email, type, vence, status}) => {
  return (
	<tr className="even:bg-neutral-700">
		<td className="border p-3" >{uid}</td>
		<td className="border p-3" >{name}</td>
		<td className="border p-3" >{name}</td>
		<td className="border p-3" >{phone}</td>
		<td className="border p-3" >{email}</td>
		<td className="border p-3" >{type}</td>
		<td className="border p-3" >{vence}</td>
		<td className="border p-3" ><StatusTag isValid={status} /></td>
	</tr>
  )
}

//Rellenar la tabla con los datos de la api