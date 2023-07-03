import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
	<nav>
		<ul>
			<li>
				<NavLink to={'admin'}>Inicio</NavLink>
			</li>
			<li>
				<NavLink to={'client'}>Clientes</NavLink>
			</li>
			{/* <li>
				<NavLink to={'instructores'}>Instructores</NavLink>
			</li> */}
			{/* <li>Planes</li> */}
		</ul>
	</nav>
  )
}