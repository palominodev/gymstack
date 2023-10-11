import { MdMenu } from "react-icons/md"
import { Navbar } from "../GymStack/components/Navbar"
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const Template = ({children}) => {
	const [slide, setSlide] = useState(false)
  return (
	<div className="flex relative">
		<div onClick={() => setSlide(state => !state)}
			className="sm:invisible peer/slide z-20 fixed left-4 top-4 text-3xl text-white rounded-full p-1">
			<MdMenu
		/>
		</div>
		<header className={`fixed sm:sticky sm:-left-16 h-screen peer-checked/slide:left-0 ${ slide ? 'left-0' : '-left-40' }  bg-blue-600 flex w-40 sm:w-16 sm:hover:w-40 peer group transition-all overflow-hidden z-10`}>
			<Navbar slide={slide} setSlide={setSlide} />
		</header>
		<main className="pt-10 sm:pt-0  bg-neutral-800 min-h-screen w-full sm:w-[calc(100%_-_4rem)] sm:peer-hover:w-[calc(100%_-_10rem)] transition-all">
			{children}
		</main>
	</div>
  )
}