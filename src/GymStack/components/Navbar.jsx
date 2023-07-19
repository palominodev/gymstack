import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { startLogout } from "../../store/auth/thunks"

export const Navbar = () => {
	const dispatch = useDispatch()
	const onLogout = () => {
		dispatch(startLogout())
	}
	return (
		<nav className=" bg-orange-500 flex justify-between gap-1 w-full pr-4">
			<ul className="flex  justify-center">
				<li className={`p-4`}>
					<NavLink
						className={'font-bold text-white uppercase'}
						to={'admin'}>Inicio</NavLink>
				</li>
				<li className={`p-4`}>
					<NavLink
						className={'font-bold text-white uppercase'}
						to={'client'}>Clientes</NavLink>
				</li>
				<li className={`p-4`}>
					<NavLink
						className={'font-bold text-white uppercase'}
						to={'plans'}>Planes</NavLink>
				</li>
			</ul>
			<button
				onClick={onLogout}
				className="bg-black text-white px-6 py-2 self-center rounded-md">Cerrar Sesión</button>
		</nav>
	)
}