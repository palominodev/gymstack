import { Navbar } from "../GymStack/components/Navbar"

export const Template = ({children}) => {
  return (
	<main className="bg-neutral-800 min-h-screen">
		<Navbar />
		{children}
	</main>
  )
}