import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
	<nav>
		<ul>
			<li>
				<NavLink className={'font-bold'} to={'admin'}>Inicio</NavLink>
			</li>
			<li>
				<NavLink className={'font-bold'} to={'client'}>Clientes</NavLink>
			</li>
			<li>
				<NavLink className={'font-bold'} to={'plans'}>Planes</NavLink>
			</li>
			{/* <li>Planes</li> */}
		</ul>
	</nav>
  )
}