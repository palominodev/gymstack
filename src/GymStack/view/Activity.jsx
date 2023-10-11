import { ActivityCard } from "../components/ActivityCard"

export const Activity = () => {
  return (
	<section className="p-3">
      <div className="flex justify-between mb-4 flex-wrap">
        <h2 className="text-5xl md:text-6xl font-bold text-white" >Actividad</h2>
      </div>
	<section className="p-2 bg-neutral-700 rounded-md">
        <ActivityCard 
			color={'bg-green-400/20'} 
			action={'Registro de entrada'} 
			dateAction={Date.now()}
		/>
        <ActivityCard 
			color={'bg-red-400/20'} 
			action={'Eliminación de usuario'} 
			dateAction={Date.now()}
		/>
        <ActivityCard 
			color={'bg-yellow-400/20'} 
			action={'Plan actualizado'}
			dateAction={Date.now()}
		/>
      </section>
    </section>
  )
}