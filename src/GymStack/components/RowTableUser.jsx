import { useDispatch } from "react-redux"
import { StatusTag } from "./StatusTag"
import { startDeleteUser } from "../../store/gymstack/thunks"
import { stringToDate } from "../helpers/stringToDate"
import { useEffect, useState } from "react"
import { isDeprecated } from "../helpers/isDeprecated"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
export const RowTableUser = ({complete_days, total_days, uid, name, last_name, phone, email, type, vence, status }) => {

	const [isValid, setIsValid] = useState(status)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const onDelete = () => {
		Swal.fire({
			icon: "question" ,
			title: `¿Estas seguro que desear borrar a ${name} ${last_name}?`,
			text: 'Todas la informacion de este usuario será eliminada para siempre',
			showConfirmButton: true,
			confirmButtonText: `Si, eliminar`,
			confirmButtonColor: 'red',
			showCancelButton: true,
			cancelButtonColor: 'Cancelar',
		}).then( result => {
			if(result.isConfirmed) {
				dispatch(startDeleteUser(uid))
			}
		})
	}

	const onEdit = () => {
		navigate(`/edit/${uid}`)
	}

	useEffect(() => {
		if(complete_days === total_days) {
			setIsValid('full')
		}
		if(isDeprecated(vence)){
			setIsValid('deprecated')
		}
	},[vence]) 
	return (
		<tr className="even:bg-neutral-700">
			<td className="border p-3" >{uid}</td>
			<td className="border p-3" >{name}</td>
			<td className="border p-3" >{last_name}</td>
			<td className="border p-3" >{phone}</td>
			<td className="border p-3" >{email}</td>
			<td className="border p-3" >{type}</td>
			<td className="border p-3" >{stringToDate(vence)}</td>
			<td className="border p-3" ><StatusTag isValid={isValid} /></td>
			<td className="border p-3" >
				<div className="flex gap-1">
					<button
						className="bg-red-500 py-2 px-4 rounded-md font-bold"
						onClick={onDelete}
					>
						Borrar
					</button>
					<button
						onClick={onEdit}
						className="bg-amber-500 py-2 px-4 rounded-md font-bold"
					>Editar</button>
					{/* <button
						className="bg-blue-600 py-2 px-4 rounded-md font-bold"
					>Registro</button> */}
				</div>
			</td>
		</tr>
	)
}

//Rellenar la tabla con los datos de la api