import { Navbar } from "../GymStack/components/Navbar"

export const Template = ({children}) => {
  return (
	<main>
		<Navbar />
		{children}
	</main>
  )
}