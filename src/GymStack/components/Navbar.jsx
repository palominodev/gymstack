import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { startLogout } from "../../store/auth/thunks"
import { FaHome, FaUsers } from 'react-icons/fa'
import { MdLibraryBooks } from 'react-icons/md'
import { IoMdExit } from 'react-icons/io'

export const Navbar = ({slide,setSlide}) => {
	const dispatch = useDispatch()
	const onLogout = () => {
		dispatch(startLogout())
	}
	return (
		<nav className="flex flex-col gap-1 px-2 justify-between">
			<ul className="flex flex-col justify-center mt-52">
				<li 
					className={`p-4 flex items-center gap-1`}>
					<FaHome className="text-2xl mr-3 fill-white" />
					<NavLink
						onClick={() => setSlide(false)}
						className={'font-bold text-white uppercase'}
						to={'admin'}>Inicio</NavLink>
				</li>
				<li className={`p-4 flex items-center gap-1`}>
					<FaUsers className="text-2xl mr-3 fill-white" />
					<NavLink
						onClick={() => setSlide(false)}
						className={'font-bold text-white uppercase'}
						to={'client'}>Clientes</NavLink>
				</li>
				<li className={`p-4 flex items-center gap-1`}>
					<MdLibraryBooks className="text-2xl mr-3 fill-white" />
					<NavLink
						onClick={() => setSlide(false)}
						className={'font-bold text-white uppercase'}
						to={'plans'}>Planes</NavLink>
				</li>
			</ul>
			<button
				onClick={onLogout}
				className={`relative flex items-center gap-4 sm:group-hover:w-3/4 sm:w-10 p-2 m-2 transition-all bg-black text-white rounded-md overflow-hidden`}>
					<IoMdExit className="text-2xl" />
					<span className="absolute left-14">Salir</span>
			</button>
		</nav>
	)
}