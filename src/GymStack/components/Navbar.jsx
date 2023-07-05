import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
	<nav className="mb-6 bg-orange-500">
		<ul className="flex justify-center">
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
	</nav>
  )
}