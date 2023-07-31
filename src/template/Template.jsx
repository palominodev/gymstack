import { MdMenu } from "react-icons/md"
import { Navbar } from "../GymStack/components/Navbar"
import { useState } from "react"

export const Template = ({children}) => {
	const [slide, setSlide] = useState(true)
  return (
	<div className="flex relative">
		<MdMenu 
			onClick={() => setSlide(state => !state)}
			className="sm:invisible peer/slide z-10 absolute left-5 top-5 text-3xl text-white"/>
		{/* <input className="peer/slide z-10 absolute left-20 bg-green-500 " type="checkbox" name="name" id="name" /> */}
		<header className={`absolute sm:sticky sm:-left-16 h-screen peer-checked/slide:left-0 ${ slide ? 'left-0' : '-left-40' }  bg-orange-500 flex w-40 sm:w-16 sm:hover:w-40 peer group transition-all overflow-hidden`}>
			<Navbar slide={slide} setSlide={setSlide} />
		</header>
		<main className="pt-10 sm:pt-0  bg-neutral-800 min-h-screen w-full sm:w-[calc(100%_-_4rem)] sm:peer-hover:w-[calc(100%_-_10rem)] transition-all">
			{children}
		</main>
	</div>
  )
}