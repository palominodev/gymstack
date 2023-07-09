import { SearchItem } from "./SearchItem"

export const UserAttendance = () => {
  return (
    <article className="bg-orange-600 p-6 w-full rounded-md">
      <form className="flex flex-wrap">
        <label className="block w-full text-xl font-bold mb-2" htmlFor="search">Buscar Usuario</label>
        <input className="block w-full text-xl py-3 px-2 rounded-md" type="text" name="search" id="search" />
      </form>
      <section>
        <SearchItem isValid={'deprecated'} suscription={'PRO'} name={"Jeremy Scott Palomino Fernandez"} />
        <SearchItem isValid={'valid'} suscription={'PRO'} name={"Jeremy Scott Palomino Fernandez"} />
        <SearchItem isValid={'full'} suscription={'PRO'} name={"Jeremy Scott Palomino Fernandez"} />
      </section>
    </article>
  )
}