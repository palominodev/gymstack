import { SearchItem } from "./SearchItem"

export const UserAttendance = () => {
  return (
    <article className="bg-orange-600 p-6 w-full rounded-md">
      <form className="flex flex-wrap">
        <label className="block w-full text-xl font-bold mb-2" htmlFor="search">Buscar Usuario</label>
        <input className="block w-full text-xl py-3 px-2 rounded-md border-2 border-orange-500" type="text" name="search" id="search" />
      </form>
      <section className="h-80 overflow-auto mt-4">
        <SearchItem
          complete_day={1}
          total_days={3}
          isValid={'deprecated'} 
          suscription={'Basic'} 
          name={"Arturo Jimenez Reyes"} />
        <SearchItem 
          complete_day={3}
          total_days={5}
          isValid={'valid'} 
          suscription={'PRO'} 
          name={"Jeremy Scott Palomino Fernandez"} />
        <SearchItem 
          complete_day={7}
          total_days={7}
          isValid={'full'} 
          suscription={'Expert'} 
          name={"Miguel Salas"} />
      </section>
    </article>
  )
}