import { useDispatch } from "react-redux"
import { StatusTag } from "./StatusTag"
import { startDeleteUser } from "../../store/gymstack/thunks"
import { stringToDate } from "../helpers/stringToDate"

export const RowTableUser = ({ uid, name, last_name, phone, email, type, vence, status }) => {

	const dispatch = useDispatch()
	const onDelete = () => {
		dispatch(startDeleteUser(uid))

	}
	return (
		<tr className="even:bg-neutral-700">
			<td className="border p-3" >{uid}</td>
			<td className="border p-3" >{name}</td>
			<td className="border p-3" >{last_name}</td>
			<td className="border p-3" >{phone}</td>
			<td className="border p-3" >{email}</td>
			<td className="border p-3" >{type}</td>
			<td className="border p-3" >{stringToDate(vence)}</td>
			<td className="border p-3" ><StatusTag isValid={status} /></td>
			<td className="border p-3" >
				<button
					className="bg-red-500 py-2 px-4 rounded-md font-bold"
					onClick={onDelete}
				>
					Borrar
				</button>
			</td>
		</tr>
	)
}

//Rellenar la tabla con los datos de la api